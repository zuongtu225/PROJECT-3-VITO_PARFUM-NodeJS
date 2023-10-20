import db from "../models";
export const createProductSizeRepository = async (data) => {
  const response = await db.ProductSizes.findOrCreate({
    where: { sizeId: data.sizeId, productId: data.productId },
    defaults: {
      productId: data.productId,
      sizeId: data.sizeId,
    },
  });
  return response;
};

export const getAllProductSizeRepository = async () => {
  const data = await db.ProductSizes.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    // include: [
    //   {
    //     model: db.Products,
    //     as: "products",
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"],
    //     },
    //     include: [
    //       {
    //         model: db.Images,
    //         as: "images",
    //         attributes: {
    //           exclude: ["createdAt", "updatedAt"],
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     model: db.Sizes,
    //     as: "sizes",
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"],
    //     },
    //   },
    // ],
  });
  return data;
};

export const getOneProductSizeRepository = async ({ id }) => {
  const data = await db.ProductSizes.findOne({
    where: { id },
    include: [
      {
        model: db.Products,
        as: "products",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: db.Sizes,
        as: "sizes",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["productId", "sizeId", "createdAt", "updatedAt"],
    },
  });
  return data;
};

export const deleteProductSizeRepository = async ({ productId }) => {
  const response = await db.ProductSizes.destroy({
    where: { productId },
  });
  return response;
};
