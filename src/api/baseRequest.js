import axios from "axios";

const BASE_URL = "http://localhost:8956/";

const getRequest = async (urlParam) => {
  try {
    const response = await axios.get(BASE_URL + urlParam);
    return response.data;
  } catch (err) {
    console.log(err);
    return { name: "requestFailed" };
  }
};

export default getRequest;
