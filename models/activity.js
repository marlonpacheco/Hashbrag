// const { TEXT } = require("sequelize/types");

module.exports = function (sequelize, DataTypes) {
    const Activity = sequelize.define("Activity", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        emoji: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    Activity.associate = function(models) {
        // Associating Activity with Posts
        // When an Activity is deleted, also delete any associated Posts
        Activity.hasMany(models.Post, {
          onDelete: "cascade"
        });
      };
    
    return Activity;
};