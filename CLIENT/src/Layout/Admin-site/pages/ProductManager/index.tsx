import React, { useState, useEffect } from "react";
import AdminHeader from "../../components/layout/Header";
import AdminPagination from "../../components/table/AdminPagination";
import { useDispatch, useSelector } from "react-redux";
import { getApiProducts } from "../../../../store/action";
import { AppDispatch } from "../../../../store";
import ButtonEdit from "../../components/Button/ButtonEdit";
import { EditModal } from "../../components/modal/EditModal";
import { deleteProducts } from "../../../../Api";
import { ToastContainer, toast } from "react-toastify";
import { deleteImage } from "../../../../Api/images";

const ProductManager = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state?.productReducer?.products);

  useEffect(() => {
    dispatch(getApiProducts());
  }, []);

  const onDeleteProduct = async (id: number) => {
    const data: any = await deleteProducts(id);
    await deleteImage(id);
    toast.success(data.data.message);
    setTimeout(async () => {
      await dispatch(getApiProducts());
    }, 1500);
  };

  return (
    <div>
      <AdminHeader title="PRODUCTS" />
      <ToastContainer />
      <div className="content">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Ảnh
                </th>
                <th scope="col" className="px-6 py-3">
                  Tên sản phẩm
                </th>
                <th scope="col" className="px-6 py-3">
                  Thương Hiệu
                </th>
                <th scope="col" className="px-6 py-3">
                  Số lượng
                </th>
                <th scope="col" className="px-6 py-3">
                  Giá
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item: any, index: number) => {
                return (
                  <tr key={item.id} className="p-10 zitems-center">
                    <td className="w-4 p-4">{index}</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-20 h-100 "
                        src={item?.images[0]?.src}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4 ">{item.title}</td>
                    <td className="px-6 py-4">{item.brands?.title}</td>
                    <td className="px-6 py-4">{item.stock}</td>
                    <td className="px-6 py-4">
                      {item.price?.toLocaleString()}
                    </td>
                    <td className=" py-8 px-5 flex ">
                      <ButtonEdit item={item} className="pl-5" />
                      <button
                        className="bg-red-600 text-red-200 px-5 py-2 font-semibol"
                        onClick={() => onDeleteProduct(item.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="p-4">
            <AdminPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManager;
