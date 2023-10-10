const axios = require("axios");

const getDrivers = async (req, res) => {
    try {
        const result = await axios.get("http://localhost:5000/drivers");
        const data = result.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getDriver = async (req, res) => {
    try {
        const { idDriver } = req.params;
        const result = await axios(
            `http://localhost:5000/drivers/${parseInt(idDriver)}`
        );
        const data = result.data;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getDriversByName = async (req, res) => {
    const result = await axios.get("http://localhost:5000/drivers");
    const data = result.data;
    res.json(data);
};
const getTeams = async (req, res) => {
    const result = await axios.get("http://localhost:5000/drivers");
    const data = result.data;
    res.json(data);
};
const postDriver = async (req, res) => {
    const result = await axios.get("http://localhost:5000/drivers");
    const data = result.data;
    res.json(data);
};

module.exports = {
    getDrivers,
    getDriver,
    getDriversByName,
    getTeams,
    postDriver,
};
