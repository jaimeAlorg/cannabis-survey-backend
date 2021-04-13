const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.lenght < 500;

        if (!token || !isCustomAuth) {
            return res
                .status(401)
                .json({ msg: "No authentication token, autherization denied" });
        }

        const verified = jwt.verify(token, "test");

        if (!verified) {
            return res.status(401).json({
                msg: "Token verification failed, autherization denied",
            });
        }

        req.userId = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
