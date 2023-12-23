import { useEffect } from 'react';
// react-router components
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Presentation from './pages/LandingPages/Presentation';
// Material Kit 2 React routes
// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Material Kit 2 React themes
import theme from './assets/theme';
import routes from './routes';
function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route
          path='/presentation'
          element={<Presentation />}
        />
        <Route
          path='*'
          element={<Navigate to='/presentation' />}
        />
      </Routes>{' '}
    </ThemeProvider>
  );
}
export default App;
