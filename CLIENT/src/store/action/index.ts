import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, ProductType } from "../../Interface";
import BaseAxios from "../../Api/requsetToken";

export const getApiProducts = createAsyncThunk<ProductType>(
  "products",
  async () => {
    const response = await axios.get("http://localhost:9000/products");
    return response.data;
  }
);
export const getApiCategories = createAsyncThunk<any>("categories", async () => {
  const response = await axios.get("http://localhost:9000/categories");
  return response.data;
});
export const getApiBrands = createAsyncThunk<any>(
  "brands",
  async () => {
    const response = await axios.get("http://localhost:9000/brands");
    return response.data;
  }
);
export const getApiSizes = createAsyncThunk<any>(
  "sizes",
  async () => {
    const response = await axios.get("http://localhost:9000/sizes");
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

export const getApiBank = createAsyncThunk<any>("banks", async () => {
  const response = await axios.get("http://localhost:9000/banks");
  return response.data;
});

export const getDetailProduct = createAsyncThunk<any, any>(
  "getDetailProduct",
  async (id: any) => {
    const response = await axios.get(`http://localhost:9000/products/${id}`)
    return response.data;
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
