import React, { useRef, useState, useEffect, useContext } from 'react';
import './Prompt.css';
import { Cursor } from 'react-simple-typewriter';
import { MainContext } from '../Context/MainContext';

const Prompt = ({handleCommandSubmit}) => {
 
  const [inputWidth, setInputWidth] = useState("1ch");
  const {disabled,setDisabled,inputValue,setInputValue} = useContext(MainContext)
  


  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
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
      handleCommandSubmit(inputValue);
      setInputWidth('1ch');
      setDisabled(true); 
   
    }
    }
  
  };

  return (
    <>
      <div onClick={handleContainerClick} className="prompt-container">
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

          <span className={`cursor ${disabled === true ? 'hidden' : ''}`}>
            <Cursor cursorStyle="|" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Prompt;
