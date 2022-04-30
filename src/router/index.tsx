import { IRouter } from '../types/router';
import Home from '../views/Home';
import User from '../views/User';
import Care from '../views/Care';
import NotFound from '../views/NoResources';

const router: IRouter[] = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/care',
    name: 'Care',
    component: Care
}, {
    path: '/user',
    name: 'User',
    component: User
}, {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
}];

export default router;