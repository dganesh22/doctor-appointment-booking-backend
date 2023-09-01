const  { StatusCodes }  = require('http-status-codes')
const  Service = require('../model/service.model')

// get all service
const getServices = async (req,res) => {
    try {
        const data = await Service.find({});

        res.status(StatusCodes.OK).json({ length: data.length, services: data })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// get single service
const getSingleService = async (req,res) => {
    try {
        let id = req.params.id
            let extService = await Service.findById({ _id: id })
                if(!extService) 
                    return res.status(StatusCodes.NOT_FOUND).json({ msg: `Service id not found`})

        res.status(StatusCodes.OK).json({ service: extService })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// add service
const addService = async (req,res) => {
    try {
        const { name, desc, price, category, gender,doc_id } = req.body

        const newData = await Service.create({
            name,
            desc,
            price,
            category,
            gender,
            doc_id
        })
        
        res.status(StatusCodes.OK).json({ msg: "New service added successfully", service: newData })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// update service
const updateService = async (req,res) => {
    try {
        let id = req.params.id 

        let extData = await Service.findById({ _id: id })
            if(!extData)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "requested service id not found"})

            await Service.findByIdAndUpdate({ _id: id }, req.body)

        res.status(StatusCodes.OK).json({ msg: "service updated succesfully" })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// delete service
const deleteService = async (req,res) => {
    try {
        const id = req.params.id 

            let extSer = await Service.findById({ _id: id })
                if(!extSer) 
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "requested service id not found"})

            await Service.findByIdAndDelete({ _id: id })

        res.status(StatusCodes.OK).json({ msg: "service deleted successfully"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { getServices, getSingleService, addService, updateService, deleteService }