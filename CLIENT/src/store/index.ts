import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import userSlice from "./Slices/userSlice";
import brandSlice from "./Slices/brandSlice";
import originSlice from "./Slices/originSlice";
import { useDispatch } from "react-redux";
import bankSlice from "./Slices/bankSlice";
import orderSlice from "./Slices/orderSlice";
import historyOrderSlice from "./Slices/historyOrders";
import categorySlice from "./Slices/categorySlice";
import sizesSlice from "./Slices/sizesSlice";

const store = configureStore({
  reducer: {
    productReducer: productSlice,
    brandReducer: brandSlice,
    categoryReducer: categorySlice,
    sizeReducer: sizesSlice,
    userReducer: userSlice,
    originReducer: originSlice,
    bankReducer: bankSlice,
    orderReducer: orderSlice,
    historyOrdersReducer: historyOrderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
