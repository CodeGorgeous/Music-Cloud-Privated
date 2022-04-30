import { BrowserRouter, Router } from 'react-router-dom';
import RouterView from './components/RouterView';
import BottomNavigation from './components/BottomNavigation';

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <div
        className="app-main"
      >
        <RouterView />
      </div>
      <div
        className='app-operate'
      >
        <BottomNavigation />
      </div>
    </BrowserRouter>
  )
}

export default App;
