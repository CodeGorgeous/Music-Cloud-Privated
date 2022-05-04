import { useRoutes } from 'react-router-dom';
import { router } from '@/router/index';

const App: React.FC<{}> = () => {
  const Component = useRoutes(router);
  return Component;
}

export default App;
