import path from "path";
import { IUploadImage } from "../types";
import { existsSync, writeFileSync } from "fs";
import { Response } from "express";

export const uploadImageBase64 = async (body: IUploadImage, res: Response) => {
  const { folder, image, image_name } = body;
  if (!folder || !image || !image_name) {
    return res
      .status(400)
      .send({ error: true, message: "Missing required fields" });
  }

  const uploadDir = path.join(process.cwd(), `uploads/${folder}`);

  if (!existsSync(uploadDir)) {
    return res
      .status(400)
      .send({ error: true, message: "Folder does not exist" });
  }

  const base64Image = image.split(",")[1];

  const filePath = path.join(uploadDir, image_name);
  const imageBuffer = Buffer.from(base64Image, "base64");

  writeFileSync(filePath, imageBuffer);

  return res.status(200).send({ error: false, message: "File uploaded" });
};

export const uploadImageFormdata = async (body: IUploadImage) => {
  console.log(body);
};
