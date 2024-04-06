import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "./sequelize";
import { UserPurchaseAttributes } from "../interface/user_purchase.interface";

type UserPurchaseCreationAttributes = Optional<UserPurchaseAttributes, "id">;

class UserPurchaseEntity extends Model<
  UserPurchaseAttributes,
  UserPurchaseCreationAttributes
> {
  declare id: number;
  declare user_id: number;
  declare book_id: number;
  declare point_used: number;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

UserPurchaseEntity.init(
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
    book_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    point_used: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user_purchase",
    timestamps: true,
  }
);

export default UserPurchaseEntity;
