import mongoose from "mongoose";

const connect = () => {
    mongoose
        .connect(process.env.MONGODB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("DB is connected");
        })
        .catch((err) => console.error(err));
};

export default connect;
