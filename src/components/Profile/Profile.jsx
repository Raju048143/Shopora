import React, { useEffect } from "react";
import useAuthStore from "../../store/useAuthstore";
import { useNavigate } from "react-router-dom";
function Profile() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }
  return  <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Profile Details</h1>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        {user.role && (
          <p>
            <span className="font-semibold">Role:</span> {user.role}
          </p>
        )}
        {user.createdAt && (
          <p>
            <span className="font-semibold">Joined:</span>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>;
}

export default Profile;
