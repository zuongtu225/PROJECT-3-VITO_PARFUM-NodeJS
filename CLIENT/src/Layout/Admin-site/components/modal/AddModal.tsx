import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";
import ProductFormAdd from "./FormAdd/AddProductForm";
import { createProduct, createProductSize } from "../../../../Api";
import { createImages } from "../../../../Api/images";
import { IBrand, IProduct } from "../../../../Interface";
import AddBrandForm from "./FormAdd/AddBrandForm";
import { createBrand } from "../../../../Api/brands";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import {
  getApiBrands,
  getApiCategories,
  getApiProducts,
} from "../../../../store/action";
import { ToastContainer, toast } from "react-toastify";
import { createCategory } from "../../../../Api/categories";
import AddCategoryForm from "./FormAdd/AddCategoryForm";

export function AddModal(props: any): any {
  const dispatch = useDispatch<AppDispatch>();

  const [product, setProduct] = useState<any>();
  const [category, setCategory] = useState<any>();
  const [images, setImages] = useState<any>();
  const [provider, setProvider] = useState<any>();
  const [brand, setBrand] = useState<any>();
  const [origin, setOrigin] = useState<any>();
  const [voucher, setVoucher] = useState<any>();
  const [blog, setBlog] = useState<any>();
  const [payment, setPayment] = useState<any>();
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const ClickClose = () => {
    props.handleClose(false);
  };

  const handleGetProduct = (data: IProduct, formData: any) => {
    setProduct(data);
    setImages(formData);
  };
  const handleGetBrand = (data: IBrand) => {
    setBrand({ title: data });
  };
  const handleGetCategory = (data: IBrand) => {
    setCategory({ title: data });
  };
  // THÊM MỚI
  const handleAdd = async () => {
    switch (props.title) {
      case "PRODUCTS":
        const imageData = { id: product.id, images };
        const formData = new FormData();
        for (let i of Object.entries(imageData)) formData.append(i[0], i[1]);
        for (let img of images) formData.append("images", img);
        const responseProduct: any = await createProduct(product);
        await createProductSize(product);
        await createImages(formData);
        if (responseProduct.data.success === true) {
          props.handleClose(false);
          toast.success(responseProduct.data.message);
          setTimeout(() => {
            dispatch(getApiProducts());
          }, 2000);
        } else {
          props.handleClose(false);
          toast.error(responseProduct.data.message);
        }
        break;
      case "BRANDS":
        const responseBrand: any = await createBrand(brand);
        if (responseBrand.data.success === true) {
          props.handleClose(false);
          toast.success(responseBrand.data.message);
          setTimeout(() => {
            dispatch(getApiBrands());
          }, 2000);
        } else {
          props.handleClose(false);
          toast.error(responseBrand.data.message);
        }
        break;
      case "CATEGORY":
        const responseCategory: any = await createCategory(category);
        if (responseCategory.data.success === true) {
          props.handleClose(false);
          toast.success(responseCategory.data.message);
          setTimeout(() => {
            dispatch(getApiCategories());
          }, 2000);
        } else {
          props.handleClose(false);
          toast.error(responseCategory.data.message);
        }
        break;
      case "PAYMENT":
        axios.post("http://localhost:5000/payments", payment);
        break;
      case "VOUCHERS":
        axios.post("http://localhost:5000/vouchers", voucher);
        break;
    }
  };

  return (
    // Form  chung
    // Submit chung
    <div className="formAdd">
      <Dialog open={open} handler={ClickClose}>
        <DialogHeader> Form Thêm </DialogHeader>
        <DialogBody divider>
          {props.title === "PRODUCTS" && (
            <div>
              <ProductFormAdd handleGetProduct={handleGetProduct} />
            </div>
          )}
          {props.title === "BRANDS" && (
            <div>
              <AddBrandForm handleGetBrand={handleGetBrand} />
            </div>
          )}
          {props.title === "CATEGORY" && (
            <div>
              <AddCategoryForm handleGetCategory={handleGetCategory} />
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={ClickClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button color="green" onClick={handleAdd}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <ToastContainer />
    </div>
  );
}
