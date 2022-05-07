import { useRoutes, useNavigate, useLocation } from 'react-router-dom';
import { router } from '@/router/index';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IUserDetailResponse } from '@/types/api';
import { _CLEAR_USER_INFO, _SET_USER_INFO } from '@/store/action';
import { getUserDetails } from '@/api';
import store from '@/store';
import AutoSignInComponent from '@/components/AutoSignIn';

interface IProps {
  onSignIn: (payload: IUserDetailResponse) => void
}

const App: React.FC<IProps> = (props) => {
  const Component = useRoutes(router);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginLock, setLoginLock] = useState(false);

  useEffect(() => {
    synchronizeInitStore();
  }, [location])

  async function synchronizeInitStore() {
    if (location.pathname === '/login') {
      setLoginLock(true);
    } else {
      let tempObj: {
        [key: string]: string
      } = {};
      (document.cookie.split("; ")).forEach(item => {
        const t = item.split("=");
        tempObj[t[0]] = t[1];
      });
      if (tempObj.user_lock && tempObj.user_id) {
        // 同步仓库
        if (!store.getState().loginState) {
          await getUserDetails(+tempObj.user_id).then(payload => {
            props.onSignIn && props.onSignIn(payload);
            setLoginLock(true);
          })
        } else {
          setLoginLock(true);
        }
      } else {
        navigate('/login');
        setLoginLock(true);
      }
    }
  }
  return loginLock ? Component : <AutoSignInComponent />;
}

export default connect(store => ({}),
(dispatch) => {
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
}
)(App);
