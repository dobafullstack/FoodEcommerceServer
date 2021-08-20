import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    category_id: {
        type: String,
        ref: "Category",
        required: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
});

const Food = new mongoose.model("Food", foodSchema, "food");

export default Food;
