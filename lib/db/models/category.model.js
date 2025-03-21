import mongoose, { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
    CategoryName: { type: String, required: true, unique: true },
})

const Category = models.Category || model("Category", CategorySchema);

export default Category;