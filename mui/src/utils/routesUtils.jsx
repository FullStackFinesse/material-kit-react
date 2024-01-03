// En un nuevo archivo, por ejemplo, routesUtils.js

import { Route } from 'react-router-dom'

export const renderRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.collapse) {
      return renderRoutes(route.collapse)
    }

    if (route.route) {
      return (
        <Route
          exact
          path={route.route}
          element={route.component}
          key={route.key}
        />
      )
    }

    return null
  })
