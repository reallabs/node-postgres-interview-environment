"use strict";
import { Model } from "sequelize";
class User extends Model {}

export default (sequelize, DataTypes) => {
    User.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            // Do not do this in production
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User",
            paranoid: true,
            underscored: true,
        }
    );
    return User;
};
