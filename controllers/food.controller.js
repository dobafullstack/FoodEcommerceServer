import Food from "../models/food.model.js";

class FoodController {
    static getAllFood = async (req, res) => {
        try {
            const foods = await Food.find();

            res.status(200).json(foods);
        } catch (err) {
            res.status(403).json({
                message: err.message,
            });
        }
    };

    static getFoodByCategoryId = async (req, res) => {
        const { categoryId } = req.params;
        try {
            const foods = await Food.find({category_id: categoryId});

            res.status(200).json(foods);
        } catch (err) {
            res.status(403).json({
                message: err.message,
            });
        }
    };

    static getFoodById = async (req, res) => {
        const { foodId } = req.params;
        try {
            const food = await Food.findOne({ _id: foodId });

            res.status(200).json(food);
        } catch (err) {
            res.status(403).json({
                message: err.message,
            });
        }
    };
}

export default FoodController;
