import db from "../models";
export const createOrderItemRepository = async (createOrder, idCart) => {
  const response = await db.OrderItems.bulkCreate(createOrder);
  return response;
};
export const getAllOrderItemRepository = async () => {
  const data = await db.OrderItems.findAll({
    include: [
      {
        model: db.ProductSizes,
        as: "productSizes",
        attributes: {
          exclude: [, "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.Products,
            as: "products",
            attributes: {
              exclude: ["productId", , "createdAt", "updatedAt"],
            },
          },
          {
            model: db.Sizes,
            as: "sizes",
            attributes: {
              exclude: ["sizeId", , "createdAt", "updatedAt"],
            },
          },
        ],
      },
    ],
    attributes: {
      exclude: ["productSizeId", "createdAt", "updatedAt"],
    },
  });
  return data;
};
