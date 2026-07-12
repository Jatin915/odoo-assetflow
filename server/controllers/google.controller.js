const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { verifyGoogleToken } = require("../config/firebaseAdmin");

const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

const validateGoogleSignupBody = (body = {}) => {
    const errors = [];
    if (!isNonEmptyString(body.idToken)) {
        errors.push("Google idToken is required.");
    }
    return {
        valid: errors.length === 0,
        errors,
    };
};

const error = (msg, code) => {
    const err = new Error(msg);
    err.statusCode = code;
    throw err;
};

const buildToken = (userId) =>
    process.env.JWT_SECRET
        ? jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" })
        : null;

const cleanUser = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    photoUrl: user.photoUrl || null,
    provider: user.provider,
    token: buildToken(user._id),
});

async function googleAuth(idToken) {
    const { email, name, picture, uid } = await verifyGoogleToken(idToken);
    if (!email) {
        error("Google account has no email.", 400);
    }

    const normalizedEmail = email.toLowerCase();
    let user = await User.findOne({ email: normalizedEmail });

    if (!user) {
        user = await User.create({
            name: name || email.split("@")[0],
            email: normalizedEmail,
            photoUrl: picture || "",
            googleId: uid,
            provider: "google",
        });
    } else {
        user.name = name || user.name;
        user.photoUrl = picture || user.photoUrl;
        user.googleId = uid || user.googleId;
        user.provider = "google";
        await user.save();
    }

    return cleanUser(user);
}

const sendError = (res, error) => {
    return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Internal Server Error",
    });
};

const validateRequest = (res, validation) => {
    if (validation.valid) return true;
    res.status(400).json({
        success: false,
        message: validation.errors[0],
        errors: validation.errors,
    });
    return false;
};

exports.googleSignup = async (req, res) => {
    try {
        if (!validateRequest(res, validateGoogleSignupBody(req.body))) return;
        const user = await googleAuth(req.body.idToken);
        return res.status(201).json({
            success: true,
            message: "Google signup successful.",
            user,
        });
    } catch (error) {
        return sendError(res, error);
    }
};

exports.googleLogin = async (req, res) => {
    try {
        if (!validateRequest(res, validateGoogleSignupBody(req.body))) return;
        const user = await googleAuth(req.body.idToken);
        return res.status(200).json({
            success: true,
            message: "Google login successful.",
            user,
        });
    } catch (error) {
        return sendError(res, error);
    }
};
