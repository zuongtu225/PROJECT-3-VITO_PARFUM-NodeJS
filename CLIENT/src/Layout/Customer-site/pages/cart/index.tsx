import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store";
import {
  getApiBank,
  getCartByUser,
  getDetailUser,
} from "../../../../store/action";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { deleteCartItem, updateCart, updateUser } from "../../../../Api";
import { IProduct } from "../../../../Interface";
import { ToastContainer, toast } from "react-toastify";
const CustomerCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth: any = localStorage.getItem("auth") || "";
  const userDetail: any = useSelector(
    (state: any) => state?.userReducer?.userDetail
  );
  const [quantity, setQuantity] = useState<number>(0);

  const carts: any = useSelector((state: any) => state?.cartReducer?.carts);

  const minus = async (id: number) => {
    const updatedCarts = carts?.map((item: any) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    await updateCart(updatedCarts);
  };

  const plus = async (id: number) => {
    const itemCart = carts?.find((item: any) => item.id === id);
    const updatedItemCart = { ...itemCart };
    updatedItemCart.quantity += 1;
  };

  const deleteItemCart = async (id: number) => {
    const response: any = await deleteCartItem(id);
    if (response.data.success === true) {
      toast.success(response.data.message);
      setTimeout(() => {
        dispatch(getCartByUser());
      }, 1500);
    } else {
      toast.error(response.data.message);
    }
  };

  const checkout = () => {
    if (carts.length > 0) {
      navigate("/checkout");
    } else {
      toast.error("Không có sản phẩm để đặt hàng");
    }
  };
  useEffect(() => {
    dispatch(getDetailUser());
    dispatch(getCartByUser());
  }, []);

  return (
    <main>
      <ToastContainer />
      <div className="homeIndex container">
        <NavLink className="flex items-center gap-1" to={"/"}>
          Trang chủ <VscHome />
        </NavLink>
        <p id="historyClick">Lịch sử đơn hàng</p>
      </div>
      <div className="cart-order container">
        <div className="cart-heading">
          <h2>Giỏ hàng</h2>
        </div>
        <div className="cart-item-flex">
          <p className="cart-item-count">0 sản phẩm</p>
          <NavLink to={"/"}>Tiếp tục mua hàng</NavLink>
        </div>
        {/* <!-- orders --> */}
        <div className="cart-pay-wrapper flex">
          {/* <!-- orders --> */}
          <div className="cart-oder-left">
            {carts?.map((item: any) => {
              return (
                <div className="cart-item">
                  <div className="item-img-info">
                    <input type="checkbox" />
                    <img
                      src={`${item.productSizes?.products?.images[0]?.src}`}
                      alt=""
                    />
                    <div className="detail-product-order">
                      <p className="name">
                        {item.productSizes?.products?.title}
                      </p>
                    </div>
                  </div>

                  <div className="price-order hide-mobile">
                    {item.productSizes?.products?.price?.toLocaleString()} ₫
                  </div>

                  <div className="quantity-parent">
                    <button>
                      <AiOutlineMinus
                        onClick={() => minus(item.id)}
                        className="fa-solid fa-minus pl-2"
                      ></AiOutlineMinus>
                    </button>
                    <input min="0" value={`${item.quantity}`} />
                    <button>
                      <AiOutlinePlus
                        onClick={() => plus(item.id)}
                        className="fa-solid fa-plus pl-2"
                      ></AiOutlinePlus>
                    </button>
                  </div>
                  <div id="price-after">
                    {item.productSizes?.products?.price * item.quantity}₫
                  </div>
                  <RiDeleteBinLine
                    onClick={() => deleteItemCart(item.id)}
                    className="text-[20px] text-red-500 mr-5 cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
          <div className="cart-oder-right">
            <div className="pay">
              <div className="total">
                <div className="field-discount">
                  <p>Mã giảm giá</p>
                  <p id="show-code-free">Nhập mã </p>
                </div>
                <div id="discount-show">
                  <input type="text" placeholder="Mã giảm giá" />
                  <button>Sử dụng</button>
                </div>
                <div className="transport">
                  <p>Phí vận chuyển:</p>
                  <p>20.000</p>
                </div>
                <div className="total-price">
                  <p>Tổng: </p>
                  <p id="printPrice" className="price pl-5 "></p>
                  <button className="pay-tottaly" onClick={checkout}>
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!--  thanh toán --> */}
        </div>
      </div>
    </main>
  );
};

export default CustomerCart;
