const axios = require("axios");
const {
    createDriver,
    createTeam,
    getDriverByIdDB,
    getAllUsers,
    cleanInfo,
} = require("../controller/index");

const getDriversHandler = async (req, res) => {
    const { name } = req.query;
    try {
        //obtengo drivers de api
        const response = await axios.get("http://localhost:5000/drivers");
        const data = response.data;
        //limpia la info obtenida de la api
        const dataApi = cleanInfo(data);
        //drivers de BD
        const dataDB = await getAllUsers();
        //une todos los pilotos en un solo array
        const pilotos = [...dataApi, ...dataDB];

        //si hay queries en el path devuelve el driver encontrado por name.forename
        if (name) {
            const drivers = pilotos.filter((driver) =>
                driver.name.includes(name)
            );
            if (!drivers.length) {
                throw new Error("Conductor no encontrado");
            }
            res.status(200).json(drivers);
        } else {
            //si no hay queries responde con todos los drivers
            res.status(200).json(pilotos);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getDriverHandler = async (req, res) => {
    const { idDriver } = req.params;
    let driver;
    try {
        //verifica si el id no es un numero, lo que significa que viene de la BD
        if (isNaN(idDriver)) {
            driver = await getDriverByIdDB(idDriver);
            res.status(200).json(driver);
        } else {
            const response = await axios.get(
                `http://localhost:5000/drivers/${idDriver}`
            );
            const data = response.data;
            //guarda driver con la informacion necesaria
            driver = {
                id: data.id,
                number: data.number,
                name: `${data.name.forename} ${data.name.surname}`,
                code: data.code,
                team: data.teams.split(","),
                img: data.image.url,
                nationality: data.nationality,
                birthday: data.dob,
                description: data.description,
            };
            res.status(200).json(driver);
        }
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
        const escuderias = results.join(","); //combina las cadenas en una sola y se dividen por coma
        const aux = escuderias.split(",").map((name) => name.trim()); //se eliminan espacios en blanco
        const teams = [...new Set(aux)]; //obtiene array de teams sin repetir

        teams.map(async (team) => {
            const driverTeams = await createTeam(team); //creo una escuderia en BD con el nombre de cada team
        });

        res.status(200).json(teams);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const postDriverHandler = async (req, res) => {
    const {
        id,
        number,
        name,
        surname,
        nationality,
        birthday,
        img,
        description,
        teams,
    } = req.body;
    try {
        const driverInfo = await createDriver(
            id,
            number,
            name,
            surname,
            nationality,
            birthday,
            img,
            description,
            teams
        );

        res.status(200).json(driverInfo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getDriversHandler,
    getDriverHandler,
    getTeamsHandler,
    postDriverHandler,
};
