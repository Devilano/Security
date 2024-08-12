import axios from "axios";

const Api = axios.create({
    baseURL: "https://localhost:5000", // Change to HTTPS and correct port
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
    }
});

// Separate header for authorization
const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }
};

export const testApi = () => Api.get("/test");

// Create user API
export const createUserApi = (data) => Api.post('/api/user/create', data);

// Login User API
export const loginUserApi = (data) => Api.post('/api/user/login', data);

// Forget Password
export const forgetPasswordApi = (data) => Api.post('/api/user/forgetpassword', data);

// Create voting API 
export const createVoteApi = (data) => Api.post('/api/vote/create', data, config);
export const getVoteApi = () => Api.get('/api/vote/get_vote');

// For All Party Dashboard 
export const createPartyApi = (data) => Api.post('/api/party/create_party', data, config);
export const getAllPartyApi = () => Api.get('/api/party/get_party');
export const getSinglePartyApi = (id) => Api.get(`/api/party/get_party/${id}`);
export const updatePartyApi = (id, formData) => Api.put(`/api/party/update_party/${id}`, formData, config);
export const deletePartyApi = (id) => Api.delete(`/api/party/delete_party/${id}`, config);

// For Progress 
export const createProgressApi = (data) => Api.post('/api/progress/create_progress', data, config);
export const getAllProgressApi = () => Api.get('/api/progress/get_progress');
export const deleteProgressApi = (id) => Api.delete(`/api/progress/delete_progress/${id}`, config);
export const getSingleProgressApi = (id) => Api.get(`/api/progress/get_progress/${id}`);
