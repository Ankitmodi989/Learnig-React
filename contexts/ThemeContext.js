import { constants } from "node:buffer";
import { createContext, useContext, useState } from "react";

// in context api  we directly not pass the state of the to the createContext 
// so we use Provider in provider we pass the value of state
// Exaple
const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")))

const ThemeContext = createContext('Theme'); // this value override by the value in contextprovider
const  a= useContext(ThemeContext);

<ThemeContext.Provider value={[isDark,setIsDark]}>

</ThemeContext.Provider>
console.log(ThemeContext);

