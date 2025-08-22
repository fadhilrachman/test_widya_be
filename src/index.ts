import express from "express";
import AuthRouter from "./routes/auth.router";
import ProfileRouter from "./routes/profile.router";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
const PORT = 4000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "Dokumentasi API Express menggunakan Swagger + TypeScript",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/docs/*.ts"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(express.json());
app.use(AuthRouter);
app.use(ProfileRouter);
app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});
