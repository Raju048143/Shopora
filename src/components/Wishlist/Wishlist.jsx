import React, { useEffect } from "react";
import useAuthStore from "../../store/useAuthstore";
import { useNavigate } from "react-router-dom";
function Wishlist() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist