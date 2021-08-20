import categoryRoute from "./category.route.js";
import foodRoute from "./food.route.js";

const router = (app) => {
    app.get("/", (req, res) => {
        res.send("HELLO");
    });

    app.use("/categories", categoryRoute);
    app.use("/foods", foodRoute);
};

export default router;
