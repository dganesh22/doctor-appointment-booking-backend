const { StatusCodes } = require('http-status-codes')

// All registered users
const allRegUsers = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "all reg users"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}


// All registered doctors
const allRegDoctors = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "all reg doctors"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// All appointments
const allAppointments = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "all appointments"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// managing roles
const changeRole = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "change role"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { allRegUsers, allRegDoctors, allAppointments, changeRole }