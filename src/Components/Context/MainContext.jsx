import { createContext, useState } from "react";

export const MainContext = createContext()


const ContextProvider = ({children}) => {
    const [inputHistory, setInputHistory] = useState([]);
    const [promptList, setPromptList] = useState([{}]);
 
    
    const data = {
        inputHistory,
        setInputHistory,
        promptList,
        setPromptList,
     

        

    }
    return(

   
    <MainContext.Provider value={data}>
        {children}

    </MainContext.Provider>
     )
}

export default ContextProvider