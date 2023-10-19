import axios from "axios";

export const createBrand = (data: any) => {
  return axios
    .post(`http://localhost:9000/brands`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
