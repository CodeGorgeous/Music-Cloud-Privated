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

export interface IUserLoginData {
    account: {
        anonimousUser: boolean
        ban: number
        baoyueVersion: number
        createTime: number
        donateVersion: number
        id: number
        salt: string
        tokenVersion: number
        type: number
        uninitialized: boolean
        userName: string
        vipType: number
        viptypeVersion: number
        whitelistAuthority: number
    }
    bindings: {
        bindingTime: number
        expired: boolean
        expiresIn: number
        id: number
        refreshTime: number
        tokenJsonStr: string
        type: number
        url: string
        userId: number
    }[]
    code: 200,
    cookie: string
    loginType: number
    profile: {
        accountStatus: number
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
        city: number
        defaultAvatar: boolean
        description: string
        detailDescription: string
        djStatus: number
        eventCount: number
        expertTags: any
        experts: {}
        followed: boolean
        followeds: number
        follows: number
        gender: number
        mutual: boolean
        nickname: string
        playlistBeSubscribedCount: number
        playlistCount: number
        province: number
        remarkName: any
        signature: string
        userId: number
        userType: number
        vipType: number
    }
    token: string
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

export interface IUserLikeMusicListResponse {
    checkPoint: number
    code: number
    ids: number[]
}

interface IUserLikeMusicDetailSong {
    br: number
    fid: number
    size: number
    sr: number
    vd: number
}

export interface IUserLikeMusicDetailListResponse {
    code: number
    privileges: {
        chargeInfoList: {
            chargeMessage: any
            chargeType: number
            chargeUrl: any
            rate: number
        }[],
        cp: number
        cs: boolean
        dl: number
        dlLevel: string
        downloadMaxBrLevel: string
        downloadMaxbr: number
        fee: number
        fl: number
        flLevel: string
        flag: number
        freeTrialPrivilege: {
            listenType: any
            resConsumable: boolean
            userConsumable: boolean
        }
        id: number
        maxBrLevel: string
        maxbr: number
        payed: number
        pl: number
        plLevel: string
        playMaxBrLevel: string
        playMaxbr: number
        preSell: boolean
        rscl: any
        sp: number
        st: number
        subp: number
        toast: boolean
    }[]
    song: {
        a: any
        al: {
            id: number
            name: string
            pic: number
            picUrl: string
            tns: any[]
        }
        alia: any[]
        ar: {
            alias: any[]
            id: number
            name: string
            tns: any[]
        }[]
        cd: string
        cf: string
        copyright: number
        cp: number
        crbt: any
        djId: number
        dt: number
        entertainmentTags: any
        fee: number
        ftype: number
        h: IUserLikeMusicDetailSong
        hr: any
        id: number
        l: IUserLikeMusicDetailSong
        m: IUserLikeMusicDetailSong
        mark: number
        mst: number
        mv: number
        name: string
        no: number
        noCopyrightRcmd: any
        originCoverType: number
        originSongSimpleData: any
        pop: number
        pst: number
        publishTime: number
        resourceState: boolean
        rt: any
        rturl: any
        rtUrls: any[]
        rtype: number
        rurl: any
        s_id: number
        single: number
        songJumpInfo: any
        sq: IUserLikeMusicDetailSong
        st: number
        t: string
        tagPicList: any
        v: number
        version: number
    }[]
}
