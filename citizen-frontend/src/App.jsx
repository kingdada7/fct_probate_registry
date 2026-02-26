import React from "react";
import { Route, Routes } from "react-router";
import PortalAccess from "./pages/Auth/PortalAccess";
import CitizenLogin from "./pages/Auth/citizen/CitizenLogin";
import CitizenRegistration from "./pages/Auth/citizen/CitizenRegistration";
import PrivateRoute from "./routes/PrivateRoute";
import UserProvider, { UserContext } from "./context/userContext";
import CitizenDashboard from "./pages/CitizenDashboard";


const App = () => {
  return (
    <UserProvider>
      <div>
        <Routes>
          <Route path="/portalaccess" element={<PortalAccess />} />
          <Route path="/citizenlogin" element={<CitizenLogin />} />
          <Route
            path="/citizenregistration"
            element={<CitizenRegistration />}
          />

          {/* citizen routes */}
          <Route element={<PrivateRoute allowedRoles={["citizen"]} />}>
            <Route
              path="/citizen/dashboard"
              element={<CitizenDashboard />}
            />
          </Route>
        </Routes>
      </div>
    </UserProvider>
  );
};

export default App;
