// const { INTEGER } = require("sequelize/types");

module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        likes: {
            type: DataTypes.INTEGER,
        }
    });

    Post.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Post.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Post.belongsTo(models.Activity, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Post;
};