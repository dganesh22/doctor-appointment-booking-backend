const userRoute = require('express').Router()
const { readAllUsers, getSingleUser } = require('../controller/user.controller')

// read all users 
userRoute.get(`/all`, readAllUsers)


// read single user
userRoute.get(`/single/:id`, getSingleUser)


module.exports = userRoute