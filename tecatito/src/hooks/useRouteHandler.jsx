// useRouteHandler.js
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useRouteHandler = (routes) => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    const selected = routes.find((route) => route.path === path);
    setSelectedRoute(selected ? selected.component : null);

    // al hacer f5 en una rut actual debe manter esa ruta

    navigate(path);
  };

  useEffect(() => {
    // Setear la ruta inicial al cargar la página
    const initialRoute = routes.find(
      (route) => route.path === location.pathname
    );

    setSelectedRoute(initialRoute ? initialRoute.component : null);
  }, [location.pathname, routes]);

  return { selectedRoute, handleNavigate };
};

export default useRouteHandler;
