const { Router } = require("express");
const {
    getDrivers,
    getDriver,
    getDriversByName,
    getTeams,
    postDriver,
} = require("../controllers");

const router = Router();

router.get("/drivers", getDrivers);
router.get("/drivers/:idDriver", getDriver);
router.get("/drivers", getDriversByName);
router.get("/teams", getTeams);
router.post("/drivers", postDriver);

module.exports = router;
