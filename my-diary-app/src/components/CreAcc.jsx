import React from 'react'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'
import styles from '../styles/creAcc.module.css'
import { Link } from 'react-router-dom'

const CreAcc = () => {
    const {darkMode, toggleTheme} = useTheme()

    return (
        <div className={styles['createdContainer']}>
            <header>
                <button className={styles['light-dark']} onClick={toggleTheme}>
                    <div className={styles.circle}>
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </div>
                </button>
            </header>
            <div className={styles['createdBox']}>
                <h2>Cuenta creada con éxito</h2>
                <br></br>
                <p>Revisa tu correo para verificar la cuenta</p>
                <p>Aunque ya puedes iniciar sesión</p>
                <Link to='/login' className={styles['loginLink']}>Iniciar sesión</Link>
            </div>
        </div>
    )
}

export default CreAcc