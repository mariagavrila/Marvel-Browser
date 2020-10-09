import React from "react";
import Modal from "@material-ui/core/Modal";
import "./Details.css";

export default function ModalDetails({ hero, urlImage }) {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="modal__backdrop">
      <div className="modal__container">
        <span
          className="card-header"
          style={{
              backgroundImage: `${urlImage}`,
              backgroundSize: "cover"
          }}
        ></span>
        <p> {hero.description ? hero.description : ""}</p>
        <span className="card-summary">
          <span>Comics: {hero.comics ? hero.comics.available : 0}</span>
          <span>Stories: {hero.stories ? hero.stories.available : 0}</span>
          <span>Stories: {hero.stories ? hero.stories.available : 0}</span>
        </span>
        <button type="button" onClick={handleClose} className="btn">
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button onClick={handleOpen} type="button" className="btn">
        Show details
      </button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
