import { useState } from "react";

import "./Gamestart.css";
import imgA from "./image/moon.png";
import imgB from "./image/star1.png";
import imgC from "./image/star2.png";
import imgD from "./image/scoreBadge.png";

import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";

function Gamestart(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="Title">
        <h1>Catch Your Star!</h1>
      </div>
      <div className="Moon">
        <img src={imgA} width="290.18" height="278.59" alt="moon" />
      </div>
      <div className="star1">
        <img src={imgB} width="40" height="40" alt="star1" />
      </div>
      <div className="star2">
        <img src={imgC} width="40" height="40" alt="star2" />
      </div>
      <div className="scoreTemplate" onClick={deleteHandler}>
        <div className="scoreBadge">
          <img src={imgD} width="70" height="70" alt="scoreBadge" />
        </div>
      </div>
      <div className="action">
        <Link to="/game/1">
          <button className="btn">Game Start</button>
        </Link>
      </div>
      <div className="Third">
        <h5>Press Start button</h5>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Gamestart;
