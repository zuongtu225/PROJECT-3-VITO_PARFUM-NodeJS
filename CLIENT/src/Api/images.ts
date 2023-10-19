import axios from "axios";

// get detail
export const createImages = (data: any) => {
  
  return axios
    .post(`http://localhost:9000/images`,data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};

export const deleteImage = (id: number) => {
  
  return axios
    .delete(`http://localhost:9000/images/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};

