import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api' });

API.interceptors.request.use((config) => {
  try {
    const user = JSON.parse(localStorage.getItem('cyberShieldUser') || '{}');
    if (user.token) config.headers.Authorization = `Bearer ${user.token}`;
  } catch {}
  return config;
});

export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const getProfile = () => API.get('/auth/profile');

export const getModules = () => API.get('/modules');
export const getModule = (slug) => API.get(`/modules/${slug}`);

export const getQuiz = (slug) => API.get(`/quiz/${slug}`);
export const submitQuiz = (data) => API.post('/quiz/submit', data);
export const getMyResults = () => API.get('/quiz/results/me');

export const getScenarios = () => API.get('/scenarios');
export const getScenario = (id) => API.get(`/scenarios/${id}`);
export const evaluateDecision = (data) => API.post('/scenarios/evaluate', data);

export const getCertStatus = () => API.get('/cert/status');
export const submitCertExam = (data) => API.post('/cert/submit', data);
export const getMyCertificate = () => API.get('/cert/my');

export const sendChatMessage = (messages) => API.post('/chat/message', { messages });

// Admin
export const getAdminStudents = () => API.get('/admin/students');
export const getAdminPerformance = () => API.get('/admin/performance');
export const assignQuiz = (data) => API.post('/admin/assign', data);
export const getAdminAssignments = () => API.get('/admin/assignments');
export const deleteAssignment = (id) => API.delete(`/admin/assignments/${id}`);

// Student — own assignments
export const getMyAssignments = () => API.get('/admin/assignments/mine');
