"use strict";
import { Sequelize, DataTypes } from "sequelize";
import UserInit from "./User.js";
import PostInit from "./Post.js";

export const sequelize = new Sequelize(process.env.DATABASE_URL);
export const User = UserInit(sequelize, DataTypes);
export const Post = PostInit(sequelize, DataTypes);

User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

export const Follow = sequelize.define(
  "Follow",
  {
    followerId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    followeeId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Follow",
    paranoid: true,
    underscored: true,
  }
);

User.belongsToMany(User, {
  as: "Followers",
  through: "Follow",
  foreignKey: "followeeId",
});
User.belongsToMany(User, {
  as: "Followees",
  through: "Follow",
  foreignKey: "followerId",
});
