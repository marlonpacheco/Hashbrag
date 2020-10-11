// const { TEXT } = require("sequelize/types");

module.exports = function (sequelize, DataTypes) {
    const Emojis = sequelize.define("Emojis", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        icon: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    return Emojis;
};