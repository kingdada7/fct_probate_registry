import React from "react";
import { Route, Routes } from "react-router";
import PortalAccess from "./pages/Auth/PortalAccess";
import CitizenLogin from "./pages/Auth/citizen/CitizenLogin";
import CitizenRegistration from "./pages/Auth/citizen/CitizenRegistration";
import UnifiedAdminLogin from "./pages/Auth/admin/UnifiedAdminLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/portalaccess" element={<PortalAccess />} />
        <Route path="/citizenlogin" element={<CitizenLogin />} />
        <Route path="/citizenregistration" element={<CitizenRegistration />} />
        <Route path="/adminlogin" element={<UnifiedAdminLogin />} />
      </Routes>
    </div>
  );
};

export default App;
