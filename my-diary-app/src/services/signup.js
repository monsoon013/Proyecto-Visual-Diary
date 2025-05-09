import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/users'

const signup = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { signup }