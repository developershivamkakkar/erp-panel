import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Login.module.css";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginTenantUser } from "../api/tenant/auth";

function TenantLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // React Query Mutation for Login
  const loginMutation = useMutation({
    mutationFn: loginTenantUser,
    onSuccess: (data) => {
      localStorage.setItem("tenant_token", data.token);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login Failed", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-card"]}>
        <h2 className={styles["login-title"]}> Login Here </h2>
        <p className={styles["login-subtitle"]}>Sign in to your account</p>

        {/* 🔹 Show Loading */}
        {loginMutation.isPending && (
          <div className="alert alert-info py-2">Logging in...</div>
        )}

        {/* 🔹 Show Error */}
        {loginMutation.isError && (
          <div className="alert alert-danger py-2">
            {loginMutation.error?.response?.data?.message ||
              "Login failed. Please check your credentials."}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control form-control-lg ${styles["form-control-pill"]}`}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className={`form-control form-control-lg ${styles["form-control-pill"]}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mt-4">
            <button
              type="submit"
              className={`btn btn-primary btn-lg ${styles["btn-pill"]}`}
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className={styles["text-center-small"]}>
          <small>
            Don't have an account?{" "}
            <a href="/register" className="text-decoration-none">
              Sign up
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default TenantLogin;
