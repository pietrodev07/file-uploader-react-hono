export const API_SERVER_URL = "https://httpbin.org";

export const FILE_URL = "/post";

export const generateUrl = (endpoint: string) => {
  return `${API_SERVER_URL}${endpoint}`;
};
