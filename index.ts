import dotenv from "dotenv";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./src/swagger.json";
import { routes } from "./src/routes";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3100;

app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(port, () => {
  console.info(`Server started at http://localhost:${port}`);
});
