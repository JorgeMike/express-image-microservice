"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadService_1 = require("../services/uploadService");
const router = (0, express_1.Router)();
router.post("/base64", (req, res) => {
    console.log("POST /upload");
    const body = req.body;
    return (0, uploadService_1.uploadImageBase64)(body, res);
});
router.post("/formData", (req, res) => {
    console.log("POST /upload");
    const body = req.body;
    (0, uploadService_1.uploadImageFormdata)(body);
    res.send("File uploaded");
});
exports.default = router;
