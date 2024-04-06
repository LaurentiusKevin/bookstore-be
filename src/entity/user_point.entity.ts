import { DataTypes, Model, NonAttribute, Optional } from "sequelize";
import sequelize from "./sequelize";
import BookEntity from "./book.entity";
import { UserPointAttributes } from "../interface/user_point.interface";

type UserPointCreationAttributes = Optional<UserPointAttributes, "id">;

class UserPointsEntity extends Model<
  UserPointAttributes,
  UserPointCreationAttributes
> {
  declare id: number;
  declare user_id: number;
  declare point: number;
  declare notes: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

UserPointsEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    point: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user_points",
    timestamps: true,
  }
);

export default UserPointsEntity;
