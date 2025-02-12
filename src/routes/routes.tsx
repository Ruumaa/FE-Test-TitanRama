import type { RouteObject } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <MainLayout>
          <Navbar />
          <Home />
        </MainLayout>
      </>
    ),
  },
];

export default routes;
