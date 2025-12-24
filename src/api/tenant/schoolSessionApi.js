import api from "./axios.js";

// Fetch School Sessions
// Sends an HTTP GET request to the endpoint /sessions.

//  await pauses execution until the request completes.

// The response is stored in res.
export const fetchSchoolSessions = async () => {
  const res = await api.get("/sessions");
  return res.data;
};

// Create a School Session
// Sends an HTTP POST request to /session.

// Sends payload as the request body.

// Waits for the server response and stores it in response.
export const createSchoolSession = async (payload) => {
  const response = await api.post("/session", payload);
  return response.data;
};


// Update School Session
export const updateSchoolSession = async ({ id, ...payload }) => {
  const response = await api.put(`/session/${id}`, payload);
  return response.data;
};

// Delete School Session
export const deleteSchoolSession = async (id) => {
  const response = await api.delete(`/session/${id}`);
  return response.data;
};

// Activate a School Session 
export const activateSchoolSession= async(id)=>{
  const response = await api.post(`/session/activate/${id}`);
  return response.data;
}

