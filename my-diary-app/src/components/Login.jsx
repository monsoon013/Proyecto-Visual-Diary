import React, {useState} from 'react'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'
import styles from '../styles/login.module.css'
import { useNavigate, Link } from 'react-router-dom'
import loginService from '../services/login'



const Login = () => {
    const { darkMode, toggleTheme } = useTheme()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
            username,
            password
        })
        navigate('/welcome')

        setUser(user)
        setUsername('')
        setPassword('')
        console.log(user)
        console.log('SUBMIT')

        }catch (error){
            console.log(error)
        }
        
        
    }
    
    const renderLoginForm = () => {
        return (
            <div className={styles.loginBox}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <h4 className={styles.email}>Usuario</h4>
                <input type='text' placeholder='username' required  value={username} name='username' onChange={(e) => setUsername(e.target.value)} />
                <h4 className={styles.psswrd}>Contraseña</h4>
                <input type='password' placeholder='contraseña' required value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Entrar</button>
                <h6 className={styles.forgotPass} >¿Has olvidado la contraseña?</h6>
                <Link className={styles.createAcc} to='/signup'>¿No tienes cuenta?¡Crea una aquí!</Link>
        </form>
        </div>
        )
    }
    
    return(            
        <div className={styles['loginContainer']}>
            <header>
                <button className={styles['light-dark']} onClick={toggleTheme}>
                    <div className={styles.circle}>
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </div>
                </button>
            </header>
            {user === null && renderLoginForm()}
        </div>
    )
}

export default Login