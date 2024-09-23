import { createContext, useState } from "react";

export const MainContext = createContext()


const ContextProvider = ({children}) => {
    const [inputHistory, setInputHistory] = useState([]);
    const [promptList, setPromptList] = useState([{}]);
    const [inputValue, setInputValue] = useState("");
    
    const [disabled, setDisabled] = useState(false); 
    const data = {
        inputHistory,
        setInputHistory,
        promptList,
        setPromptList,
        inputValue,
        setInputValue,
        disabled,
        setDisabled
        

    }
    return(

   
    <MainContext.Provider value={data}>
        {children}

    </MainContext.Provider>
     )
}

export default ContextProvider