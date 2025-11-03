import { useNavigate } from "react-router-dom";
import { validateTenantToken } from "../api/tenant/auth";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import Loader from "./Loader";

function AuthRoute({ children, type }) {
  const navigate = useNavigate();

  const tokenMutation = useMutation({
    mutationFn: validateTenantToken,
    onSuccess: () => {},
    onError: (error) => {
      console.error("Invalid Token", error);
      localStorage.removeItem("tenant_token");
      navigate("/"); // redirect to login
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("tenant_token");

    if (!token) {
      // no token at all → redirect immediately
      navigate("/");
      return;
    }
    tokenMutation.mutate(token); // validate token if present
  }, []);

  // Show loader while validating
  if (tokenMutation.isPending) {
    return <Loader />;
  }

  // If valid → show protected content
  if (tokenMutation.isSuccess) {
    return <>{children}</>;
  }

  // Return null during redirect or error
  return null;
}

export default AuthRoute;
