import express from "express";
import chalk from "chalk";
import uploadsRouter from "./routes/uploadsRouter";
import path from "path";

const app = express(); // Crear una app de express
app.use(
  express.json({
    limit: "50mb",
  })
); // Middleware para parsear JSON

app.get("/", (_req, res) => {
  console.log("GET /");
  res.send("MicroService for upload images");
});

const uploadsPath = path.join(process.cwd(), "uploads");
app.use("/uploads", express.static(uploadsPath));

app.use("/uploads", uploadsRouter); // Rutas para subir archivos

const PORT = 4000; // Puerto para correr el servidor

app.listen(PORT, () => {
  console.log(
    chalk.blue.bold(`\nServer is running on http://localhost:${PORT}`)
  );
});
