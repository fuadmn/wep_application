import React from 'react'
import ThemedComponent from './ThemeContext';

import { useContext } from 'react'

const ThemedComponent = () => {

 const theme = useContext(ThemedComponent);

 const style = { 
   backgroundColor :  theme === 'light' ? "#ffff" :
   "#3333",
   color: theme === "light" ? "#000" : "#fff",
   padding: '20px',
   textAlign: "Center",
 }

  return (
    <div style={style}>This is a {theme}-theme Component!
    </div>
  )
}