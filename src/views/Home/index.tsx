import style from './index.module.css';
import BottomNavigation from '@/components/BottomNavigation';
import { Outlet } from 'react-router-dom'

interface IProps {}
const HomeComponent: React.FC<IProps> = (props) => {
    return (
        <div className={style["home-container"]}>
            <div className={style["home-main"]}>
                <Outlet />
            </div>
            <div className={style["home-operate"]}>
                <BottomNavigation />
            </div>
        </div>
    )
}

export default HomeComponent;
// {/* 热门的歌曲 */}
// <PopularSong />
// {/* 推荐的电台 */}
// <PopularRadio />
// {/* TODO: 待定, 其他功能 */}