import { DataTypes, Model, NonAttribute, Optional } from "sequelize";
import sequelize from "./sequelize";
import { TagAttributes } from "../interface/tag.interface";
import BookEntity from "./book.entity";
import BookTagEntity from "./book_tag.entity";

type TagCreationAttributes = Optional<TagAttributes, "id">;

class TagEntity extends Model<TagAttributes, TagCreationAttributes> {
  declare id: number;
  declare title: string;
  declare bookTags?: NonAttribute<BookEntity[]>;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

TagEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tags",
    timestamps: true,
  }
);

// TagEntity.belongsToMany(BookEntity, { through: BookTagEntity });

export default TagEntity;
