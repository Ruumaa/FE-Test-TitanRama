import type { RouteObject } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Feature from '../pages/Feature';
import FeatureLayout from '../layout/FeatureLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <MainLayout>
          <Navbar />
          <Home />
        </MainLayout>
        <FeatureLayout>
          <Feature />
        </FeatureLayout>
      </>
    ),
  },
];

export default routes;
