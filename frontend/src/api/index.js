import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://kannder83.com/api/filter-song",
});

const get = async (url) => {
  try {
    const result = await instance.get(url);
    return result.data;
  } catch (error) {
    throw error.response.data.detail;
  }
};

export { get };
