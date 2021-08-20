import Category from "../models/category.model.js";

class CategoryController {
    static getAllCategory = async (req, res) => {
        try {
            const categories = await Category.find();

            res.status(200).json(categories);
        } catch (err) {
            res.status(403).json({
                message: err.message,
            });
        }
    };
}

export default CategoryController;
