const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "Driver",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            apellido: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            descripcion: {
                type: DataTypes.STRING,
            },
            img: {
                type: DataTypes.DATE,
            },
            nacionalidad: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fechaNacimiento: {
                type: DataTypes.DATE,
            },
        },
        { timestamps: false }
    );
};

/*


ID (deben ser distintos a los que vienen de la API). *
Nombre. *
Apellido. *
Descripción. *
Imagen. *
Nacionalidad. *
Fecha de Nacimiento. *


*/
