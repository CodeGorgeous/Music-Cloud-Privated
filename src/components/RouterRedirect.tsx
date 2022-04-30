import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
    path: string
}

const RouterRedirect: React.FC<IProps> = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(props.path);
    }, [])
    
    return null;
}

export default RouterRedirect;