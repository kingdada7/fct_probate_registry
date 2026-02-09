import React from "react";
import { Route, Routes } from "react-router";
import PortalAccess from "./pages/Auth/PortalAccess";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/portalaccess" element={<PortalAccess />} />
      </Routes>
    </div>
  );
};

export default App;
