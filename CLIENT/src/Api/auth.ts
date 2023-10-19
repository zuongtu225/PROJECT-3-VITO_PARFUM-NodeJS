import axios from "axios";


// FILE API

// Nhánh Đi ->

// CRUD API

// UPDATE => CẬP NHẬT USER
export const loginAPI = (user: any):any => {
  return axios.post(
      "http://localhost:9000/auth/login",
      user
    )
    .then((response) => {
      return response; 
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
export const registerAPI = (user: any):any => {
  return axios.post(
        "http://localhost:9000/auth/register",
        user
      )
    .then((response) => {
      return response; 
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
