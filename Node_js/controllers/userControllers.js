const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Add a lock duration in milliseconds
const LOCK_DURATION = 2 * 60 * 1000; // 2 minutes

const createUser = async (req, res) => {
    console.log(req.body); // body includes JSON data

    const { firstName, lastName, email, password, party, age, address, citizenNo } = req.body;

    if (!firstName || !lastName || !email || !password || !party || !age || !address || !citizenNo) {
        return res.status(400).json({
            success: false,
            message: "Please enter all fields"
        });
    }

    try {
        const existingUser = await Users.findOne({ email: email });
        if (existingUser) {
            return res.json({
                success: false,
                message: "User Already Exists"
            });
        }

        const generateSalt = await bcrypt.genSalt(12);
        const encryptedPass = await bcrypt.hash(password, generateSalt);

        const newUser = new Users({
            firstName: firstName,
            lastName: lastName,
            email: email,
            party: party,
            address: address,
            age: age,
            citizenNo: citizenNo,
            password: encryptedPass,
            loginAttempts: 0, // Initialize loginAttempts
            isLocked: false, // Initialize account lock status
            lockUntil: null, // Initialize lockUntil timestamp
        });

        console.log(newUser);
        await newUser.save();

        res.status(200).json({
            success: true,
            message: "User created successfully"
        });

    } catch (error) {
        res.status(500).json("Server Error");
    }
};

const loginUser = async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Please enter all fields"
        });
    }

    try {
        const user = await Users.findOne({ email: email });

        if (!user) {
            return res.json({
                success: false,
                message: "User does not exist"
            });
        }

        // Check if the account is locked
        if (user.isLocked) {
            const now = Date.now();
            if (now < user.lockUntil) {
                return res.json({
                    success: false,
                    message: `Account is locked. Please try again after ${(user.lockUntil - now) / 1000} seconds.`
                });
            } else {
                // Unlock the account after the lock duration has passed
                user.isLocked = false;
                user.loginAttempts = 0;
                user.lockUntil = null;
                await user.save();
            }
        }

        const passwordToCompare = user.password;
        const isMatch = await bcrypt.compare(password, passwordToCompare);

        if (!isMatch) {
            user.loginAttempts += 1;
            if (user.loginAttempts >= 3) {
                user.isLocked = true;
                user.lockUntil = Date.now() + LOCK_DURATION;
                await user.save();
                return res.json({
                    success: false,
                    message: "Account locked due to multiple failed attempts. Please try again after 2 minutes."
                });
            } else {
                await user.save();
                return res.json({
                    success: false,
                    message: `Password does not match. You have ${3 - user.loginAttempts} attempt(2) remaining.`
                });
            }
        }

    //     // Reset login attempts on successful login
    //     user.loginAttempts = 0;
    //     user.isLocked = false;
    //     user.lockUntil = null;
    //     await user.save();

    //     const token = jwt.sign(
    //         { id: user._id, isAdmin: user.isAdmin },
    //         process.env.JWT_TOKEN_SECRET
    //     );

    //     res.status(200).json({
    //         success: true,
    //         token: token,
    //         userData: user,
    //         message: "User logged in successfully."
    //     });

    // } catch (error) {
    //     console.log(error);
    //     res.json(error);
    // }
};

module.exports = {
    createUser,
    loginUser
};
