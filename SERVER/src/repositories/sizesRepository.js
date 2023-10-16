import db from "../models";
export const createSizeRepository = async (data) => {
  const response = await db.Sizes.findOrCreate({
    where: { size: data.size },
    defaults: { size: data.size, percent: data.percent },
  });
  return response;
};
export const getAllSizeRepository = async () => {
  const data = await db.Sizes.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOneSizeRepository = async ({ id }) => {
  const data = await db.Sizes.findOne({
    where: { id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const updateSizeRepository = async (id, body) => {
  const response = await db.Sizes.update(body, {
    where: { id },
  });
  return response;
};
export const deleteSizeRepository = async ({ id }) => {
  const response = await db.Sizes.destroy({
    where: { id },
  });
  return response;
};
