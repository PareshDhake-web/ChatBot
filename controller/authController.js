const errorHandler = require("../middleware/errorMiddleware.js");
const userModel = require("../models/userModel.js");
const errorResponse = require("../utils/errorResponse.js");

function sendToken(user, statusCode, res) {
    const token = user.getSignedToken(res);
    res.status(statusCode).json({
        success: true,
        token
    });
};


//Register
module.exports.registerController = async function (req, res, next) {
    try {
        const { email, username, password } = req.body;
        //existing user
        const existingEmail = await userModel.findOne({ email })
        if (existingEmail) {
            return next(new errorResponse("Email is already register", 500))
        }
        const user = await userModel.create({ username, email, password })
        sendToken(user, 201, res)
    } catch (err) {
        console.log(err)
        next();
    }
}


//LOGIN
module.exports.loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return next(new errorResponse("Please provide email or password"));
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return next(new errorResponse("Invalid Creditial", 401))
        }
        const isMatch = await user.matchPassword(password)
        if (!isMatch) {
            return next(new errorResponse("Invalid Creditial", 401))
        }

        sendToken(user, 200, res)

    } catch (err) {
        console.log(err);
        next(error);
    }
}

//LOGOUT
module.exports.logoutController = async (req, res) => {
    res.clearCookie("refreshToken")
    return res.status(200).json({
        success: true,
        message: "logout successfully",
    })
}