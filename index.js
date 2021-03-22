const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const formRouter = require("./routes/formRoutes");

require("dotenv").config();

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(
    express.json({
        limit: "50mb",
    })
);
app.use(cors());

app.use("/form", formRouter);

const PORT = process.env.PORT || 8080;

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
