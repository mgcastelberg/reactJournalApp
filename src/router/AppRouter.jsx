import React from "react";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
  
  const { status } = useSelector( state => state.auth );

  if ( status === 'checking' ) {
    return <CheckingAuth />;
  }

  return (
    <Routes>
        {/* <Route index element={<Home />} />
        <Route path="about" element={<About />} /> */}

        {/* Login and register */}
        {/* <Route element={<AuthLayout />}> */}
            <Route path="/auth/*" element={ <AuthRoutes /> } />
        {/* </Route> */}

        {/* Protected routes */}
        {/* <Route element={<ProtectedRoutes />}> */}
            <Route path="/*" element={<JournalRoutes />} />
        {/* </Route> */}
    </Routes>
  );
};
