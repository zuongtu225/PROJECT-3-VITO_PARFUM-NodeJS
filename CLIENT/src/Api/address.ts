import axios from "axios";
import BaseAxios from "./requsetToken";
export const createAddress = (data: any) => {
  return BaseAxios
    .post(`http://localhost:9000/address`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
