import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import image from '../../assets/image/2025-02-13 10.28.23.jpg'
function Header() {
  return (
    <div className="header-outer-contanier">
      <div className="hader-contanier">
        <div className="header-left">
          <ul>
            <li>
              <img src={image} alt="Netfilexlogo" width = "100" />
            </li>
            <li>Home</li>
            <li>TvShowes</li>
            <li>Movies</li>
            <li>Leatest</li>
            <li>MyList</li>
            <li>Browth by Language</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
