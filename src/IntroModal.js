import "./IntroModal.css";

import imgA from "./image/boy.png";
import imgB from "./image/woman.png";

function introModal() {
  return (
    <div className="IntroModal">
      <div className="IntroModalTitle">GDSC Frontend Study2</div>
      <div className="Member">
        <h4>
          <img src={imgA} width="50" height="50" />
          김규회 - frontend
        </h4>
        <h4>
          <img src={imgB} width="50" height="50" />
          엄지영 - frontend
        </h4>
        <h4>
          <img src={imgB} width="50" height="50" />
          장휘영 - frontend
        </h4>
        <h4>
          <img src={imgB} width="50" height="50" />
          박지윤 - Backend
        </h4>
      </div>
    </div>
  );
}

export default introModal;
