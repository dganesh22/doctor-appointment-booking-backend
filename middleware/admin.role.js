const { StatusCodes } = require('http-status-codes')
const User = require('../model/user.model')

const adminAuth = async (req,res,next) => {
    try {
        const id = req.userId

        const extUser = await User.findById({ _id: id }).select('-password')

            if(extUser.role !== "superadmin") 
                return res.status(StatusCodes.UNAUTHORIZED).json({ msg: `Access denied for non admin users`})

            next()
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = adminAuth