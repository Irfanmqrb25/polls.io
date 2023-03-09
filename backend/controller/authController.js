import jwt from "jsonwebtoken";
import User from "../models/userModel.js"

const createToken = (user) => {
    const data = {
        _id: user._id,
        name: user.name,
        email: user.email
    }
    return jwt.sign(data, process.env.SECRET, { expiresIn: '3d' })
}

export const signup = async (req, res) => {
    const { name, email, password, country } = req.body
    try {
        const user = await User.signup(name, email, password, country)
        res.status(201).json({
            msg: "User created successfully",
            name,
            email,
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user);
        res.status(200).json({ message: "Login Successfully", token })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}
