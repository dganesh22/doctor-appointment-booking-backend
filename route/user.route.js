const userRoute = require('express').Router()
const { readAllUsers, getSingleUser } = require('../controller/user.controller')

const auth = require('../middleware/auth.middleware')
const adminAuth = require('../middleware/admin.role')


// read all users 
userRoute.get(`/all`, auth, adminAuth, readAllUsers)


// read single user
userRoute.get(`/single/:id`, auth, getSingleUser)


module.exports = userRoute