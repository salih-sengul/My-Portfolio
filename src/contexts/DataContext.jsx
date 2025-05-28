import { createContext, useContext, useEffect, useState } from 'react';
import data from '../assets/data';
import useLocalStorage from '../hooks/useLocalStorage';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  
  const [lang, setlang] = useLocalStorage('language', "tr");
  const [langData, setLangData] = useState(lang==="tr"? data.tr:data.en)

  /* useEffect(()=>{
    if(lang==="tr"){
          setlang("en")
          setLangData(data.en)
      }else{
          setlang("tr")
          setLangData(data.tr)
      }
  },[]) */
  

  const langHandler = () => {
      if(lang==="tr"){
          setlang("en")
          setLangData(data.en)
      }else{
          setlang("tr")
          setLangData(data.tr)
      }
    };

 

  return (
    <DataContext.Provider value={{ langData, langHandler,lang, setLangData, setlang}}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = ()=> useContext(DataContext);
