const { Router } = require("express");
const {
    getDriversHandler,
    getDriverHandler,
    getTeamsHandler,
    postDriverHandler,
} = require("../handler");

const subirImg = require("../middleware/multer/multer");

const router = Router();

router.get("/drivers", getDriversHandler);
router.get("/drivers/:idDriver", getDriverHandler);
router.get("/drivers/", getDriversHandler);
router.get("/teams", getTeamsHandler);
router.post("/drivers", subirImg(), postDriverHandler);
/* router.post("/upload", subirImg(), (req, res) => {
    console.log(req.file);
    res.send("ok");
}); */

module.exports = router;
