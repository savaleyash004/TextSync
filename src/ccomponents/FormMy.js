import React, { useState } from "react";
export default function FormMy(props) {
//   const [mistyle, Setmistyle] = useState({
//     color: "white",
//     backgroundColor: "black",
//   });
  // let toggle = () => {
  //   if (mistyle.color === "black") {
  //     Setmistyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "10px solid black",
  //     });
  //     settextb("Enable light Mode");
  //   } else {
  //     Setmistyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     settextb("Enable Dark mode");
  //   }
  // };
  // const [textb, settextb] = useState("Enter Dark Mode");
  function countWords() {
    if (text.length === 0) return text.trim().split(/\s+/).length - 1;
    else {
      return text.trim().split(/\s+/).length;
    }
  }
  const UnChangehandle = (event) => {
    console.log("HII");
    setText(event.target.value);
  };
  const copyclickked = () => {
    console.log("HII");
    //rget.value)
    var text = document.getElementById("Myform");
    const len=text.value.length;
    if(len===0)
    return;
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Has Been Copied To clipboard","primary");
};
  const clearclickked = () => {
    const len=text.length;
    if(len===0)return;
    console.log("HII");
    // setText(event.target.value)
    setText("")
    props.showalert("Text has Been cleared","danger")
  };
  const Onclickked = () => {
    const len=text.length;
    if(len===0)return;
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Text has been converted to upper case","success")
  };
  const HandLoClick = () => {
    const len=text.length;
    if(len===0)return;
    let newwtext = text.toLocaleLowerCase();
    setText(newwtext);
    props.showalert("Text has been convertted to lowercase","success")
  };
  const extraclickked = () => {
    let newwtext = text.split(/[ ]+/);
    setText(newwtext.join(" "));
  };
  const [text, setText] = useState("");
  //text="New text"

  return (
    <div className="main" style={{color:(props.mode==='dark'?'white':'#080b19')}}>
      <div className="container my-3 ">
        <h1>{props.head}</h1>
        <div className="form">
          <textarea
            className="form-control"
            style={{backgroundColor:(props.mode==='dark'?'#080b19':'white'),color:(props.mode==='dark'?'white':'black')}}
            // style={{color:(props.mode==='dark'?'white':'black')}}
            placeholder="Enter Your Text"
            id="Myform"
            value={text}
            onChange={UnChangehandle}
            rows="4"
          ></textarea>
        </div>

        <button
          className="btn btn-outline-success fw-bold my-1 mx-1"
          onClick={Onclickked}
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-outline-success fw-bold my-1 mx-1"
          onClick={HandLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          className="btn btn-outline-danger fw-bold my-1 mx-1"
          onClick={clearclickked}
        > 
          text clear
        </button>
        <button
          className="btn btn-outline-primary my-1 mx-1 fw-bold"
          onClick={copyclickked}
        >
          copy clear
        </button>
        <button
          className="btn btn-outline-warning my-1 mx-1 fw-bold"
          onClick={extraclickked}
        >
          Remove extra space
        </button>
      </div>
      <div className="container fw-bold my-1">
        <h2>Your Text History</h2>
        <p>
          Words:- {countWords()} <br />
          Characters:- {text.length}
          <br />
          Minutes to Read The Text:-{countWords() * 0.008}
        </p>
        <h2>Preview</h2>
        <p>{text.length<=0?"Enter Text Here":text}</p>

      </div>
      {/* <button className="btn btn-outline-success my-3 mx-1" onClick={toggle}>
        {textb}
      </button> */}
    </div>
  );
}
