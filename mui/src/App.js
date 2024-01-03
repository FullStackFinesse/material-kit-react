import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'assets/theme'
import { renderRoutes } from 'utils/routesUtils'
import AboutUs from 'pages/LandingPages/AboutUs'
import Main from 'pages/DashboardPages/Main'
import privateRoutes from 'utils/privateRoutes'
import routes from 'utils/routes'

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  // useEffect(() => {
  //   // Lógica de autenticación simulada
  //   const timeoutId = setTimeout(() => {
  //     setIsAuthenticated(true)
  //   }, 2000)

  //   return () => clearTimeout(timeoutId)
  // }, [])
  const isAuthenticated = true
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {isAuthenticated ? (
          <>
            {renderRoutes(privateRoutes)}
            <Route path="/pages/dashboard-pages/main" element={<Main />} />
          </>
        ) : (
          <>
            {renderRoutes(routes)}
            <Route
              path="/pages/landing-pages/about-us"
              element={<AboutUs />}
            />{' '}
          </>
        )}

        <Route
          path="*"
          element={
            isAuthenticated ? (
              // Usuario autenticado, redirigir a la página de inicio del dashboard
              <Navigate to="/pages/dashboard-pages/main" />
            ) : (
              // Usuario no autenticado, redirigir a la página de inicio de sesión o cualquier otra página pública
              <Navigate to="/pages/landing-pages/about-us" replace />
            )
          }
        />
      </Routes>
    </ThemeProvider>
  )
}

export default App
