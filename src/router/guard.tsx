import { useLocation, useRoutes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { router } from '@/router/index';

// 路由白名单
const routerWhiteList = ['/login'];


function BeforeRouter() {
    const location = useLocation();
    // 用于判断当前路由是否有权限进入
    useEffect(() => {
        console.log('执行');
    })
    const Component = useRoutes(router);
    return false ? Component : <Navigate to="/login"/>;
}

export default BeforeRouter;