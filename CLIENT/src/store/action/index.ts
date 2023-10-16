import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, ProductType } from "../../Interface";
import { getApiDetailProduct } from "../../Api";
import BaseAxios from "../../Api/requsetToken";

// BÊN ACTION TÁC DỤNG CALL API VỀ  === dispatch để get thôi :))
// thunk để get
export const getApiProducts = createAsyncThunk<ProductType>(
  "products",
  async () => {
    const response = await axios.get("http://localhost:9000/products");
    return response.data;
  }
);

export const getApiUsers = createAsyncThunk<IUser>("users", async () => {
  const response = await axios.get("http://localhost:9000/users");
  return response.data;
});

export const getApiOrigins = createAsyncThunk<any>(
  "origins",
  async () => {
    const response = await axios.get("http://localhost:9000/origins");
    return response.data;
  }
);
export const getApiBrands = createAsyncThunk<any>(
  "brands",
  async () => {
    const response = await axios.get("http://localhost:9000/brands");
    return response.data;
  }
);
export const getApiBank = createAsyncThunk<any>("banks", async () => {
  const response = await axios.get("http://localhost:9000/banks");
  return response.data;
});
export const getDetailProduct = createAsyncThunk<any, any>(
  "getDetailProduct",
  async (id: any) => {
    const response = await getApiDetailProduct(id);
    return (response as any).data;
  }
);
export const getDetailUser = createAsyncThunk(
  "getDetailUser",
  async () => {
    const response = await BaseAxios.get(`http://localhost:9000/users/me`);
    return response.data; 
  }
);

export const getOrderApi = createAsyncThunk<any>("getOrderApi", async () => {
  const response = await axios.get("http://localhost:9000/orders");
  console.log("response", response);

  return response.data;
});

export const getHistoryOrders = createAsyncThunk<any>(
  "getHistoryOrders",
  async () => {
    const response = await axios.get("http://localhost:9000/historyOrders");
    return response.data;
  }
);
