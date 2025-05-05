import React, { useState } from 'react'
import useTheme from '../hooks/useTheme'
import { Sun, Moon, CircleEllipsis } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'



const Home = () =>  {
    const { darkMode, toggleTheme } = useTheme()
    const [showInfo, setShowInfo] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    
    const toggleInfo = () => {
      if (showInfo) {
        setIsClosing(true)
        setTimeout (() => {
          setShowInfo(false)
          setIsClosing(false)
        }, 300) 
      } else {
        setShowInfo(true)
      }
    }
  
    return (
      <div className={styles['container']}>
        <header className={styles.top}>
          <a className={styles.info} onClick={toggleInfo} > 
            <div className={styles['info-circle']} >
              <CircleEllipsis size={35} /> 
              <span>About VisuAry</span>
            </div>
          </a>
          {showInfo && (
            <div className={`infoPanel ${isClosing ? 'slideOut' : 'slideIn'}`}>
              <p>Una manera ilimitada de guardar tus recuerdos</p>
              <br></br>
              <p>Crea y edita tus páginas de diario</p>
              <br></br>
              <p>Añade imágenes y pegatinas personalizadas para decorar las páginas</p>
            </div>
          )}
          <button className={styles['light-dark']} onClick={toggleTheme}>
            <div className={styles['circle']}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>
          </button>
        </header>
        <h3 className='descrip animate'>Your first online VisualDiary with </h3>
        <h1 className='pageTitle animate'>VisuAry</h1>
        <div className='buttons'>
          <Link className='login' to='/login'>Login In</Link>
          <Link className='signup' to='/signup'>Sign Up</Link>
        </div>
      </div>
    )
  }
  
  export default Home