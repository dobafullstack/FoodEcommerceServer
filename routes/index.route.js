import categoryRoute from "./category.route.js";
import foodRoute from "./food.route.js";
import authRoute from "./auth.route.js";

const router = (app) => {
    app.get("/", (req, res) => {
        const obj = {
            "get_all_categories": "/categories",
            "get_all_foods": "/foods",
            "get_foods_by_category": "/foods/:categoryID",
            "get_a_food": "/foods/detail/:foodID",
        }

        res.status(200).json(obj);
    });

    app.use("/categories", categoryRoute);
    app.use("/foods", foodRoute);
    app.use("/auth", authRoute);
};

export default router;
