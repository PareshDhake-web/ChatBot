const express = require("express");
const app = express();  // rest object

// Libraries
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorMiddleware.js");

//routes path
const authRoutes = require("./routes/authRoute.js");


//dotenv
dotenv.config();
mongoose.set("strictQuery", false);
// mongoose connection
main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatBot", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


// middleware
app.use(cors());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));
app.use(errorHandler)

const PORT = process.env.PORT || 8080;

// API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoute.js"));

// listen server
app.listen(PORT, () => {
    console.log(`App server is running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white);
})