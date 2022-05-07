import style from './index.module.css';
import UserInfo from './components/UserInfo';
import JumpShowPaper from './components/JumpShowPaper'; 
import { Favorite } from '@mui/icons-material';

interface IProps {}

const Component: React.FC<IProps> = (props) => {
    // 个人id: 559680093
    return (
        <div
            className={style['user-container']}
        >
            <UserInfo />
            <JumpShowPaper
                icon={<Favorite sx={{color: 'red'}}/>}
                text="我喜欢的歌曲"
                ifShowRightIcon={true}
                jumpPath="/likeMusic"
            />
            <JumpShowPaper
                icon={<Favorite sx={{color: 'red'}}/>}
                text="我关注的歌手"
                ifShowRightIcon={false}
                jumpPath="/likeMusic"
            />
        </div>
    )
}

export default Component;