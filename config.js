const { VITE_STRAPI_BEARER_TOKEN } = import.meta.env;

export const fetcher = (...args) => {
  const token = VITE_STRAPI_BEARER_TOKEN;
  const headers = {
    ...args[1]?.headers,
    Authorization: `Bearer ${token}`,
  };

  return fetch(...args, { headers }).then((res) => res.json());
};
