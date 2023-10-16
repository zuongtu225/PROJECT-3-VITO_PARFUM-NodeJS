import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../components/layout/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store";
import { getDetailUser } from "../../../../store/action";
const AdminExtend = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
   const userDetail: any = useSelector(
    (state: any) => state?.userReducer?.userDetail
  );
   useEffect(() => {
    dispatch(getDetailUser());
  }, []);
  useEffect(() => {
    console.log(userDetail,"<<");
    
    if (userDetail.roleId === 2) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {userDetail.roleId === 1 && (
        <div className="flex w-full gap-1">
          <div className="w-1/6">
            <SideBar />
          </div>
          <div className="w-5/6 p-10">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminExtend;
