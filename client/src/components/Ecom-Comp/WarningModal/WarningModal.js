import React, { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./WarningModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const WorningModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onHide={props.onHide} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default WorningModal;
