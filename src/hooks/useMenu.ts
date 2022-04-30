import { useState, useEffect } from 'react';
import { IMenu } from '../types';
import { Public, Castle, Boy } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function useMenu() {
    const navigate = useNavigate();
    const [menuList] = useState<IMenu[]>([{
        key: 1,
        icon: Public,
        label: '关注',
        route: '/care'
    }, {
        key: 2,
        icon: Castle,
        label: '首页',
        route: '/'
    }, {
        key: 3,
        icon: Boy,
        label: '我',
        route: '/user'
    }]);
    const [menu, setMenu] = useState<IMenu>();

    const toggleMenu = (event: React.SyntheticEvent<Element, Event>, menuValue: IMenu) => {
        setMenu(menuValue);
        navigate(menuValue.route);
    };

    useEffect(() => {
        let index: number = 0;
        menuList.forEach((item, i) => {
            if (item.route === window.location.pathname) index = i;
        });
        setMenu(menuList[index]);
    }, [])
    
    return {
        menuList,
        menu,
        toggleMenu,
    };
}