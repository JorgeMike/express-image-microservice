"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageFormdata = exports.uploadImageBase64 = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const uploadImageBase64 = (body, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { folder, image, image_name } = body;
    if (!folder || !image || !image_name) {
        return res
            .status(400)
            .send({ error: true, message: "Missing required fields" });
    }
    const uploadDir = path_1.default.join(process.cwd(), `uploads/${folder}`);
    if (!(0, fs_1.existsSync)(uploadDir)) {
        return res
            .status(400)
            .send({ error: true, message: "Folder does not exist" });
    }
    const base64Image = image.split(",")[1];
    const filePath = path_1.default.join(uploadDir, image_name);
    const imageBuffer = Buffer.from(base64Image, "base64");
    (0, fs_1.writeFileSync)(filePath, imageBuffer);
    return res.status(200).send({ error: false, message: "File uploaded" });
});
exports.uploadImageBase64 = uploadImageBase64;
const uploadImageFormdata = (body) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(body);
});
exports.uploadImageFormdata = uploadImageFormdata;
