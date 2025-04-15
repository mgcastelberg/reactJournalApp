import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { Navigate, Route, Routes } from "react-router";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  
  const status  = useCheckAuth();

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
