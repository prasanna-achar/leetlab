import React from "react";
import useAuthStore from "../store/useAuthStore";

const LogoutButton = ({ children, className = "" }) => {
  const { logout } = useAuthStore();

  const onLogout = async () => {
    await logout();
  };

  return (
    <button
      type="button"
      className={`btn btn-primary gap-2 ${className}`.trim()}
      onClick={onLogout}
    >
      {children}
    </button>
  );
};

export default LogoutButton;