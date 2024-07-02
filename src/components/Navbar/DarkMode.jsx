import React from 'react'
import LightButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"
import { useEffect, useState } from 'react'

// const [themeMode, setThemeMode] = useState('light')

//   const darkTheme = () => {
//     setThemeMode('dark')
    
//   }

//   const lightTheme = () => {
//     setThemeMode('light')
//   }

//   useEffect(() => {
//     document.querySelector('html').classList.remove('dark',"light")
//     document.querySelector('html').classList.add(themeMode)
//   }, [themeMode])

const DarkMode = () => {
  return (
    <div>
      <img src={LightButton} alt=""
      className="w-12 cursor-pointer  drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]"
       />
    </div>
  )
}

export default DarkMode