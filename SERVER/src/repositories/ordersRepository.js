import db from "../models";
import { createOrderItemRepository } from "./orderItemsRepository";
export const createOrderRepository = async (data) => {
  const { codeOrder, addressId, paymentId, sum, status } = data;
  const response = await db.Orders.findOrCreate({
    where: { codeOrder },
    defaults: { codeOrder, addressId, paymentId, sum, status },
  });
  return response;
};

export const getAllOrderRepository = async () => {
  const data = await db.Orders.findAll({
    include: [
      {
        model: db.Addresses,
        as: "address",
        attributes: {
          exclude: ["userId", "createdAt", "updatedAt"],
        },
      },
      {
        model: db.Payments,
        as: "payments",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["paymentId", "addressId", "createdAt", "updatedAt"],
    },
  });
  return data;
};
export const getOrderByUserRepository = async ({ id }) => {
  const data = await db.Orders.findAll({
    include: [
      {
        model: db.OrderItems,
        where: { orderId: id },
        as: "orderItems",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: db.Addresses,
        as: "address",
        attributes: {
          exclude: ["userId", "createdAt", "updatedAt"],
        },
      },
      {
        model: db.Payments,
        as: "payments",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["paymentId", "addressId", "createdAt", "updatedAt"],
    },
  });
  return data;
};

export const updateOrderRepository = async (id, body) => {
  const response = await db.Orders.update(body, {
    where: { id },
  });
  return response;
};
