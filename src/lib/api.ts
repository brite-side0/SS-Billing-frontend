import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Merchant
export const merchantApi = {
  get: (id: string) => api.get(`/merchants/${id}`).then((r) => r.data),
  update: (id: string, data: unknown) => api.patch(`/merchants/${id}`, data).then((r) => r.data),
};

// Plans
export const planApi = {
  list: (merchantId: string) => api.get('/plans', { params: { merchantId } }).then((r) => r.data),
  create: (data: unknown) => api.post('/plans', data).then((r) => r.data),
  update: (id: string, data: unknown) => api.patch(`/plans/${id}`, data).then((r) => r.data),
  disable: (id: string) => api.delete(`/plans/${id}`).then((r) => r.data),
};

// Subscriptions
export const subscriptionApi = {
  list: (address: string) => api.get('/subscriptions', { params: { address } }).then((r) => r.data),
  get: (id: string) => api.get(`/subscriptions/${id}`).then((r) => r.data),
  pause: (id: string) => api.patch(`/subscriptions/${id}/pause`).then((r) => r.data),
  resume: (id: string) => api.patch(`/subscriptions/${id}/resume`).then((r) => r.data),
  cancel: (id: string) => api.delete(`/subscriptions/${id}`).then((r) => r.data),
  payments: (id: string) => api.get(`/subscriptions/${id}/payments`).then((r) => r.data),
};

// Analytics
export const analyticsApi = {
  stats: (merchantId: string) => api.get(`/analytics/merchants/${merchantId}/stats`).then((r) => r.data),
  revenue: (merchantId: string, days = 30) =>
    api.get(`/analytics/merchants/${merchantId}/revenue`, { params: { days } }).then((r) => r.data),
};
