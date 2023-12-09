// App.jsx
import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import { publicNavigation } from "./utils/routes/navigationData";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <DashboardLayout publicNavigation={publicNavigation} />{" "}
      {/* Pasa publicNavigation como prop */}
    </Router>
  );
}

export default App;
