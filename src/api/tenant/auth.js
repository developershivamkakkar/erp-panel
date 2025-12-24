import api from "./axios.js";
// Tenant User Login
export const loginTenantUser = async (cred) => {
  const res = await api.post("/login", cred);
  return res.data;
};

// Tenant User Logout
export const logoutTenantUser = async () => {
  const res = await api.post(
    "/logout",
    {} // empty body
  );

  return res.data;
};

// API to Validate Token
export const validateTenantToken = async () => {
  const res = await api.post(
    "/validate-token",
    {} // empty body
  );

  return res.data;
};
