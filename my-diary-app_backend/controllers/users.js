const bcrypt = require('bcrypt')
const usersRouter = require ('express').Router()
const User = require('../models/User')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})

    response.json(users)
})

usersRouter.post('/', async (request, response) => {
    try{
        const {body} = request 
        const {username, name, password} = body

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

module.exports = usersRouter