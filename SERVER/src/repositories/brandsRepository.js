import db from "../models";
export const createBrandRepository = async ({ title }) => {
  const response = await db.Brands.findOrCreate({
    where: { title: title },
    defaults: { title: title },
  });
  return response;
};
export const getAllBrandRepository = async () => {
  const data = await db.Brands.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOneBrandRepository = async ({ id }) => {
  const data = await db.Brands.findOne({
    where: { id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const updateBrandRepository = async (id, body) => {
  const response = await db.Brands.update(body, {
    where: { id },
  });
  return response;
};
export const deleteBrandRepository = async ({ id }) => {
  const response = await db.Brands.destroy({
    where: { id },
  });
  return response;
};
