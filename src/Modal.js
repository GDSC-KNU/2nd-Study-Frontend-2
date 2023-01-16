import "./Modal.css";

import imgA from "./image/badge (1) 1.png";
import imgB from "./image/badge (2) 1.png";
import imgC from "./image/badge (3) 1.png";
import imgD from "./image/badge (4) 1.png";
import imgE from "./image/Ellipse 5.png";
import imgF from "./image/Ellipse 6.png";
import imgG from "./image/Ellipse 7.png";
import imgH from "./image/badge 1.png";

function Modal() {
  return (
    <div className="Modal">
      <div className="modalTitle">
        <h1>Ranking</h1>
      </div>
      <div className="circle1">
        <img src={imgE} width="79" height="79" alt="Ellipse 5" />
        <div className="Gold">
          <img src={imgB} width="69" height="69" alt="badge (2) 1" />
        </div>
      </div>

      <div className="circle2">
        <img src={imgF} width="79" height="79" alt="Ellipse 6" />
        <div className="Silver">
          <img src={imgA} width="69" height="69" alt="badge (1) 1" />
        </div>
      </div>

      <div className="circle3">
        <img src={imgG} width="79" height="79" alt="Ellipse 7" />
        <div className="Bronze">
          <img src={imgD} width="69" height="69" alt="badge (4) 1" />
        </div>
      </div>

      <div className="Fourth">
        <img src={imgC} width="69" height="69" alt="badge (3) 1" />
      </div>

      <div className="Fifth">
        <img src={imgH} width="69" height="69" alt="badge 1" />
      </div>
    </div>
  );
}

export default Modal;
