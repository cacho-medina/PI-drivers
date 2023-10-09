const axios = require("axios");
const url = "http://localhost:5000/drivers";

const getDrivers = async (req, res) => {
    try {
        const result = await axios(url);
        const data = result.data;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDrivers,
};
