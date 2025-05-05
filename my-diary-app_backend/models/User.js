const { Schema, model } = require('mongoose')

const userSchema = new Schema ({
    name: {type:String, required:true},
    username: {type: String, unique:true, require:true},
    email: {type:String, required:true},
    passwordHash: {type:String, required:true},

})

userSchema.set('toJson', {
    trnasform : (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject_v

        delete returnedObject.passwordHash
    }
})

const User = model('User', userSchema)

module.exports = User