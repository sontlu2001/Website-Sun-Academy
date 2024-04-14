// api.js
import axios from 'axios';

const {VITE_STRAPI_BASE_URL, VITE_STRAPI_BEARER_TOKEN} = import.meta.env;

const api = axios.create({
  baseURL: `${VITE_STRAPI_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${VITE_STRAPI_BEARER_TOKEN}`
  },
});

export default api;
