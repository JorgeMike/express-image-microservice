"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const uploadsRouter_1 = __importDefault(require("./routes/uploadsRouter"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)(); // Crear una app de express
app.use(express_1.default.json({
    limit: "50mb",
})); // Middleware para parsear JSON
app.get("/", (_req, res) => {
    console.log("GET /");
    res.send("MicroService for upload images");
});
const uploadsPath = path_1.default.join(process.cwd(), "uploads");
app.use("/uploads", express_1.default.static(uploadsPath));
app.use("/uploads", uploadsRouter_1.default); // Rutas para subir archivos
const PORT = 4000; // Puerto para correr el servidor
app.listen(PORT, () => {
    console.log(chalk_1.default.blue.bold(`\n\t🚀 Server is running on http://localhost:${PORT} 🚀`));
});
