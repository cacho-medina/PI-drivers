const multer = require("multer");

function subirImg() {
    const storage = multer.diskStorage({
        destination: "../uploads",
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    });

    const upload = multer({ storage }).single("img");
    return upload;
}

module.exports = subirImg;
