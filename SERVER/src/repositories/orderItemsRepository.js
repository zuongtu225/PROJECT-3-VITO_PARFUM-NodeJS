import db from "../models";
export const createOrderItemRepository = async (data) => {
  const { cartId, orderId } = data;
  const response = await db.OrderItems.findOrCreate({
    where: { cartId },
    defaults: { cartId, orderId },
  });
  return response;
};
export const getAllOrderItemRepository = async () => {
  const data = await db.OrderItems.findAll({
    // include: [
    //   {
    //     model: db.Carts,
    //     as: "carts",
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"],
    //     },
    //   },
    // ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOrderItemByUserRepository = async ({ id }) => {
  const data = await db.OrderItems.findAll({
    include: [
      {
        model: db.Carts,
        as: "carts",
        where: {
          userId: id,
        },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

// export const updateOrderItemRepository = async (id, body) => {
//   const response = await db.OrderItems.update(body, {
//     where: { id },
//   });
//   return response;
// };
// export const deleteOrderItemRepository = async ({ id }) => {
//   const response = await db.OrderItems.destroy({
//     where: { id },
//   });
//   return response;
// };
