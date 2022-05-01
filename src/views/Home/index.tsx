import style from './index.module.css';
import PopularSong from './component/PopularSong';
import PopularRadio from './component/PopularRadio';

interface IProps {}
const HomeComponent: React.FC<IProps> = (props) => {

    return (
        <div className={style["home-container"]}>
            {/* 热门的歌曲 */}
            <PopularSong />
            {/* 推荐的电台 */}
            <PopularRadio />
            {/* TODO: 待定, 其他功能 */}
        </div>
    )
}

export default HomeComponent;