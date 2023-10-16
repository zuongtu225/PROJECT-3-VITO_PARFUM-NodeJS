import db from "../models";

export const createRoleRepository = async ({ role }) => {
  const response = await db.Roles.findOrCreate({
    where: { role },
    defaults: { role },
  });
  return response;
};
export const getAllRoleRepository = async () => {
  const data = await db.Roles.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};
export const getOneRoleRepository = async (role) => {
  const data = await db.Roles.findOne({
    where: { role },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};
export const updateRoleRepository = async (id, role) => {
  const response = await db.Roles.update(role, {
    where: { id },
  });
  return response;
};
export const deleteRoleRepository = async ({ id }) => {
  const response = await db.Roles.destroy({
    where: { id },
  });
  return response;
};
