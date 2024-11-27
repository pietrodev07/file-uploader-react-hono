import { FILE_URL, generateUrl } from "./url";

export const api = {
  uploadFile: async (fileBody: FormData) => {
    const url = generateUrl(FILE_URL);

    const response = await fetch(url, {
      method: "post",
      body: fileBody,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return await response.json();
  },
};
