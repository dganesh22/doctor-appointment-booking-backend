const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    service: {
        type: Object,
        required: true
    },
    app_date: {
        type: Date,
        default: new Date().toLocaleString()
    },
    app_status: {
        type: String,
        default: 'pending',
        enum: ["pending","booked", "cancelled"]
    },
    confirm: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "appointments",
    timestamps: true
})

module.exports = mongoose.model("Appointment", appointmentSchema)