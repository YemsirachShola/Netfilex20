import React from "react";
import './Fotter.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="footer-outer-conteiner">
      <div className="footer-inner-contier">
      <div className="footer-icons">
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>Auido Description</li>
              <li>Invester Realstions</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies Preferances</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift card</li>
              <li>Terams of use</li>
              <li>Copareat Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media center</li>
              <li>Pravice</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      <div className="servcie-code">
        <p>Serivce code</p>
      </div>
      <div className="copy-right">&copy:1997-2024 Netfilx, Inc.</div>
      </div>
    </div>
  );
}

export default Footer;
