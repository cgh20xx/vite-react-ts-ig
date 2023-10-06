import type { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
import NotFound from './pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: []
  },
  {
    path: '/following',
    element: <Following />,
    children: []
  },
  {
    path: '*',
    element: <NotFound />,
    children: []
  }
];

export default routes;
