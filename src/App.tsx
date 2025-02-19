import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";
import ProtectRoutes from "@/layouts/protected-routes";
import { MainLayout } from "@/layouts/main-layout";

import HomePage from "@/routes/home";
import { SignInPage  } from "./routes/sign-in"
import { SignUppage } from "./routes/sign-up"


const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUppage />} />
        </Route>

        {/* protected routes */}
        <Route element={
          <ProtectRoutes>
            <MainLayout/>
          </ProtectRoutes>}>


          {/* add all the protected routes*/}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
