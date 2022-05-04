import { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField, Button } from '@mui/material';
import { AllInclusive, AccountCircle, Key } from '@mui/icons-material';
import style from './index.module.css';

interface IProps {}

const LoginComponent: React.FC<IProps> = (props) => {

    const [userPhone, setUserPhone] = useState<string>('')
    const [userVerificationCode, setUserVerificationCode] = useState<string>('');
    const [loginState, setLoginState] = useState<boolean>(false);
    const [verificationCodeState, setVerificationCodeState] = useState<boolean>(false);
    const timing = 60;
    const [time, setTime] = useState<number>(timing);

    const handleSendVerificationCode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        console.log('发送验证码');
        // 需要向手机发送一个二维码
        setVerificationCodeState(true);
        let timer = setTimeout(() => {
            if (time === 0) {
                clearInterval(timer);
                setVerificationCodeState(false);
                setTime(timing);
            }
            setTime(time - 1);
        }, 1000);
    }

    const handleUserRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        console.log('注册');
    }

    const handleUserLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if (loginState) return; // 如果现在处于登录状态则先暂时忽略点击, 直到登录成功
        setLoginState(true);
        console.log('登录', userPhone, userVerificationCode);
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
        </div>
    )
}

export default LoginComponent;