const slotRoute = require('express').Router()
const { getSlots, getSingle,createSlot, updateSlot, deleteSlot } = require('../controller/slot.controller')

const auth = require('../middleware/auth.middleware')
const doctorAuth = require('../middleware/doctor.role')

// get -> all data -> read all
slotRoute.get(`/all`, auth,  getSlots)

// get single data -> read single
slotRoute.get(`/single/:id`, auth, getSingle)

// post -> create
slotRoute.post(`/create`, auth, doctorAuth, createSlot)

// put (all) , patch -> update
slotRoute.patch(`/update/:id`, auth, doctorAuth, updateSlot)

//  delete 
slotRoute.delete(`/delete/:id`, auth, doctorAuth, deleteSlot)

module.exports = slotRoute