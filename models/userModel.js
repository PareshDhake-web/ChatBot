const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const cookie = require("cookie");

// model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "atleast 6 pasword length"],
    },
    customerId: {
        type: String,
        default: "",
    },
    subscription: {
        type: String,
        default: "",
    }
});

// match password
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// hashed password
userSchema.pre("save", async function (next) {
    //update
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


// SIGN TOKEN

// userSchema.methods.getSignedToken = function (res) {
//     const accessToken = JWT.sign({ id: this._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIREIN })
//     const refreshToken = JWT.sign({ id: this._id }, process.env.JWT_REFRESH_TOKEN, { expiresIn: process.env.JWT_REFRESH_EXPIREIN })
//     res.cookie("refreshToken", `${refreshToken}`, {
//         maxAge: 86400 * 7000,
//         httpOnly: true
//     });
//     return accessToken;
// }

//SIGN TOKEN
userSchema.methods.getSignedToken = function (res) {
    const accessToken = JWT.sign(
        { id: this._id },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: process.env.JWT_ACCESS_EXPIREIN } // minute
    );

    const refreshToken = JWT.sign(
        { id: this._id },
        process.env.JWT_REFRESH_TOKEN,
        { expiresIn: process.env.JWT_REFRESH_EXPIREIN } // days
    );

    res.cookie("refreshToken", refreshToken, {
        maxAge: 86400 * 7000, // adjust in second
        httpOnly: true,
    });

    return accessToken;
};


const User = mongoose.model("User", userSchema);
module.exports = User;