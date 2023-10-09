const { Router } = require("express");
const { getDrivers } = require("../controllers");

const router = Router();

router.get("/", getDrivers);

module.exports = router;
