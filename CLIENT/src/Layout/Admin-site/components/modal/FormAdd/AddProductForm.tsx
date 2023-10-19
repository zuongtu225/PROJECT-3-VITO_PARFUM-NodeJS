import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBrand, ICategory, IProduct, ISize } from "../../../../../Interface";
import {
  getApiBrands,
  getApiCategories,
  getApiSizes,
} from "../../../../../store/action";
import { AppDispatch } from "../../../../../store";

// FORM ở giữa Thêm Sản phẩm
const AddProductForm = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: any) => state?.categoryReducer?.categories
  );
  const brands = useSelector((state: any) => state?.brandReducer?.brands);
  const sizes = useSelector((state: any) => state?.sizeReducer?.sizes);

  const min = 1000000000000;
  const max = 9999999999999;
  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  const [newProduct, setNewProduct] = useState<any>({
    id: randomId,
    title: "",
    brandId: 0,
    categoryId: 0,
    sizeId: 0,
    stock: 0,
    price: 0,
    description: "",
  });
  const [images, setImages] = useState<any>([]);
  const handleChangeImages = (event: any) => {
    setImages(event.target.files);
  };

  useEffect(() => {
    dispatch(getApiCategories());
    dispatch(getApiBrands());
    dispatch(getApiSizes());
  }, []);

  useEffect(() => {
    props.handleGetProduct(newProduct, images);
  }, [newProduct, images]);

  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              name="name"
              placeholder="Tên sản phẩm"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="md:w-1/2 px-3 ">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                name="brand"
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    brandId: Number(e.target.value),
                  })
                }
              >
                <option value="">Thương hiệu</option>;
                {brands?.map((item: IBrand) => {
                  return <option value={item.id}>{item.title}</option>;
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
              name="description"
              placeholder="Mô tả"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="md:w-1/2 px-3 ">
            <div className="relative">
              <select
                name="Sizes"
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    sizeId: Number(e.target.value),
                  })
                }
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
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-zip"
              type="number"
              name="stock"
              placeholder="Số lượng"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  stock: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="md:w-1/2 px-3 ">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                name="category"
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    categoryId: Number(e.target.value),
                  })
                }
              >
                <option>Loại</option>;
                {categories?.map((item: ICategory) => {
                  return <option value={item.id}>{item.title}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              className="rounded-lg mt-3 border border-separate"
              onChange={handleChangeImages}
              type="file"
              multiple
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
