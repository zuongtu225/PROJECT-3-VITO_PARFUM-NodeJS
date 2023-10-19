import axios from "axios";

export const createCategory = (data: any) => {
  return axios
    .post(`http://localhost:9000/categories`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
