import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomerFooter from "../Customer-site/components/layout/Footer/CustomerFooter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { getApiUsers } from "../../store/action";
import { ToastContainer, toast } from "react-toastify";
import CustomerHeader from "../Customer-site/components/layout/Header/CustomerHeader";
import axios from "axios";
import { loginAPI } from "../../Api/auth";

const Login = () => {
  const data = useSelector((state: any) => state?.userReducer?.users);
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [error, setError] = useState<any>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getApiUsers());
  }, []);
  const submit = async (e: any) => {
    e.preventDefault();
    const dataUser = {
      email,
      password,
    };
    const response = await loginAPI(dataUser);
    const newError = {
      isError: false,
      emailMSG: "",
    };
    if (response.data.success === false) {
      newError.isError = true;
      newError.emailMSG = "Email hoặc mật khẩu không đúng";
    }
    setError(newError);
    // role = 1 admin, role = 2 user
    if (response.data.success === true) {
      if (response.data.role === 2) {
        toast.success("Đăng nhập thành công");
        localStorage.setItem("auth", response.data.accessToken);
        setTimeout(() => {
          navigate("/");
        }, 1300);
      } else if (response.data.role === 1) {
        localStorage.setItem("auth", response.data.accessToken);
        toast.success("Đăng nhập thành công");
        setTimeout(() => {
          navigate("/admin");
        }, 1300);
      } else {
        setError(true);
      }
    }
  };

  return (
    <>
      <CustomerHeader />
      <div className="bg-blue-200 flex">
        <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
          <h1 className="font-bold text-2xl my-10 text-black"> Đăng Nhập</h1>
          <form
            onSubmit={(e) => submit(e)}
            className="mt-2 flex flex-col lg:w-1/2 w-8/12"
          >
            {error?.isError === true && (
              <p className="text-black-700">{error.emailMSG} </p>
            )}
            <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
              <div className="flex -mr-px justify-center w-15 p-4">
                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <i className="fas fa-user-circle" />
                </span>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="flex-shrink flex-grow flex-auto  leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                placeholder="Email"
              />
            </div>
            {error?.isError === true && (
              <p className="text-black-700">{error.passwordMSG} </p>
            )}

            <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
              <div className="flex -mr-px justify-center w-15 p-4">
                <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                  <i className="fas fa-lock" />
                </span>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                placeholder="Mật khẩu"
              />
              <div className="flex -mr-px">
                <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                  <i className="fas fa-eye-slash" />
                </span>
              </div>
            </div>
            {error === true && (
              <p className="text-green-700">Tài khoản của bạn đã bị khóa</p>
            )}
            <NavLink
              to={"/auth/register"}
              className="text-base text-black font-semibold text-right font-roboto leading-normal hover:underline mb-6"
            >
              Đăng ký tài khoản
            </NavLink>
            <button className="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-black rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20">
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
      <CustomerFooter />
    </>
  );
};

export default Login;
