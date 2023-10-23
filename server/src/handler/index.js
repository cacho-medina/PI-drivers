const axios = require("axios");

const getDriversHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const response = await axios.get("http://localhost:5000/drivers");
        const data = response.data;
        //si hay queries en el path devuelve el driver encontrado por name.forename
        if (name) {
            const drivers = data.filter(
                (driver) => driver.name.forename === name
            );
            if (!drivers.length) throw new Error("Conductor no encontrado");
            res.status(200).json(drivers);
        } else {
            //si no hay queries responde con todos los drivers
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
        //crea driver con la informacion necesaria
        const driver = {
            id: data.id,
            name: `${data.name.forename} ${data.name.surname}`,
            code: data.code,
            team: data.teams.split(","),
            img: data.image.url,
            nationality: data.nationality,
            birthday: data.dob,
            description: data.description,
        };
        res.status(200).json(driver);
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
            //se obtiene string de teams
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
