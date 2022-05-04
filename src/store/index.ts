import { useState } from 'react';
import { ILoginData, IUserDetailResponse } from '@/types/api';
import { login, verifyVerificationCode } from '@/api';

export const [userInfo, setUserInfo] = useState<IUserDetailResponse>();
export const [loginState, setLoginState] = useState<boolean>(false);

/**
 * 用户登陆
 */
export async function signIn(payload: ILoginData) {
    const result = await login(payload);
    console.log(result);
}

/**
 * 用户登出
 */
export function signOut() {

}