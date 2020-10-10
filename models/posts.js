// const { INTEGER } = require("sequelize/types");

module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emoji: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likes:{
            type: DataTypes.INTEGER,
        }
    });
    return Post;
};