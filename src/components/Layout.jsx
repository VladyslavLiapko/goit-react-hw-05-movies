import { Outlet } from 'react-router-dom';
import { AppMenu } from './AppMenu/AppMenu';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;