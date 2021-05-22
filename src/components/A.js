import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const SearchbarDropdown = (props) => {
  const { setgot,options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange(event);
    });
    
  }, []);

  return (
    <div className="container search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className=" frm"
        placeholder="Search"
        ref={inputRef}
        onChange={onInputChange}
        size="sm"
        autoComplete="off"
      />
      <center>
        <ul id="results" className="list-group frm" ref={ulRef}>
          {options.map((option, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={(e) => {
                  inputRef.current.value = option;
                  setgot(option)
                  document.addEventListener("click", (event) => {
                    ulRef.current.style.display = 'none';
                  });
                }}
                className="list-group-item list-group-item-action"
              >
                {option}
              </button>
            );
          })}
        </ul>
      </center>
    </div>
  );
};

function A(props) {
  const { setstate } = props;
  const defaultOptions = [];
  props.st.map((states) => {
    const c = states.s;
    defaultOptions.push(c);
  });

  const [options, setOptions] = useState([]);
  const [gotf, setgotf] = useState("Total")
  const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter(
        (option) =>
          option.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0
      )
    );
  };

  return (
    <div className="App container">
      <h4 className="whitee">Search States</h4>
      <SearchbarDropdown
        setgot={setgotf}
        options={options}
        onInputChange={onInputChange}
      />
      { setstate(gotf)}
      <br />
      {/* <button className="btn btn-primary" onClick={setstate(gotf)}>Search</button> */}
    </div>
  );
}

export default A;
