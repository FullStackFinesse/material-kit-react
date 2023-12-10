// import React from 'react';
// import PrivateRoutes from './privateRoutes';
// import PublicRoutes from './publicRoutes';
// import AboutUs from '../pages/LandingPages/AboutUs';
// import Main from '../pages/Dashboard/Main';
// const Routes = () => {
//   const isAutenticated = false;
//   return <div>{isAutenticated ? <PrivateRoutes /> : <PublicRoutes />}</div>;
// };

// export default Routes;

import React, { useEffect } from 'react';
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './publicRoutes';
import { useLocation, useNavigate } from 'react-router-dom';

const RoutesFanor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isUserAuthenticated = true;
  console.log('user Autenticated', isUserAuthenticated);
  console.log(location.pathname);
  useEffect(() => {
    if (isUserAuthenticated) {
      if (location.pathname === '/') {
        navigate('/main');
      }
    } else if (location.pathname === '/') {
      navigate('/about-us');
    }
  }, [location.pathname, navigate]);

  return isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default RoutesFanor;
