import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index.route.js";
import connect from "./configs/mongoose.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
connect();
router(app);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
