import React from 'react'
import {style} from '../styles/HeaderStyle'


const Header = () => {

  return (
    <div className={style.container}> 
        <p className={style.logo}>Gourav kumar</p>
        <ul className={style.linksContainer}>
            <li className={style.link}>About</li>
            <li className={style.link}>Work</li>
            <li className={style.link}>Projects</li>
            <li className={style.link}>Contact</li>
        </ul>
    </div>
  )
}

export default Header