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
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            surname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
            },
            img: {
                type: DataTypes.BLOB,
            },
            nationality: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            birthday: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            number: {
                type: DataTypes.INTEGER,
            },
        },
        { timestamps: false }
    );
};
