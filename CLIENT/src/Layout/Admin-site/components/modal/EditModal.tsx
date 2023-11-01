import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import EditProductForm from "./FormEdit/EditProductForm";
import axios from "axios";
import { IProduct, Iimage } from "../../../../Interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { getApiProducts } from "../../../../store/action";
import { updateProduct } from "../../../../Api";
import { toast } from "react-toastify";
export function EditModal(props: any) {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(props.open);
  const [image, setImage] = useState<any>();
  const [productUpdate, setProductUpdate] = useState<IProduct>();

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  const ClickClose = () => {
    props.handleClose(false);
  };
  const handleGetProduct = (productUpdate: any, image: Iimage) => {
    setProductUpdate(productUpdate);
    setImage(image);
  };

  const handleUpdate = async () => {
    switch (props.title) {
      case "PRODUCTS":
      // const responseProduct: any = await createProduct(product);
      // await createProductSize(product);
      // const responseProduct: any = await updateProduct(productUpdate);
      // if (responseProduct.status === 200) {
      //   toast.success(responseProduct.data.message);
      //   props.handleClose(false);
      //   setTimeout(() => {
      //     dispatch(getApiProducts());
      //   }, 2000);
      // } else {
      //   props.handleClose(false);
      //   toast.error(responseProduct.data.message);
      // }
      // break;
    }
  };

  return (
    <div>
      <Dialog open={open} handler={ClickClose}>
        <DialogHeader> Form Sửa </DialogHeader>
        <DialogBody divider>
          {props.title === "PRODUCTS" && (
            <div>
              <EditProductForm handleGetProduct={handleGetProduct} />
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

          <Button color="green" onClick={handleUpdate}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
