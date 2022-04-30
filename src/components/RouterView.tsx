import router from '../router';
import { getRouteReacts } from '../utils/router';

const RouterView: React.FC<{}> = () => {
    let node = getRouteReacts(router);
    return <>{ node }</>;
}

export default RouterView;