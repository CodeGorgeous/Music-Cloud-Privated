import { useState, useEffect } from 'react';
import { Paper, Avatar } from '@mui/material';
import { getUserDetails, getUserWatchList } from '../../../../api';
import { IUserDetailResponse } from '../../../../types/api';
import style from './index.module.css';
import { ArrowForwardIos } from '@mui/icons-material';

interface IProps {}

const Component: React.FC<IProps> = (props) => {
    // 个人id: 559680093
    const [userInfo, setUserInfo] = useState<IUserDetailResponse>();
    const [userLoadingLock, setUserLoadingLock] = useState<boolean>(false);

    async function init() {
        let userInfo = await getUserDetails(559680093);
        setUserInfo(userInfo);
        setUserLoadingLock(true);
    };

    useEffect(() => {
        init();
    }, [])

    return (
        <Paper
            className={style['user-detail-paper']}
            elevation={4}
        >
            <Avatar
                className={style['user-detail-paper-avatar']}
                alt=""
                src={userInfo?.profile?.avatarUrl}
            />
            <div className={style['user-detail-paper-box']}>
                <div className={style['user-detail-paper-nickname']}>{userInfo?.profile?.nickname || '用户昵称'}</div>
                <div className={style['user-detail-paper-update-message']}>
                    修改资料
                    <ArrowForwardIos
                        sx={{
                            fontSize: '0.9rem'
                        }}
                        color="primary"
                    />
                </div>
            </div>
        </Paper>
    )
}

export default Component;