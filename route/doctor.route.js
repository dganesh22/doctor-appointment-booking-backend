const doctorRoute = require('express').Router()
const { getDoctors, getSingle, addDoctor, updateDoctor, deleteDoctor, getAppointments } = require('../controller/doctor.controller')
// validate login authentication
const auth = require('../middleware/auth.middleware')

// validate admin role
const adminAuth = require('../middleware/admin.role')


// --- read all doctors info - get
doctorRoute.get(`/all`, auth, getDoctors)


doctorRoute.get(`/appointments`, auth, getAppointments)


// --- read single doctor info --- get
doctorRoute.get(`/single/:id`,auth, getSingle)


// --- add new doctor info -- post
doctorRoute.post(`/add`,auth,adminAuth, addDoctor)

// --- update doctor info -- patch
doctorRoute.patch(`/update/:id`,auth, updateDoctor)

// --- delete doctor info --- delete
doctorRoute.delete(`/delete/:id`,auth, adminAuth, deleteDoctor)

module.exports = doctorRoute