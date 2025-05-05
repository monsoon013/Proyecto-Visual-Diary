const jwt = require ('jsonwebtoken')
const bcrypt = require('bcryptjs')
const signupRouter = require ('express').Router()
const User = require ('../models/User')

signupRouter.post('/', async (request, response) => {
    try{
        const {body} = request 
        const {username, name, email, password} = body

        const existingUser = await User.findOne({username})
        if(existingUser) {
            return response.status(400).json({
                error:'Este username ya está escogido'
            })
        }
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const user = new User ({
            username,
            name,
            email,
            passwordHash,
        })

        const savedUser = await user.save()
        response.status(201).json(savedUser)
    } catch (error) {
        response.status(400).json({
            error:error.message
        })
    }
})

module.exports = signupRouter