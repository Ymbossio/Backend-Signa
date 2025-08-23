import { Sequelize } from "sequelize";
import config from "../config/config.js";
import setupModel from "../entities/index.js";

export const sequelize = new Sequelize(config.url, {
  dialect: config.dialect,
  dialectOptions: config.dialectOptions,
  logging: config.logging,
});

const connectDataBase = async () => {
  try {
    await sequelize.authenticate();
    setupModel(sequelize);
    await sequelize.sync();
    console.log("✅ Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("❌ No se pudo conectar a la base de datos:", error);
    process.exit(1);
  }
};

export default connectDataBase;
