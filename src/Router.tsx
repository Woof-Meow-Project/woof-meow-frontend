import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/', // 부모
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
