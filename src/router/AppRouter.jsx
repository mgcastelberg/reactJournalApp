import React, { useEffect } from "react";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { Navigate, Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../ui";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

export const AppRouter = () => {
  
  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      // console.log(user);
      if ( !user ) return dispatch( logout() );

      const { uid, displayName, email, photoURL } = user;

      dispatch( login({ uid, displayName, email, photoURL }) );

    })
  }, []);

  if ( status === 'checking' ) {
    return <CheckingAuth />;
  }

  return (
    <Routes>
        {/* <Route index element={<Home />} />
        <Route path="about" element={<About />} /> */}

        {/* Validate auth status to access public or private routes */}
        {
          (status === 'authenticated') 
            ? <Route path="/*" element={<JournalRoutes />} />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />  
        }
        
        {/* Cualquier otra ruta debe de redirigir al login */}
        <Route path="/*" element={<Navigate to="/auth/login" />} />


        {/* Login and register */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}
        
        {/* Protected routes */}
        {/* <Route path="/*" element={<JournalRoutes />} /> */}
        
    </Routes>
  );
};
