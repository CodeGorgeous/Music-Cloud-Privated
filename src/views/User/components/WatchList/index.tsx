import { getUserWatchList } from '../../../../api';
import { useState, useEffect } from 'react';
import { IUserWatchResponse } from '../../../../types/api';

interface IProps {}

const Component: React.FC<IProps> = (props) => {

    const [WatchList, setWatchList] = useState<IUserWatchResponse>();
    
    async function init() {
        let userWatchList = await getUserWatchList(559680093);
        setWatchList(userWatchList);
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <></>
    )
}

export default Component;