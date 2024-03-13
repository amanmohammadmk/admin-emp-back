
const mongoose = require('mongoose')


const adminLog = new mongoose.Schema({
    admin_name: {
        type: String,
        required: true,
        trim: true
    },
    admin_pass: {
        type: String,
        required: true,
        unique: true,
    }

})



const admin= new mongoose.model('admins',adminLog)


module.exports=admin