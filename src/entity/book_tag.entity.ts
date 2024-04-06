import { DataTypes, Model, NonAttribute, Optional } from "sequelize";
import sequelize from "./sequelize";
import { BookTagAttributes } from "../interface/book_tag.interface";
import BookEntity from "./book.entity";
import TagEntity from "./tag.entity";

type BookTagCreationAttributes = Optional<BookTagAttributes, "id">;

class BookTagEntity extends Model<
  BookTagAttributes,
  BookTagCreationAttributes
> {
  declare id: number;
  declare title: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

BookTagEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "book_tags",
    timestamps: true,
  }
);

BookEntity.belongsToMany(TagEntity, {
  through: BookTagEntity,
  foreignKey: "book_id",
  otherKey: "tag_id",
});

TagEntity.belongsToMany(BookEntity, {
  through: BookTagEntity,
  foreignKey: "tag_id",
  otherKey: "book_id",
});

export default BookTagEntity;
