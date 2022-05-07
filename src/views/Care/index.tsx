import { connect } from 'react-redux';
import { IUserDetailResponse } from '@/types/api';

interface IProps {
    store: {
        userInfo: IUserDetailResponse
        loginState: boolean
    }
}

const CareComponent: React.FC<IProps> = (props) => {
    console.log(props);
    return (
        <>Care页面</>
    )
}

export default connect(store => store,
    _ => ({})
)(CareComponent);