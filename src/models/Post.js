'use strict';
import { Model } from 'sequelize';

class Post extends Model {}

export default (sequelize, DataTypes) => {
    Post.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            body: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Post',
            paranoid: true,
            underscored: true,
        }
    );

  return Post;
};