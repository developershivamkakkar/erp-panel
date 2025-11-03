import axios from "axios";
const api = axios.create({
  baseURL: "http://dsms.localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Tenant User Login
export const loginTenantUser = async (cred) => {
  const res = await api.post("/login", cred);
  return res.data;
};

// Tenant User Logout
export const logoutTenantUser = async () => {
  const token = localStorage.getItem("tenant_token");

  const res = await api.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// API to Validate Token
export const validateTenantToken = async () => {
  const token = localStorage.getItem("tenant_token");

  const res = await api.post(
    "/validate-token",
    {}, // empty body
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
