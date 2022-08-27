import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/apiv1",
});

const get = async (url) => {
  try {
    const result = await instance.get(url);
    return result.data;
  } catch (error) {
    // throw {
    //   error: "Not Available",
    //   data: error.response.data,
    // };
    throw error.response.data.detail;
  }
};

export { get };
