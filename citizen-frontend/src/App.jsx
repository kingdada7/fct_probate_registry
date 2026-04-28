import React from "react";
import { Route, Routes } from "react-router";
import PortalAccess from "./pages/Auth/PortalAccess";
import CitizenLogin from "./pages/Auth/citizen/CitizenLogin";
import CitizenRegistration from "./pages/Auth/citizen/CitizenRegistration";
import PrivateRoute from "./routes/PrivateRoute";
import UserProvider, { UserContext } from "./context/userContext";
import CitizenDashboard from "./pages/CitizenDashboard";
import CreateApplication from "./pages/CreateApplication";
import DeceasedInformation from "./pages/DeceasedInformation";
import ApplicationType from "./pages/ApplicationType";
import DocumentsUpload from "./pages/DocumentsUpload";
import FinalApplicationReview from "./pages/FinalApplicationReview";

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
            <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
            <Route
              path="/citizen/createapplication"
              element={<CreateApplication />}
            />
            <Route
              path="/citizen/deceasedinformation"
              element={<DeceasedInformation />}
            />
            <Route
              path="/citizen/applicationtype"
              element={<ApplicationType />}
            />
            <Route
              path="/citizen/documentsupload"
              element={<DocumentsUpload />}
            />
            <Route
              path="/citizen/finalapplicationreview"
              element={<FinalApplicationReview />}
            />
          </Route>
        </Routes>
      </div>
    </UserProvider>
  );
};

export default App;
