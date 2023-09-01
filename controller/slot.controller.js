const  { StatusCodes }  = require('http-status-codes')
const Slot = require('../model/slot.model')


// to read all
const getSlots = async (req,res) => {
    try {
         let slots = await Slot.find({})
        
        return res.status(StatusCodes.OK).json({ length: slots.length, slots })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// to read single
const getSingle = async (req,res) => {
    try {
        let id = req.params.id 
            let extSlot = await Slot.findById({ _id: id })
                if(!extSlot)
                    return res.status(StatusCodes.NOT_FOUND).json({ msg: "requested slot id not found"})

            
        return res.status(StatusCodes.OK).json({ slot: extSlot })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// to create
const createSlot = async (req,res) => {
    try {
        const { doc_id, slot_date, slot_status } = req.body

            let newSlot = await Slot.create({
                doc_id,
                slot_date,
                slot_status
            })
                
        return res.status(StatusCodes.OK).json({ msg: "New slot added successfully", newSlot })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// to update
const updateSlot = async (req,res) => {
    try {
        let id = req.params.id
            let extSlot = await Slot.findById({ _id: id })
                if(!extSlot)
                    return res.status(StatusCodes.NOT_FOUND).json({msg: "request slot id not found"})

                await Slot.findByIdAndUpdate({_id: id }, req.body)

        return res.status(StatusCodes.OK).json({ msg: `slot updated successfully`})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }

}

// to delete
const deleteSlot = async (req,res) => {
        try {
            let id = req.params.id
            let extSlot = await Slot.findById({ _id: id })
            if(!extSlot)
                return res.status(StatusCodes.NOT_FOUND).json({msg: "request slot id not found"})

            await Slot.findByIdAndDelete({ _id: id })

            return res.status(StatusCodes.OK).json({ msg: `slot deleted successfully`})
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
}

module.exports = { getSlots, getSingle, createSlot, updateSlot, deleteSlot}