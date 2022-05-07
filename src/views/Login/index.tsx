import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField, Button, AlertColor } from '@mui/material';
import { AllInclusive, AccountCircle, Key } from '@mui/icons-material';
import style from './index.module.css';
import Notification from '@/components/Notification';
import { obtainVerificationCode } from '@/api';
import { connect } from 'react-redux';
import { _SET_USER_INFO, _CLEAR_USER_INFO } from '@/store/action';
import { IUserDetailResponse } from '@/types/api';
import { login, getUserDetails } from '@/api';
import cookie from 'cookie';
import { useNavigate } from 'react-router-dom';

interface IProps {
    onSignIn: (payload: IUserDetailResponse) => void
    onSignOut: () => void
}

const LoginComponent: React.FC<IProps> = (props) => {

    const [userPhone, setUserPhone] = useState<string>('')
    const [userVerificationCode, setUserVerificationCode] = useState<string>('');
    const [loginState, setLoginState] = useState<boolean>(false);
    const [verificationCodeState, setVerificationCodeState] = useState<boolean>(false);
    const timing = 60;
    const [time, setTime] = useState<number>(timing);
    const [notification, setNotification] = useState<{
        open: boolean
        type: AlertColor
        text: string
    }>({
        open: false,
        type: 'info',
        text: ''
    });

    const handleSendVerificationCode = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(userPhone)) {
            setNotification({
                open: true,
                type: 'error',
                text: '手机号码不正确'
            });
            return;
        };
        await obtainVerificationCode({
            phone: userPhone
        }).then(resp => {
            if (resp.code === 200) {
                setNotification({
                    open: true,
                    type: 'success',
                    text: '验证码已成功发出, 注意查收'
                });
                // 发送开关进入倒计时
            } else {
                setNotification({
                    open: true,
                    type: 'error',
                    text: '验证码发送失败, 请重新尝试'
                });
            }
        });
        // setVerificationCodeState(true);
        // let timer = setTimeout(() => {
        //     if (time === 0) {
        //         clearInterval(timer);
        //         setVerificationCodeState(false);
        //         setTime(timing);
        //     }
        //     setTime(time - 1);
        // }, 1000);
    }

    const handleUserRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        console.log('注册');
    }
    
    const navigate = useNavigate();
    const handleUserLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        if (loginState) return; // 如果现在处于登录状态则先暂时忽略点击, 直到登录成功
        if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(userPhone)) {
            setNotification({
                open: true,
                type: 'error',
                text: '手机号码不正确'
            });
            return;
        };
        if (!userVerificationCode) {
            return
        }
        setLoginState(true);
        const payloadTemp = await login({
            phone: userPhone,
            password: '',
            captcha: userVerificationCode
        });
        let temp = cookie.parse(payloadTemp.cookie);
        temp['user_id'] = payloadTemp.account.id.toString();
        temp['user_lock'] = "true";
        for (const key in temp) {
            const result = cookie.serialize(key, temp[key], {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            });
            document.cookie = result;
        }
        const payload = await getUserDetails(payloadTemp.account.id);
        props.onSignIn && props.onSignIn(payload);
        setLoginState(false);
        setNotification({
            open: true,
            type: 'success',
            text: '登录成功'
        });
        navigate('/');
    }

    return (
        <div className={style['login-container']}>
            <AllInclusive className={style['login-icon']}/>
            <div className={style['login-operate']}>
                <div className={style['login-row']}>
                    <AccountCircle className={style['login-row-icon']}/>
                    <TextField
                        label="手机号"
                        variant="standard"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                    />
                </div>
                <div className={style['login-row']}>
                    <Key className={style['login-row-icon']}/>
                        <TextField
                            className={style['login-row-input']}
                            label="验证码"
                            variant="standard"
                            value={userVerificationCode}
                            onChange={(e) => setUserVerificationCode(e.target.value)}
                        />
                        <Button
                            variant="outlined"
                            onClick={handleSendVerificationCode}
                            disabled={verificationCodeState}
                        >
                            { verificationCodeState ? `${time}s` : '发送' }
                        </Button>
                </div>
                <div className={style['login-btn']}>
                    <Button
                        variant="outlined"
                        onClick={handleUserRegister}
                    >
                        注册
                    </Button>
                    <LoadingButton
                        className={style['login-submit']}
                        variant="contained"
                        onClick={handleUserLogin}
                        loading={loginState}
                    >
                        登录
                    </LoadingButton>
                </div>
            </div>
            <Notification
                open={notification.open}
                type={notification.type}
                text={notification.text}
                onClose={() => setNotification({
                    open: false,
                    type: 'info',
                    text: ''
                })}
            />
        </div>
    )
}

export default connect((store: any) => {
    return {}
  }, (dispatch) => {
    return {
        onSignIn(payload: IUserDetailResponse): void {
            dispatch({
                type: _SET_USER_INFO,
                payload
            })
        },
        onSignOut(): void {
            dispatch({
                type: _CLEAR_USER_INFO
            })
        }
    }
  })(LoginComponent);