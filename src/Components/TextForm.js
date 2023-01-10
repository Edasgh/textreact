import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //text="new Text"//Wrong way to change the text
  //setText="new Text"//Correct way to change the text
  const handleUpClick = () => {
    // console.log("Uppercase button is clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success ")
  };
  const handleOnChange = (event) => {
    // console.log("Uppercase on Change")
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success ")
  }
  const handleClearClick = () => {
    let newText="";
    setText(newText);
    props.showAlert("Textarea cleared!","success ")
  }
  const handleCopyClick = () => {
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success ")

  }
  const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success ")
  }

  return (
    <>
      <div className="container" >
        <h1> {props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            cols="140"
            style={{backgroundColor:props.mode==='light'?'white':'#474646',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
          <br />
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-secondary mx-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-danger mx-1" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-warning mx-1" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-info mx-1 my-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>

        </div>
      </div>
      <div className="container my-2">
        <h2>Your Text Contains</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        {/* <h3>Preview</h3> */}
        {/* <p>{text}</p> */}
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
