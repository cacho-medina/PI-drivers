const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "Team",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                default: DataTypes.UUIDV4,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { timestamps: false }
    );
};
