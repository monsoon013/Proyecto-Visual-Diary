import React from 'react' 
import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme'
import styles from '../styles/welcome.module.css'

const Bienvenido = () => {
    const { darkMode, toggleTheme } = useTheme()
    
    return (
        <div className={styles['welcomeContainer']}>
            <header>
                <button className={styles['light-dark']} onClick={toggleTheme}>
                    <div className={styles.circle}>
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </div>
                </button>
            </header>
            <h1 className={styles['pageTitle']}> Bienvenido!</h1>
            <br></br>
            <h3 className={styles['descrip']}>Te echamos de menos</h3>

        </div>
    )
}

export default Bienvenido