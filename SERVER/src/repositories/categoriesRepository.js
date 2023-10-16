import db from "../models";
export const createCategoryRepository = async ({ title }) => {
  const response = await db.Categories.findOrCreate({
    where: { title: title },
    defaults: { title: title },
  });
  return response;
};
export const getAllCategoryRepository = async () => {
  const data = await db.Categories.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOneCategoryRepository = async ({ id }) => {
  const data = await db.Categories.findOne({
    where: { id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const updateCategoryRepository = async (id, body) => {
  const response = await db.Categories.update(body, {
    where: { id },
  });
  return response;
};
export const deleteCategoryRepository = async ({ id }) => {
  const response = await db.Categories.destroy({
    where: { id },
  });
  return response;
};
