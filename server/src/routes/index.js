const { Router } = require("express");
const {
    getDriversHandler,
    getDriverHandler,
    getTeamsHandler,
    postDriverHandler,
} = require("../handler");

const router = Router();

router.get("/drivers", getDriversHandler);
router.get("/drivers/:idDriver", getDriverHandler);
router.get("/drivers/", getDriversHandler);
router.get("/teams", getTeamsHandler);
router.post("/drivers", postDriverHandler);

module.exports = router;
