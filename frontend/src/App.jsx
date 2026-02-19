import React from "react";
import { Route, Routes } from "react-router";
import PortalAccess from "./pages/Auth/PortalAccess";
import CitizenLogin from "./pages/Auth/citizen/CitizenLogin";
import CitizenRegistration from "./pages/Auth/citizen/CitizenRegistration";
import UnifiedAdminLogin from "./pages/Auth/admin/UnifiedAdminLogin";
import SuperAdminRegister from "./pages/Auth/admin/SuperAdminRegister";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/portalaccess" element={<PortalAccess />} />
        <Route path="/citizenlogin" element={<CitizenLogin />} />
        <Route path="/citizenregistration" element={<CitizenRegistration />} />
        <Route path="/adminlogin" element={<UnifiedAdminLogin />} />
        <Route path="/superadminregister" element={<SuperAdminRegister />} />
      </Routes>
    </div>
  );
};

export default App;
