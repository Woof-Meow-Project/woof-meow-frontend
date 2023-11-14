import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import SignupBasePage from './pages/signup/SignupBasePage';
import SignupUserPage from './pages/signup/SignupUserPage';
import SignupPetsPage from './pages/signup/SignupPetsPage';

const router = createBrowserRouter([
  {
    path: '/', // 부모
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'pets/:type',
        element: <ListPage />,
      },
      { path: 'detail/:type/:id' },
      { path: 'login', element: <LoginPage /> },
      {
        path: 'signup',
        element: <SignupBasePage />,
        children: [
          { path: 'user', element: <SignupUserPage /> },
          { path: 'pets', element: <SignupPetsPage /> },
        ],
      },
      { path: 'my', children: [{ path: '' }, { path: 'pets' }] },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
