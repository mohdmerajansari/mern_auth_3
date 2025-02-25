import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshRouter({ setAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setAuthenticated(true);
      if (
        location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/"
      ) {
        navigate("/home", { replace: false });
      }
    }
  }, [location, navigate, setAuthenticated]);
  return null;
}

export default RefreshRouter;
