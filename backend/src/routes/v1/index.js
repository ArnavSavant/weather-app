const express = require("express");

const router = express.Router();

const { infoController } = require("../../controllers");
const weatherRoutes = require("./weather-routes");
router.get("/info", infoController.info);
router.use("/weather", weatherRoutes);
module.exports = router;
