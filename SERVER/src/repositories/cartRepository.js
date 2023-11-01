import db from "../models";
export const createCartRepository = async (id, data) => {
  const { productSizeId, quantity } = data;
  const response = await db.Carts.findOrCreate({
    where: { productSizeId: productSizeId },
    defaults: {
      productSizeId,
      quantity,
      userId: id,
    },
  });
  return response;
};
export const getAllCartRepository = async () => {
  const data = await db.Carts.findAll({
    include: [
      {
        model: db.ProductSizes,
        as: "productSizes",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.Products,
            as: "products",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOneCartbyUserRepository = async ({ id }) => {
  const data = await db.Carts.findAll({
    where: { userId: id },
    include: [
      {
        model: db.Users,
        as: "users",
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      },
      {
        model: db.ProductSizes,
        as: "productSizes",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.Products,
            as: "products",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
            include: [
              {
                model: db.Images,
                as: "images",
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
      exclude: ["createdAt", "updatedAt"],
    },
  });

  return data;
};

export const updateCartRepository = async (id, body) => {
  // console.log(id, "<<<<");
  console.log(body, "<<<<");
  // const response = await db.Carts.update(body, {
  //   where: { userId: id },
  // });
  // return response;
};

export const deleteCartRepository = async ({ id }) => {
  const response = await db.Carts.destroy({
    where: { userId: id },
  });
  return response;
};
export const deleteItemCartRepository = async (id) => {
  const response = await db.Carts.destroy({
    where: { id },
  });
  return response;
};
