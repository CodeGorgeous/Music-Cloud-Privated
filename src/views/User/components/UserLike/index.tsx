import { useEffect } from 'react';
import { getLikeMusicList } from '../../../../api';

interface IProps {}

const Component: React.FC<IProps> = (props) => {

    async function init() {
        // const result = await getLikeMusicList(559680093);
        // console.log(result);
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <div></div>
    )
}

export default Component;