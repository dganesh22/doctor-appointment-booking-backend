const serviceRoute = require('express').Router()
const { getServices, getSingleService, addService, updateService, deleteService } = require('../controller/service.controller')

// validate login authentication
const auth = require('../middleware/auth.middleware')
const doctorAuth = require('../middleware/doctor.role')

// all services -- get
serviceRoute.get(`/all`, auth, getServices)

// single service -- get 
serviceRoute.get(`/single/:id`, auth, getSingleService)

// add new service -- post
serviceRoute.post(`/add`, auth, doctorAuth, addService)

// update service --- patch
serviceRoute.patch(`/update/:id`, auth, doctorAuth, updateService)

// delete service --- delete
serviceRoute.delete(`/delete/:id`, auth, doctorAuth, deleteService)

module.exports = serviceRoute