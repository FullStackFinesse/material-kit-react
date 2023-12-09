// App.jsx
import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider>
      
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
