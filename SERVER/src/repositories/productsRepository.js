import { deleteImageController } from "../controllers/imagesController";
import db from "../models";
export const createProductRepository = async (products) => {
  const response = await db.Products.findOrCreate({
    where: { title: products.title },
    defaults: {
      id: products.id,
      categoryId: products.categoryId,
      brandId: products.brandId,
      title: products.title,
      stock: products.stock,
      price: products.price,
      description: products.description,
    },
  });
  return response;
};

export const getAllProductRepository = async () => {
  const data = await db.Products.findAll({
    include: [
      {
        model: db.Brands,
        as: "brands",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: db.Categories,
        as: "categories",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },

      {
        model: db.Images,
        as: "images",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["brandId", "categoryId", "createdAt", "updatedAt"],
    },
  });
  return data;
};
export const getOneProductRepository = async ({ id }) => {
  const data = await db.Products.findOne({
    where: { id },
    attributes: {
      exclude: ["categoryId", "brandId", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: db.Brands,
        as: "brands",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: db.Categories,
        as: "categories",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },

      {
        model: db.Images,
        as: "images",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
  });
  return data;
};
export const updateProductRepository = async (id, body) => {
  const response = await db.Products.update(body, {
    where: { id },
  });
  return response;
};
export const deleteProductRepository = async ({ id }) => {
  const response = await db.Products.destroy({
    where: { id },
  });
  return response;
};
