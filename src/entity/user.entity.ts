import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "./sequelize";

type UserAttributes = {
  id?: number;
  username: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserCreationAttributes = Optional<UserAttributes, "id">;

class UserEntity extends Model<UserAttributes, UserCreationAttributes> {
  declare id: number;
  declare username: string;
  declare password: string;
  declare name: string;
}

UserEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true,
  }
);

export default UserEntity;
