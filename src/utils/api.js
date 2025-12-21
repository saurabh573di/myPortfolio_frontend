import axios from 'axios';

const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // quick debug log for outgoing requests
    try {
      console.debug('[API REQUEST]', config.method?.toUpperCase(), config.baseURL + config.url);
    } catch (e) {}
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response) {
      const err = new Error(error.response.data?.error || error.response.statusText || 'Server error');
      err.status = error.response.status;
      err.data = error.response.data;
      return Promise.reject(err);
    }

    if (error.request) {
      const cfg = error.config || {};
      const url = `${cfg.baseURL || ''}${cfg.url || ''}` || 'unknown url';
      const msg = `No response from server (${url})`;
      console.error('[API ERROR] No response:', url, error && (error.stack || error));
      const err = new Error(msg);
      err.original = error;
      return Promise.reject(err);
    }

    return Promise.reject(error);
  }
);

export default api;
export const postJson = (url, data, config) => api.post(url, data, config);
