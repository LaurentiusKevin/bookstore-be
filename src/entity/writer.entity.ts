import { DataTypes, Model, NonAttribute, Optional } from "sequelize";
import sequelize from "./sequelize";

type WriterAttributes = {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type WriterCreationAttribute = Optional<WriterAttributes, "id">;

class WriterEntity extends Model<WriterAttributes, WriterCreationAttribute> {
  declare id: number;
  declare name: string;
  // declare books?: NonAttribute<BookAttributes[]>;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

WriterEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "writers",
    timestamps: true,
  }
);

// WriterEntity.hasMany(BookEntity, { as: "books", foreignKey: "writer_id" });

export default WriterEntity;
