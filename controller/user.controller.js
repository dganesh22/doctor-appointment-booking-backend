const  { StatusCodes }  = require('http-status-codes')
const User = require('../model/user.model')

// get all user data
const readAllUsers = async (req,res) => {
    try {
            let data = await User.find({})
            let filteredData = data.filter((item) => item.role !== "superadmin")

        res.status(StatusCodes.OK).json({ length: filteredData.length, users: filteredData})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// get single user data
const getSingleUser = async (req,res) => {
    try {
        let id = req.params.id

        let data = await User.findById({ _id: id })
            if(!data)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested user id not found`})

        res.status(StatusCodes.OK).json({ user: data })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { readAllUsers, getSingleUser }