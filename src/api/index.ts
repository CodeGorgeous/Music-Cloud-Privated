import instance from '../utils/axios';
import {
    ILoginData,
    IVerificationCodeRequest,
    IVerificationCodeResponse,
    IVerify,
    IUserDetailResponse,
    IUserWatchResponse,
    IUserLoginData,
    IUserLikeMusicListResponse,
    IUserLikeMusicDetailListResponse
} from '@/types/api';

/**
 * 手机登录
 */
export async function login(loginMessage: ILoginData) {
    return await instance<IUserLoginData>({
        url: '/login/cellphone',
        params: loginMessage
    })
};

/**
 * 获取验证码
 * @param codeMessage
 * @returns 
 */
export async function obtainVerificationCode(codeMessage: IVerificationCodeRequest) {
    return await instance<IVerificationCodeResponse>({
        url: '/captcha/sent',
        params: codeMessage
    });
};

/**
 * 验证验证码
 * @param verifyMessage 
 * @returns 
 */
export async function verifyVerificationCode(verifyMessage: IVerify) {
    return await instance({
        url: '/captcha/verify',
        params: verifyMessage
    });
}

/**
 * 获取用户详情
 * @param uid 用户id
 * @returns 
 */
export async function getUserDetails(uid: number) {
    return await instance<IUserDetailResponse>({
        url: '/user/detail',
        params: {
            uid
        }
    });
}

/**
 * 获取用户登录状态
 * @returns 
 */
export async function getUserLoginStatus() {
    return await instance<any>({
        url: '/login/status'
    });
}

/**
 * 获取用户关注列表
 * @param uid 用户id
 * @returns 
 */
export async function getUserWatchList(uid: number) {
    return await instance<IUserWatchResponse>({
        url: '/user/follows',
        params: {
            uid
        }
    });
}

/**
 * 获取用户喜欢的歌曲列表, 前提为用户已登陆
 * @param uid 
 * @returns 
 */
export async function getLikeMusicList(uid: number) {
    return await instance<IUserLikeMusicListResponse>({
        url: '/likelist',
        params: {
            uid
        }
    });
}

/**
 * 获取歌曲详情
 * @param ids 多个歌曲可以使用,进行链接
 * @returns 
 */
export async function getMusicDetailList(ids: string) {
    return await instance<IUserLikeMusicDetailListResponse>({
        url: '/song/detail',
        params: {
            ids
        }
    });
}