import { DataTypes, Model, NonAttribute, Optional } from "sequelize";
import sequelize from "./sequelize";
import TagEntity from "./tag.entity";
import WriterEntity from "./writer.entity";
import { BookAttributes } from "../interface/book.interface";
import { TagAttributes } from "../interface/tag.interface";
import { WriterAttributes } from "../interface/writer.interface";
import BookTagEntity from "./book_tag.entity";

type BookCreationAttribute = Optional<BookAttributes, "id">;

class BookEntity extends Model<BookAttributes, BookCreationAttribute> {
  declare id: number;
  declare title: string;
  declare writer_id: number;
  declare cover_image: string;
  declare point: number;
  declare createdBy: number;
  declare bookTags?: NonAttribute<TagAttributes[]>;
  declare writer?: NonAttribute<WriterAttributes>;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

BookEntity.init(
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
    writer_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    cover_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    point: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "books",
    timestamps: true,
  }
);

// BookEntity.belongsToMany(TagEntity, { through: BookTagEntity });
BookEntity.belongsTo(WriterEntity, { foreignKey: "writer_id" });

export default BookEntity;
