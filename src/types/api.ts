export interface IAxiosResponse {
    // code: number
}

export interface ILoginData {
    phone: string
    password: string
    // 国家码, 用国外手机号登录
    countrycode?: string
    // md5加密后的密码, 使用后会使password失效
    md5_password?: string
    // 验证码, 使用后会使password失效
    captcha?: string
}

export interface IVerificationCodeRequest {
    phone: string
    // 国家区号, 默认86
    ctcode?: string
}

export interface IVerificationCodeResponse {
    code: number
    data: boolean
}

export interface IVerify {
    phone: string,
    captcha: string
}

export interface IUserDetailResponse {
    adValid: boolean
    bindings: {
        bindingTime: number
        expired: boolean
        expiresIn: number
        id: number
        refreshTime: number
        tokenJsonStr: any
        type: number
        url: string
        userId: number
    }[]
    code: number
    createDays: number
    createTime: number
    level: number
    listenSongs: number
    mobileSign: boolean
    pcSign: false
    peopleCanSeeMyPlayRecord: true
    profile: {
        accountStatus: number
        allSubscribedCount: number
        artistIdentity: any[]
        authStatus: number
        authority: number
        avatarDetail: any
        avatarImgId: number
        avatarImgIdStr: string
        avatarImgId_str: string
        avatarUrl: string
        backgroundImgId: number
        backgroundImgIdStr: string
        backgroundUrl: string
        birthday: number
        blacklist: boolean
        cCount: number
        city: number
        createTime: number
        defaultAvatar: false
        description: string
        detailDescription: string
        djStatus: number
        eventCount: number
        expertTags: any
        experts: object
        followMe: boolean
        followTime: any
        followed: boolean
        followeds: number
        follows: number
        gender: number
        inBlacklist: boolean
        mutual: boolean
        newFollows: number
        nickname: string
        playlistBeSubscribedCount: number
        playlistCount: number
        privacyItemUnlimit: {
            are: boolean
            area: boolean
            college: boolean
            villageAge: boolean
        }
        province: number
        remarkName: any
        sCount: number
        sDJPCount: number
        signature: string
        userId: number
        userType: number
        vipType: number
    }
    userPoint: {
        balance: number
        blockBalance: number
        status: number
        upDateTime: number
        userId: number
        version: number
    }
}

export interface IUserWatchResponse {
    code: number
    follow: {
        accountStatus: number
        authStatus: number
        avatarDetail: {
            identityIconUrl: string
            identityLevel: number
            userType: number
        }
        avatarUrl: string
        eventCount: number
        expertTags: any
        experts: any
        followed: boolean
        followeds: number
        follows: number
        gender: number
        mutual: boolean
        nickname: string
        playlistCount: number
        py: string
        remarkName: any
        signature: string
        time: number
        userId: number
        userType: number
        vipRights: {
            associator: {
                rights: boolean
                vipCode: number
            }
            musicPackage: any
            redVipAnnualCount: number
            redVipLevel: number
        }
        vipType: number
    }[]
    more: false
    touchCount: 0
}