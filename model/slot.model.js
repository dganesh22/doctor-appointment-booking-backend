const mongoose = require('mongoose')

const slotSchema = new mongoose.Schema({
        doc_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        slot_date: {
            type: Date,
            required: true
        },
        slot_status: {
            type: Boolean,
            default: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
},{
    collection: "slots",
    timestamps: true
})

module.exports = mongoose.model("Slot", slotSchema)