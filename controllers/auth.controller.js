import User from "../models/user.model.js";
import md5 from "md5";
import jwt from "jsonwebtoken";

class UserController {
    static login = async (req, res) => {
        const { username, password } = req.body;
        console.log(username, password);
        try {
            const user = await User.findOne({ username: username });
            if (!user) {
                res.status(401).json({ message: "Account does not exist!" });
            } else {
                if (`${md5(password)}` !== user.password) {
                    res.status(401).json({ message: "Wrong password" });
                } else {
                    const token = jwt.sign(
                        {
                            username: user.username,
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            resetLink: user.resetLink,
                            _id: user._id,
                            address: user.address,
                            image: user.image,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "1 day",
                        }
                    );

                    res.status(200).json({
                        accessToken: token,
                    });
                }
            }
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: error.message });
        }
    };

    static register = async (req, res) => {
        try {
            req.body.password = md5(req.body.password);

            await User.create(req.body);

            res.status(200).json({ message: "Register successfully" });
        } catch (error) {
            console.log(error);
            if (error.code === 11000) {
                res.status(401).json({ message: "Account already exists" });
                return;
            }
            res.status(401).json({ message: error.message });
        }
    };

    static verifyToken = (req, res) => {
        const { token } = req.body;
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);

            res.status(200).json(decode);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
}

export default UserController;
