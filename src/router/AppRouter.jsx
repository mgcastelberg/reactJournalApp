import React from "react";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
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
