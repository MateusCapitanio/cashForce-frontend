import axios from "axios";

const BASE_URL = "http://localhost:3500/";

const getRequest = (urlParam) => {
  axios
    .get(BASE_URL + urlParam)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getRequest;
