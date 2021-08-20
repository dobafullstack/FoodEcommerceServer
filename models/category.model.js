import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Category = new mongoose.model("Category", categorySchema, "category");

export default Category;