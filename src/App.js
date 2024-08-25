import './App.css'
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/ReduxStore/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Body/>,
    children : [
      {
        path : '/',
        element : <MainContainer/>
      },
      {
        path : '/watch/:videoId',
        element : <WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
