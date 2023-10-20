
import BaseAxios from "./requsetToken";
// create
export const createCart = (newProduct: any) => {
  return BaseAxios
    .post(`http://localhost:9000/carts`,newProduct)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
export const updateCart = (newCart: any) => {
  return BaseAxios
    .put(`http://localhost:9000/carts`,newCart)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
export const deleteCart = () => {
  return BaseAxios
    .delete(`http://localhost:9000/carts`,)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
