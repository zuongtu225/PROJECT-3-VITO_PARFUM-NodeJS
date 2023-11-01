import axios from "axios";

export const createImages = (data: any) => {
  return axios
    .post(`http://localhost:9000/images`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
// update multiple images
export const updateImage = (id: number, data: any) => {
  return axios
    .put(`http://localhost:9000/images/${id}`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};

// get detail
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
