import style from './index.module.css';
import UserInfo from './components/UserInfo';
import UserLike from './components/UserLike';

interface IProps {}

const Component: React.FC<IProps> = (props) => {
    // 个人id: 559680093
    return (
        <div
            className={style['user-container']}
        >
            <UserInfo />
            <UserLike />
        </div>
    )
}

export default Component;