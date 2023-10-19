import axios from "axios";
import { IProduct } from "../Interface";

// create
export const createProduct = (newProduct: IProduct) => {
  return axios
    .post(`http://localhost:9000/products`,newProduct)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};

// delete
export const updateProduct = (productUpdate: any) => {
  return axios.put(
          `http://localhost:9000/products/${productUpdate.id}`,
          productUpdate
        )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
export const deleteProducts = (id: number) => {
  return axios
    .delete(`http://localhost:9000/products/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
