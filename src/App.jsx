import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Prompt from "./Components/Prompt/Prompt";
import Data from './Config.json';
import { useTypewriter } from "react-simple-typewriter";

function App() {
  const [inputHistory, setInputHistory] = useState([]);
  const [promptList, setPromptList] = useState([{}]);

  const getStoredTheme = localStorage.getItem("theme") || "Classic"
  const [theme, setTheme] = useState(getStoredTheme)

  console.log(theme);
  
  const changeThemeColor  = (newTheme) => {
    const previousTheme = localStorage.getItem("theme")

    if(previousTheme){
      document.body.classList.remove(previousTheme)

    }if(newTheme){
        document.body.classList.add(newTheme)
        localStorage.setItem("theme",newTheme)
    }
  }

  useEffect(() => {
    changeThemeColor(theme)
  },[theme])

  useEffect(() => {
    const lastInput = inputHistory[inputHistory.length - 1];

    if (lastInput === 'cv') {
      const link = document.createElement("a");
      link.href = "/cv.pdf"; 
      link.download = "cv.pdf"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    if (lastInput === "email") {
      const emailLink = document.createElement("a");
      emailLink.href = "mailto:alpilgz1@gmail.com";
      document.body.appendChild(emailLink);
      emailLink.click();
      document.body.removeChild(emailLink);
    }

  }, [inputHistory]);

  const renderOutput = (inputList, isLastCommand) => {
    const commands = Data[0].commands;

    const renderText = (text) => {
      return isLastCommand ? <TypeWritterText text={text} /> : text;
    };

    switch (inputList) {
      case 'help':
        return commands.help.output.map((item, key) => (
          <div className="help-output" key={key}>
            <p className="help-command">{renderText(item.command)}</p>
            <p className="help-description">{renderText(item.description)}</p>
          </div>
        ));
      case 'whois':
        return commands.whois.output.map((item, key) => (
          <p className="whois-output" key={key}>
            {renderText(item)}
          </p>
        ));
      case 'whoami':
        return commands.whoami.output.map((item, key) => (
          <p className="whoami-output" key={key}>
            {renderText(item)}
          </p>
        ));
      case 'social':
        return commands.social.output.map((item, key) => (
          <div key={key} className="social">
            <p className="social-command">{renderText(item.command)}</p>
            <a target="_blank" className="social-description" href={`${item.link}`}>
              {renderText(item.description)}
            </a>
          </div>
        ));
      case 'cv':
        return (
          <div className="cv-download">
            <p>{renderText("Downloading CV...")}</p>
          </div>
        );
      case 'project':
        return commands.projects.output.map((item, key) => (
          <div key={key} className="project">
            <p className="projects-command">{renderText(item.command)}</p>
            <a target="_blank" href={`${item.link}`} className="projects-description">
              {renderText(item.description)}
            </a>
          </div>
        ));
      case 'history':
        return (
          <div className="history">
            {inputHistory.map((item, key) => (
              <p key={key}>{renderText(item)}</p>
            ))}
          </div>
        );
      case 'theme':
        // console.log(item.commands.theme.output[0].description[1]);
        // console.log(item.description[0].name);

          return commands.theme.output.map((item,key) => (
            <div key={key} className="theme">
              <p className="theme-command">{renderText(item.command)}</p>
              <div className="theme-btn">
              {item.description.map((item,key) => (
                <button key={key} onClick={() =>setTheme(item.name)}>{renderText(item.name)}</button>
              ))}
              </div>
            </div>
          ))
          
         
      case 'email':
        return commands.email.output.map((item, key) => (
          <div key={key} className="email">
            <span>{renderText("Opening mailto:")}</span>
            <a target="_blank" href={`${item.link}`}>{renderText(item.command)}</a>
          </div>
        ));
      case 'banner':
        return commands.banner.output.map((item, key) => (
          <pre key={key} className="ascii-art">
            <code>{renderText(item)}</code>
          </pre>
        ));

      default:
        return (
          <div className="default">
            <span>{renderText("Command not found. For a list of commands, type")}</span>
            <span className="help-effect">{renderText("'help'")}</span>
          </div>
        );
    }
  };

  const handleCommandSubmit = (inputValue) => {
    setInputHistory([...inputHistory, inputValue]);
    setPromptList([...promptList, {}]);
  };

  const TypeWritterText = ({ text }) => {
    const [textOutput] = useTypewriter({
      words: [text],
      typeSpeed: 10,
    });
    return <>{textOutput}</>;
  };

  return (
    <div className="app">
      <Banner />
      {promptList.map((_, index) => (
        <div key={index} className="prompt-output-block">
          <Prompt
            inputHistory={inputHistory}
            handleCommandSubmit={handleCommandSubmit}
          />
          {inputHistory[index] && (
            <div className="output-container">
              {renderOutput(inputHistory[index], index === inputHistory.length - 1)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
