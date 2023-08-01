const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      mobile: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        default: "user",
        enum: ["user", "doctor", "admin"]
      },
      image: {
        type: Object,
        default: {
            url: "https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
        }
      },
      address: {
        type: Object,
        default: {}
      },
      isActive: {
        type: Boolean,
        default: true
      }
},{
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)