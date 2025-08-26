import { Navigate } from "react-router-dom";

export const UserRoute = ({ children }) => {
  const role = localStorage.getItem("role");
  
  if (!role)
     return <Navigate to="/login" />;      
  if (role !== "user") 
    return <Navigate to="/admin" />; 
  return children;
};

// Protect admin pages
export const AdminRoute = ({ children }) => {
  const role = localStorage.getItem("role");

  if (!role) return <Navigate to="/login" />;     
  if (role !== "admin") return <Navigate to="/" />; 
  return children;
};
