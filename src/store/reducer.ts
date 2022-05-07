import { _SET_USER_INFO, _CLEAR_USER_INFO } from './action';
import { IUserDetailResponse } from '@/types/api';

interface state {
    userInfo: IUserDetailResponse | {}
    loginState: boolean
}

export function missionCenter(state: state = {
    userInfo: {},
    loginState: false
}, action: { type: string, payload: any }) {
    switch (action.type) {
        case _SET_USER_INFO:
            return {
                userInfo: action.payload,
                loginState: true
            };
        case _CLEAR_USER_INFO:
            return {
                userInfo: {},
                loginState: false
            };
        default:
            return {...state};
    }
}