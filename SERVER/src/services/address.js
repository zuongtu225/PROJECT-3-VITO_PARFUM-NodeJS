import db from "../models";
export const createAddressServices = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve({
        success: true,
        message: "Thêm Address thành công",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getAllAddressServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Addresses.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const addresses = response.map((address) => address.dataValues);
      resolve({
        success: true,
        data: addresses,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAddressByUserServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Addresses.findAll({
        where: { userId: id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const data = response.map((item) => item.dataValues);
      resolve({
        success: true,
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateAddressServices = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Addresses.update(data, {
        where: { userId: id },
      });
      resolve({
        success: true,
        message: `Cập nhật địa chỉ thành công`,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteAddressServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Addresses.destroy({
        where: { userId: id },
      });
      resolve({
        success: response > 0 ? true : false,
        message: `Xóa thành công`,
      });
    } catch (error) {
      reject(error);
    }
  });
