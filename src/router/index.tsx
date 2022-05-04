import { IRouter } from '@/types/router';
import Home from '@/views/Home';
import User from '@/views/User';
import Care from '@/views/Care';
import Login from '@/views/Login'
import NotFound from '@/views/NoResources';

export const router: IRouter[] = [{
    path: '/login',
    element: <Login />
}, {
    path: '/',
    element: <Home />,
    children: [{
        path: '/care',
        element: <Care />
    }, {
        path: '/user',
        element: <User />
    }]
}, {
    path: '*',
    element: <NotFound />
}];