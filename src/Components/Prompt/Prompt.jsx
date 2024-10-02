import React, { useRef, useState, useEffect, useContext, createElement } from 'react';
import './Prompt.css';
import { Cursor } from 'react-simple-typewriter';
import { MainContext } from '../Context/MainContext';

const Prompt = () => {
 
  const [inputWidth, setInputWidth] = useState("1ch");
  
  const [disabled, setDisabled] = useState(false); 
  const [inputValue, setInputValue] = useState("");
  const {setInputHistory,inputHistory, promptList, setPromptList, outputList, setOutputList} = useContext(MainContext)
    


  const inputRef = useRef(null);
  const newRef = useRef(null)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if(newRef.current){
      newRef.current.scrollIntoView({behavior:"smooth"})
    }
  }, []);

  const handleInputChange = (e) => {
    setInputWidth(`${e.target.value.length + 1}ch`);
    setInputValue(e.target.value);
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputEnter = (e) => {

    if (e.key === 'Enter') {
      if(e.target.value.trim()){
        setInputHistory([...inputHistory,inputValue])
        if(inputValue === "clear"){
          setOutputList([]);
          setDisabled(false);
          setPromptList([]);
          setTimeout(() => {
            setPromptList([createElement(Prompt)]);
          }, 100);
        }
        else{
          setOutputList([...outputList, inputValue]);
          setPromptList([...promptList, createElement(Prompt)]);
          setDisabled(true); 
  
        }
   
    }
    }
  
  };

  return (
    <>
      <div  onClick={handleContainerClick} className="prompt-container">
        <div className="prompt">
          <span>
            visitor@alperen.site:~$ {
              disabled === true && (
                inputValue
              )
            }
            
          </span>
        </div>
        <div className="input">
          <input
            value={inputValue} 
            style={{ width: inputWidth }}
            ref={inputRef}
            onChange={handleInputChange}
            onKeyDown={handleInputEnter}
            type="text"
            disabled={disabled}
          />

          <span ref={newRef} className={`cursor ${disabled === true ? 'hidden' : ''}`}>
            <Cursor cursorStyle="|" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Prompt;
