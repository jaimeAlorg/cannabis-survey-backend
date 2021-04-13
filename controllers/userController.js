const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ msg: "Missing fields" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(400).json({ msg: "Email/User does not exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(400).json({ msg: "Incorrect password" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, "test", {
            expiresIn: "1h",
        });

        res.status(200).json({
            token,
            user: user,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { loginUser };
