import axios from "axios";
import BaseAxios from "./requsetToken";

// FILE API

// Nhánh Đi ->

// CRUD API

// UPDATE => CẬP NHẬT USER
export const updateUser = (user: any):any => {
  return BaseAxios.put(`http://localhost:9000/users/update`, user)
    .then((response) => {
      return response; 
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
