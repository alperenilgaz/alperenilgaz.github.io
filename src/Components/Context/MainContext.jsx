import { createContext, createElement, useState } from "react";
import Prompt from "../Prompt/Prompt";

export const MainContext = createContext()


const ContextProvider = ({children}) => {
    const [inputHistory, setInputHistory] = useState([]);
    const [promptList, setPromptList] = useState([createElement(Prompt)]);
    const [outputList, setOutputList] = useState([])
    
    const data = {
        inputHistory,
        setInputHistory,
        promptList,
        setPromptList,
        outputList,
        setOutputList
     

        

    }
    return(

   
    <MainContext.Provider value={data}>
        {children}

    </MainContext.Provider>
     )
}

export default ContextProvider