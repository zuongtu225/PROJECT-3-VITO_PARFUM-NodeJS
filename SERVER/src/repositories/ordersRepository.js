import db from "../models";

export const createOrderRepository = async (id, data) => {
  const response = await db.Orders.create({
    addressId: data.addressId,
    paymentId: data.paymentId,
    userId: id,
    total: data.total,
    status: "Pending",
  });
  return response;
};

export const getAllOrderRepository = async () => {
  const data = await db.Orders.findAll({
    include: [
      {
        model: db.Users,
        as: "users",
        attributes: {
          exclude: [
            "firstName",
            "lastName",
            "password",
            "avatar",
            "status",
            "createdAt",
            "updatedAt",
          ],
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
      {
        model: db.OrderItems,
        as: "orderItems",
        attributes: {
          exclude: ["codeOrder", "productSizeId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.ProductSizes,
            as: "productSizes",
            attributes: {
              exclude: ["sizeId", "productId", "createdAt", "updatedAt"],
            },
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
          },
        ],
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
