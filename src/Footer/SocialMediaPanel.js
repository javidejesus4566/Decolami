import "./Footer.css";
import facebookLogo from "../assets/img/facebook-icon.png";
import instagramLogo from "../assets/img/ig-icon.png";
import whatsapp from "../assets/img/whatsapp-icon.png";

const socialMediaPanel = () => {
  return (
    <div>
      <div className="socialMediaPanel">
        <a href="https://wa.me/message/KU3PFKBWT6BGB1" target="https://wa.me/message/KU3PFKBWT6BGB1">
          <img
            src={whatsapp}
            width="30"
            height="30"
            className="d-inline-block align-top"
            href="#whatsapp"
            alt="Whatsapp Logo"
          />
        </a>
        <a
          href="https://www.facebook.com/decolamird-104257594327220"
          target="https://www.facebook.com/decolamird-104257594327220"
        >
          <img
            src={facebookLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            href="#facebook"
            alt="Facebook Logo"
          />
        </a>
        <a
          href="https://www.instagram.com/decolamird/?"
          target="https://www.instagram.com/decolamird/"
        >
          <img
            src={instagramLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            href="#instagram"
            alt="Instagram Logo"
          />
        </a>
      </div>
    </div>
  );
};

export default socialMediaPanel;
