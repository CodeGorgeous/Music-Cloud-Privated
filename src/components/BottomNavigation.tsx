import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import useMenu from '../hooks/useMenu';

const Component: React.FC<{}> = (props) => {
    const { menu, menuList, toggleMenu } = useMenu();
    const menuNodeList = menuList.map((item) => {
      const { key, label, icon: ActionIcon } = item;
      return (
        <BottomNavigationAction
          key={key}
          label={label}
          value={item}
          icon={ <ActionIcon /> }
        />
      )
    });
    return (
        <BottomNavigation
          value={menu}
          onChange={toggleMenu}
        >
          { menuNodeList }
        </BottomNavigation>
    )
}

export default Component;