import db from "../models";

export const createImageRepository = async (src, productId) => {
  const response = await db.Images.findOrCreate({
    where: { src: src },
    defaults: { src: src, productId: productId },
  });
  return response;
};
export const getAllImageRepository = async () => {
  const data = await db.Images.findAll({
    include: [
      {
        model: db.Products,
        as: "products",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["productId", "createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOneImageRepository = async ({ id }) => {
  const data = await db.Images.findOne({
    where: { id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};
export const updateImageRepository = async (id, src) => {
  const response = await db.Images.update(
    { src: src },
    {
      where: { id },
    }
  );
  return response;
};

export const deleteImageRepository = async ({ id }) => {
  const response = await db.Images.destroy({
    where: { id },
  });
  return response;
};
