import React from "react";
import { Route, Routes } from "react-router";
import UnifiedAdminLogin from "./pages/auth/UnifiedAdminLogin";
import SuperAdminRegister from "./pages/auth/SuperAdminRegister";
import StandardAdminRegister from "./pages/auth/StandardAdminRegister";
import PrivateRoute from "../../citizen-frontend/src/routes/PrivateRoute";
import PortalAccess from "./pages/PortalAccess";
import UserProvider from "./context/userContextAdmin";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import SuperAdminManagement from "./pages/SuperAdminManagement";
import ApplicationManagement from "./pages/ApplicationMangement";


const App = () => {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route
            path="/adminlogin"
            element={<UnifiedAdminLogin tier="standard" />}
          />
          <Route
            path="/superadminlogin"
            element={<UnifiedAdminLogin tier="super" />}
          />
          <Route path="/superadminregister" element={<SuperAdminRegister />} />
          <Route
            path="/standardadminregister"
            element={<StandardAdminRegister />}
          />
          <Route path="/portalaccess" element={<PortalAccess />} />
          {/*super admin routes */}
          <Route element={<PrivateRoute allowedRoles={["super-admin"]} />}>
            <Route
              path="/superadmin/dashboard"
              element={<SuperAdminDashboard />}
            />
            <Route
              path="/superadmin/management"
              element={<SuperAdminManagement />}
            />
            <Route
              path="/superadmin/applicationmanagement"
              element={<ApplicationManagement />}
            />
          </Route>

          {/* standard admin routes */}

          <Route element={<PrivateRoute allowedRoles={["standardadmin"]} />}>
            <Route
              path="/admin/dashboard"
              element={<div>Standard Admin Dashboard</div>}
            />
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
