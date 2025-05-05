import React, {useState} from 'react'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'
import styles from '../styles/signup.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
    const { darkMode, toggleTheme } = useTheme()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name:'',
        username:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData((prev) => ({ ...prev, [name]:value}))
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/signup', formData)
            console.log(response.date)
            navigate('/account-created')
        }catch (error){
            if(error.response) {
                console.log('SignUp error: ', error.response.data)
            } else {
                console.error('Network or server error:', error.message)
            }
        }
        
    }

return (
    <div className={styles['signUpContainer']}>
        <header>
            <button className={styles['light-dark']} onClick={toggleTheme}>
                <div className={styles.circle}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </div>
            </button>
        </header>
        <div className={styles.signUpBox}>
            <h2>Crea una cuenta</h2>
            <form onSubmit={handleSignup}>
                <h4 className={styles.name}>Nombre</h4>
                <input type='text' name='name' placeholder='Nombre' required value={formData.name} onChange={handleChange}/>
                <h4 className={styles.surname}>Usuario</h4>
                <input type='text' name='username' placeholder='Usuario' required value={formData.username} onChange={handleChange}/>
                <h4 className={styles.email_}>Correo electrónico</h4>
                <input type='email' name='email' placeholder='Correo electrónico' required value={formData.email} onChange={handleChange}/>
                <h4 className={styles.password}>Contraseña</h4>
                <input type='password' name='password' placeholder='Contraseña' required value={formData.password} onChange={handleChange} />
                <button type='submit'>Crear</button>
            </form>
        </div>
    </div>
    
)
}

export default Signup