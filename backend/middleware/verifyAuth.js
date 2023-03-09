import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const verifyAuth = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' })
    }

    const token = authorization.split(' ')[1]

    try {
        const { name } = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ name }).select('name')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Request is not authorized' })
    }
}

export default verifyAuth