import db from "../models";
export const createAddressRepository = async (id, data) => {
  console.log(data);
  const response = await db.Addresses.findOrCreate({
    where: { address: data.address },
    defaults: {
      userId: id,
      address: data.address,
      fullName: data.fullName,
      phoneNumber: data.phone,
    },
  });

  return response;
};
export const getAllAddressRepository = async () => {
  const data = await db.Addresses.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOneAddressRepository = async ({ id }) => {
  const data = await db.Addresses.findAll({
    where: { userId: id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const updateAddressRepository = async (id, body) => {
  const response = await db.Addresses.update(body, {
    where: { id },
  });
  return response;
};
export const deleteAddressRepository = async ({ id }) => {
  const response = await db.Addresses.destroy({
    where: { id },
  });
  return response;
};
