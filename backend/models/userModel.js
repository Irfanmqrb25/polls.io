import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
})

userSchema.statics.signup = async function (name, email, password, country) {
    if (!name || !email || !password || !country) {
        throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Invalid email");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Your password not strong enough");
    }

    const existEmail = await this.findOne({ email });

    if (existEmail) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({ name, email, password: hashedPassword, country });
    return user;
}

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Incorrect email")
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw Error("Incorrect password")
    }

    return user;
}

export default mongoose.model('User', userSchema)