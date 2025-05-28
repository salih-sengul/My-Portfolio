import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const MainContext = createContext();



export const MainContextProvider = ({ children }) => {
  const [darkMode, setdarkMode] = useLocalStorage('darkMode', false);

    const darkModeHandler = () => {
        
    
    if(!darkMode){
      document.documentElement.classList.add("dark")
      document.documentElement.classList.add("dark-mode")
      setdarkMode(!darkMode)
    }else{
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.remove("dark-mode")
      setdarkMode(!darkMode)
    }
    
    
    };

  

  return (
    <MainContext.Provider value={{ darkMode, darkModeHandler }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = ()=> useContext(MainContext);
