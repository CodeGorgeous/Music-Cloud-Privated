import { useState, useEffect } from 'react';
import { getLikeMusicList, getMusicDetailList } from '@/api';
import { IUserLikeMusicDetailListResponse } from '@/types/api';

interface IProps {}

const Component: React.FC<IProps> = (props) => {

    const [likeList, setLikeList] = useState<IUserLikeMusicDetailListResponse>();

    async function init() {
        const result = await getLikeMusicList(559680093).then(async resp => {
            return await getMusicDetailList(resp.ids.join(','));
        });
        setLikeList(result);
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <div></div>
    )
}

export default Component;