const  { StatusCodes }  = require('http-status-codes')


// get appointment
const getAppointments = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "all appointment"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

const getSingleAppointment = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "get single appointment"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// add appointment
const addAppointment = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "add appointment"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// update appointment
const updateAppointment = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "update Appointment"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// delete appointment
const deleteAppointment = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({ msg: "delete appointment"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { getAppointments, getSingleAppointment, addAppointment, updateAppointment, deleteAppointment }