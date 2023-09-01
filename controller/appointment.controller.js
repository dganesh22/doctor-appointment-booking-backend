const  { StatusCodes }  = require('http-status-codes')
const Appointment = require('../model/appointment.model')

// get appointment
const getAppointments = async (req,res) => {
    try {
        let appointments = await Appointment.find({})

        res.status(StatusCodes.OK).json({ length: appointments.length, appointments })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

const getSingleAppointment = async (req,res) => {
    try {
        let id = req.params.id
        let appointment = await Appointment.findById({ _id: id })
            if(!appointment)
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: `Appointment id not found`})

        res.status(StatusCodes.OK).json({ appointment })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// add appointment
const addAppointment = async (req,res) => {
    try {   
            let extUser = await Appointment.findOne({ user_id: req.body.user_id })

                if(extUser) {
                    if(extUser.service._id === req.body.service._id) {
                         res.status(StatusCodes.BAD_REQUEST).json({ msg: "Sorry, you have already booked this service."});
                    } else {
                        await Appointment.create(req.body)
                        res.status(StatusCodes.OK).json({ msg: "new appointment added successfully"})
                    }  
                }  else {
                     await Appointment.create(req.body)
                    res.status(StatusCodes.OK).json({ msg: "new appointment added successfully"})
                }

           
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// update appointment
const updateAppointment = async (req,res) => {
    try {
        let { app_date, app_status, confirm, isActive } = req.body
        let id = req.params.id

        await Appointment.findByIdAndUpdate({ _id: id }, { app_date, app_status, confirm, isActive })

        res.status(StatusCodes.OK).json({ msg: `Appointment details updated` })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// delete appointment
const deleteAppointment = async (req,res) => {
    try {
            let id = req.params.id 

            let extId = await Appointment.findById({ _id: id })
                if(!extId)
                    return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested id not found`})

                await Appointment.findByIdAndDelete({ _id: id })

        res.status(StatusCodes.OK).json({ msg: "Appointment deleted successfully"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { getAppointments, getSingleAppointment, addAppointment, updateAppointment, deleteAppointment }