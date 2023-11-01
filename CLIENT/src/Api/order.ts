// BÊN FILE API THÌ  XỬ LÝ LOGIC CRUD
import axios from "axios";
import BaseAxios from "./requsetToken";
export const createOrder = (order: any) => {
  
  return BaseAxios
    .post(`http://localhost:9000/orders`, order)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};


export const deleteOrder = (order: any) => {
  return axios
    .delete(`http://localhost:5000/orders/${order.id}`, order)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};

export const updateOrderApi = (data: any) => {
  return axios
    .put(`http://localhost:9000/orders/${data.id}`, {status:data.status})
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};
