const axios = require("axios");

const getDrivers = async (req, res) => {
    const result = await axios.get("http://localhost:5000/drivers");
    const data = result.data;
    res.json(data);
};

module.exports = {
    getDrivers,
};
