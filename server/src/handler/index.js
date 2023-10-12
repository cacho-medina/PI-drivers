const axios = require("axios");

const getDriversHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const response = await axios.get("http://localhost:5000/drivers");
        const data = response.data;

        if (name) {
            const drivers = data.filter(
                (driver) => driver.name.forename === name
            );
            res.status(200).json(drivers);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getDriverHandler = async (req, res) => {
    const { idDriver } = req.params;
    try {
        const response = await axios.get(
            `http://localhost:5000/drivers/${idDriver}`
        );
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getTeamsHandler = async (req, res) => {
    const results = [];
    try {
        const response = await axios.get(`http://localhost:5000/drivers`);
        const data = response.data;

        data.forEach((driver) => {
            results.push(driver.teams);
        });
        const teams = [...new Set(results)]; //obtiene los teams sin repetir
        res.status(200).json(teams);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const postDriverHandler = async (req, res) => {
    res.status(200).json(req.body);
};

module.exports = {
    getDriversHandler,
    getDriverHandler,
    getTeamsHandler,
    postDriverHandler,
};
