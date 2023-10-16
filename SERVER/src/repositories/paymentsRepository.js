import db from "../models";
export const createPaymentRepository = async ({ paymentMethod }) => {
  const response = await db.Payments.findOrCreate({
    where: { paymentMethod },
    defaults: { paymentMethod },
  });
  return response;
};
export const getAllPaymentRepository = async () => {
  const data = await db.Payments.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOnePaymentRepository = async ({ id }) => {
  const data = await db.Payments.findOne({
    where: { id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const updatePaymentRepository = async (id, body) => {
  const response = await db.Payments.update(body, {
    where: { id },
  });
  return response;
};
export const deletePaymentRepository = async ({ id }) => {
  const response = await db.Payments.destroy({
    where: { id },
  });
  return response;
};
