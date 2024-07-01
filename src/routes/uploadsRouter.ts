import { Router } from "express";
import {
  uploadImageBase64,
  uploadImageFormdata,
} from "../services/uploadService";
import { IUploadImage } from "../types";

const router = Router();

router.post("/base64", (req, res) => {
  console.log("POST /upload");

  const body: IUploadImage = req.body;

  return uploadImageBase64(body, res);
});

router.post("/formData", (req, res) => {
  console.log("POST /upload");

  const body: IUploadImage = req.body;
  uploadImageFormdata(body);

  res.send("File uploaded");
});

export default router;
