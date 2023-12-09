// App.jsx
import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";

function App() {
  return (
    <Router>
      <PrivateRoutes />
    </Router>
  );
}

export default App;
