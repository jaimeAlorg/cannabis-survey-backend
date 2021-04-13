const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const formRouter = require("./routes/formRoutes");
const userRouter = require("./routes/userRoutes");

require("dotenv").config();

const App = express();

App.use(
    express.urlencoded({
        extended: true,
    })
);
App.use(
    express.json({
        limit: "50mb",
    })
);
App.use(cors());

var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};

App.use(allowCrossDomain);

App.use("/form", formRouter);
App.use("/user", userRouter);

const PORT = process.env.PORT || 8080;

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        App.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
