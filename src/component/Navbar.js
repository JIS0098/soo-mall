import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <header>
        <div className="nav-header">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
        <div className="nav-logo">
          <img
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </div>
        <div className="nav-menu-area">
          <ul className="nav-menu-list">
            {menuList.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <div className="nav-menu-search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="제품검색" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
