import { logoutTenantUser } from "../api/tenant/auth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import Loader from "./Loader";

function TenantLogout() {
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: logoutTenantUser,
    onSuccess: (data) => {
      console.log("Logout Success:", data);

      // ✅ Remove token from localStorage
      localStorage.removeItem("tenant_token");

      // ✅ Redirect after logout
      navigate("/");
    },
    onError: (error) => {
      console.error("Logout Failed:", error);

      // Still clear token on error (e.g., token expired)
      localStorage.removeItem("tenant_token");
      navigate("/");
    },
  });

  // 🔹 Auto-trigger logout on mount
  useEffect(() => {
    logoutMutation.mutate();
  }, []);

  return (
    <>
      <Loader />;
    </>
  );
}

export default TenantLogout;
