import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="nav-header">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
        <div className="nav-logo">
            <img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"/>
        </div>
        <div>
            
        </div>
      </header>
    </div>
  );
};

export default Navbar;
