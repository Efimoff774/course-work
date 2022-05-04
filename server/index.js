import "dotenv/config";
import express from "express";
import sequelize from "./db.js";
import {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  DeviceInfo,
} from "./models/models.js";
import cors from "cors";
import router from "./routes/index.js";
import errorHandler from "./middleware/ErrorHandlingMiddleware.js";
import fileUpload from "express-fileupload";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// hand errors, the last middleware, return the answer about err
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate(); // connect to db
    await sequelize.sync(); // compare db and scheme
    app.listen(PORT, () =>
      console.log(`server has been started on port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
