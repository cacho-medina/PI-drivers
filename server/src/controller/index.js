const { Driver, Team } = require("../db");

const createDriver = async (
    id,
    number,
    name,
    surname,
    nationality,
    birthday,
    img,
    description,
    teamName
) => {
    const driver = await Driver.create({
        id,
        number,
        name,
        surname,
        nationality,
        birthday,
        img,
        description,
    });
    await driver.setTeam(teamName);
    return driver;
};

const createTeam = async (nombre) => {
    return await Team.create({ nombre });
};

const getDriverByIdDB = async (id) => {
    return await Driver.findByPk(id);
};

const getAllDrivers = async () => {
    return await Driver.findAll();
};

const cleanInfo = (info) => {
    return info.map((driver) => {
        return {
            id: driver.id,
            number: driver.number,
            name: `${driver.name.forename} ${driver.name.surname}`,
            code: driver.code,
            team: driver.teams,
            img: driver.image.url,
            nationality: driver.nationality,
            birthday: driver.dob,
            description: driver.description,
        };
    });
};

module.exports = {
    createDriver,
    createTeam,
    getDriverByIdDB,
    getAllDrivers,
    cleanInfo,
};
