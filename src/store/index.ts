import { useState } from 'react';
import { ILoginData, IUserDetailResponse } from '@/types/api';
import { login } from '@/api';
import { createStore } from 'redux';

export const [userInfo, setUserInfo] = useState<IUserDetailResponse>();
export const [loginState, setLoginState] = useState<boolean>(false);

const store = createStore(missionCenter);

function missionCenter(state = {
    userInfo,
    loginState
}, action: { type: string, payload: any }) {
    console.log(action.type, action.payload);
    switch (action.type) {
        case 'SIGN_IN':
            console.log('登入');
            return {...state};
        case 'SIGN_OUT':
            console.log('登出');
            return {...state};
        default:
            return {...state};
    }
}

/**
 * 用户登陆
 */
export async function useSignIn(payload: ILoginData): Promise<void> {
    const result = await login(payload);
    console.log(result);
}

/**
 * 用户登出
 */
export function signOut() {

}

export default store;