const { allRegUsers, allRegDoctors, allAppointments, changeRole } = require('../controller/admin.controller')
const adminRoute = require('express').Router()

// validate login authentication
const auth = require('../middleware/auth.middleware')

// validate admin role
const adminAuth = require('../middleware/admin.role')

// --- get --- 
adminRoute.get(`/all/reg/users`, auth, adminAuth, allRegUsers)
adminRoute.get(`/all/reg/doctors`, auth, adminAuth, allRegDoctors)
adminRoute.get(`/all/appointments`, auth, adminAuth, allAppointments)

// ---- patch -- admin access --- 
adminRoute.patch(`/change/role`, auth, adminAuth, changeRole)

module.exports = adminRoute