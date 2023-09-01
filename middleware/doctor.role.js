const { StatusCodes } = require('http-status-codes')
const User = require('../model/user.model')

const doctorAuth = async (req,res,next) => {
    try {
        const id = req.userId

        const extUser = await User.findById({ _id: id }).select('-password')

            if(extUser.role !== "doctor") 
                return res.status(StatusCodes.UNAUTHORIZED).json({ msg: `Access only for doctors`})

            next()
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = doctorAuth