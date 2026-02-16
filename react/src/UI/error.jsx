import React from "react";
import ReactDOM from "react-dom";
import "./error.css";

// 1. Hägune taust, mis katab ekraani
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

// 2. Modaalaken ise koos pealkirja, sõnumi ja nupuga
const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button className="button" onClick={props.onConfirm}>
          OK
        </button>
      </footer>
    </div>
  );
};

const Error = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root"),
      )}
    </React.Fragment>
  );
};

export default Error;
