import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IBrand,
  ICategory,
  IProduct,
  ISize,
  Iimage,
  IimageFile,
} from "../../../../../Interface";
import { AppDispatch } from "../../../../../store";
import {
  getApiBrands,
  getApiCategories,
  getApiSizes,
} from "../../../../../store/action";
import { updateImage } from "../../../../../Api/images";

const EditProductForm = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<any>();

  const productDetail = useSelector(
    (state: any) => state?.productReducer?.productDetail
  );

  const categories = useSelector(
    (state: any) => state?.categoryReducer?.categories
  );

  const brands = useSelector((state: any) => state?.brandReducer?.brands);
  const sizes = useSelector((state: any) => state?.sizeReducer?.sizes);
  const [newProduct, setNewProduct] = useState<any>({
    id: productDetail.id,
    title: productDetail.title,
    brandId: 0,
    categoryId: 0,
    sizeId: 0,
    stock: productDetail.stock,
    price: 0,
    description: productDetail.description,
  });
  const handleChangeImage = async (e: any, id: number) => {
    const formData = new FormData();
    const imageData = { src: e.target.files };
    for (let i of Object.entries(imageData)) formData.append(i[0], i[1]);
    const response = await updateImage(id, formData);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const product = {
      ...newProduct,
      [name]: value,
    };
    setNewProduct(product);
  };
  useEffect(() => {
    dispatch(getApiCategories());
    dispatch(getApiBrands());
    dispatch(getApiSizes());
  }, []);

  useEffect(() => {
    props.handleGetProduct(newProduct);
  }, [newProduct]);

  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6   flex flex-col ">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              name="title"
              placeholder="Tên sản phẩm"
              value={newProduct.title}
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3 ">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                name="brandId"
                value={newProduct.brandId}
                onChange={handleChange}
              >
                <option>Thương hiệu</option>;
                {brands?.map((item: IBrand) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <textarea
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              value={newProduct.description}
              name="description"
              placeholder="Mô tả"
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3 ">
            <div className="relative">
              <select
                name="sizeId"
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                onChange={handleChange}
              >
                <option>Size</option>
                {sizes?.map((item: ISize) => {
                  return <option value={item.id}>{item.size}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city"
              type="number"
              name="price"
              placeholder="Giá"
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-zip"
              type="number"
              placeholder="Số lượng"
              name="stock"
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3 ">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                name="categoryId"
                onChange={handleChange}
              >
                <option>Loại</option>;
                {categories?.map((item: ICategory) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          {/* image  */}
          {productDetail?.images?.map((item: any, index: number) => {
            return (
              <div
                key={item.id}
                className=" flex justify-between items-center  mt-5 mb-5"
              >
                <p>Ảnh {index + 1}</p>
                <img src={`${item.src}`} alt="" className="w-[50px] h-[50px]" />
                <input
                  type="file"
                  className="w-[50%]"
                  onChange={(e: any) => handleChangeImage(e, item.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  //   ko co butoton
};

export default EditProductForm;
