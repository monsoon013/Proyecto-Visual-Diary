const jwt = require ('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginRouter = require ('express').Router()
const User = require ('../models/User')

loginRouter.post('/', async (request, response) => {
    console.log(request.body)
    const {username, password} = request.body
    
    try{
        const user = await User.findOne({username})

        const passwordCorrect = user === null
            ? false
            : await bcrypt.compare(password, user.passwordHash)

        if (!username || !password) {
            return response.status(400).json({ error: 'Missing username or password' });
        }    

        if (!(user && passwordCorrect)) {
            return response.status(401).json({
                error:'invalid username or password'
            })
        }

        const userForToken = {
            id: user.id,
            username: user.username
        }

        const token = jwt.sign(userForToken, process.env.SECRET, {
            expiresIn: '1h'
        })

        response.status(200).json({
            name:user.name,
            username: user.username,
            token
        })
    } catch (error) {
        console.error('error in login: ', error)
        response.status(500).json({
            error: 'Something went wrong during login'
        })
    }
    

    
})

module.exports = loginRouter