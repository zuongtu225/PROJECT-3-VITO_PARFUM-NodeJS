import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { IProduct, IUser } from "../../../../Interface";
import { AppDispatch, useAppDispatch } from "../../../../store";
import {
  getApiProductSizes,
  getDetailProduct,
  getDetailUser,
} from "../../../../store/action";
import { BiSolidStar } from "react-icons/bi";
import { FaStarHalfAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { updateUser } from "../../../../Api/user";
import { createCart } from "../../../../Api";
const ProductsDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [img, setImg] = useState<string>("");
  const [sizeID, setSizeID] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const userDetail = useSelector(
    (state: any) => state?.userReducer?.userDetail
  );
  const productDetail = useSelector(
    (state: any) => state?.productReducer?.productDetail
  );
  const productSizes = useSelector(
    (state: any) => state?.productSizeReducer?.productSizes
  );
  const addToCart = async () => {
    const productId = Number(id);
    const newProductSize = productSizes?.filter(
      (item: any) => item.productId === productId && item.sizeId === sizeID
    );

    const newCart = {
      productSizeId: newProductSize[0]?.id,
      quantity: +quantity,
    };
    const resCart: any = await createCart(newCart);

    if (resCart.data.success === true) {
      toast.success(resCart.data.message);
      setTimeout(() => {
        navigate("/cart");
      }, 1500);
    } else {
      toast.error(resCart.data.message);
    }
  };

  useEffect(() => {
    dispatch(getDetailProduct(id));
    dispatch(getDetailUser());
    dispatch(getApiProductSizes());
  }, []);
  useEffect(() => {
    setImg(
      productDetail?.images !== undefined && productDetail?.images[0]?.src
    );
  }, [productDetail]);

  const handleClick = (src: string) => {
    setImg(src);
  };

  return (
    <main>
      <ToastContainer />
      {/* <!-- nav-site-tab --> */}
      <div className="home-site-tab container">
        <NavLink to={"/"}>Trang chủ |</NavLink>
        <NavLink to={"/male"} className="pl-1">
          Nước Hoa Nam |
        </NavLink>
        <b className="pl-1">{productDetail?.brands?.title}</b>
      </div>
      {/* <!-- card-detail render local--> */}
      <div className="card-wrapper container">
        <div className="card">
          {/* <!-- cart left> --> */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={`${img}`} alt="" />
                <img src={`${img}`} alt="" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <button
                  onClick={() =>
                    handleClick(
                      `${
                        productDetail?.images !== undefined &&
                        productDetail?.images[1]?.src
                      }`
                    )
                  }
                >
                  <img
                    src={`${
                      productDetail?.images !== undefined &&
                      productDetail?.images[1]?.src
                    }`}
                    alt="showimage"
                  />
                </button>
              </div>
              <div className="img-item">
                <button
                  onClick={() =>
                    handleClick(
                      `${
                        productDetail?.images !== undefined &&
                        productDetail?.images[2]?.src
                      }`
                    )
                  }
                >
                  <img
                    src={`${
                      productDetail?.images !== undefined &&
                      productDetail?.images[2]?.src
                    }`}
                    alt="showimage"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* <!-- cart main> --> */}
          <div className="card-content">
            <div className="card-content-top">
              <h3 className="name">{productDetail?.name}</h3>
              <div className="rating">
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <FaStarHalfAlt />
                <p>1 đánh giá</p>
                <p>{productDetail.category}</p>
              </div>
              <p>
                Thương hiệu: <b>{productDetail?.brand}</b>
              </p>
              <div className="type">
                <p>Eau de Parfum 100ml</p>
                <p className="new">New</p>
                <p className="editon">Limited Edition</p>
              </div>
              <p>Standard Size </p>
              <div className="standard-size">
                {productDetail?.productSize?.map((item: any) => {
                  return (
                    <div
                      className="size-ml"
                      onClick={() => setSizeID(item.sizes.id)}
                    >
                      <img
                        src="https://www.wildstone.in/cdn/shop/files/3_11_58e50d58-d099-45d7-8746-fbfd9f67bae5.jpg?v=1688035904"
                        alt=""
                      />
                      <p>{item.sizes.size}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="content-ship">
              <div className="ship">
                <i className="fa-solid fa-truck-fast"></i>
                <p>Freeship toàn quốc</p>
              </div>
              <div className="ship">
                <i className="fa-regular fa-square-check"></i>
                <p>Chính hãng 100%</p>
              </div>
              <div className="ship">
                <i className="bx bx-transfer-alt"></i>
                <p>Đổi trả miễn phí</p>
              </div>
            </div>
            <p className="call">
              Gọi đặt mua <i className="fa-solid fa-phone"></i> 0935 27 61 88
            </p>
          </div>
          {/* <!-- cart right> --> */}
          {userDetail?.id ? (
            <div className="product-shopping">
              <p className="last-price">30.000.000 ₫</p>
              <p className="new-price">27.500.000 ₫</p>
              <p>Tiết kiệm: 10%</p>
              <p>CÒN HÀNG</p>
              <div className="store-near">
                <i className="fa-solid fa-store"></i>
                <p>Cửa hàng gần bạn</p>
              </div>
              <div className="quantity">
                <p>Số lượng:</p>
                <input
                  type="number"
                  min="0"
                  value={quantity}
                  id="quantityAdd"
                  onChange={(e: any) => setQuantity(e.target.value)}
                />
              </div>
              <button className="addCart" onClick={addToCart}>
                Thêm vào giỏ hàng
              </button>
              <button className="buyNow">Mua ngay</button>
              <button className="favorite hide-tablet">
                <i className="fa-regular fa-heart"></i>
                <p>Yêu thích</p>
              </button>
            </div>
          ) : (
            <p>Bạn chưa đăng nhập ko thể mua</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsDetail;
