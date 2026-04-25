import { useState } from "react";

import { ThemeContext } from './ThemeContext';
import { ThemedComponent } from './ThemedComponent';

const App = () => {

  const [theme,setTheme] = useState('light');


  return(
    <ThemeContext value={theme}>
     <ThemedComponent />
    </ThemeContext>

  )
}

export default App;