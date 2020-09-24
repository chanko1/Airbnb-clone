import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { useStateValue } from "../../StateProvider";

import Search from "../Banner/Search/Search";
import { Link } from "react-router-dom";
import Language from "./Language";
function Header() {
  const [{ searchComponent, language }, dispatch] = useStateValue();

  const handleSearchOn = () => {
    dispatch({
      type: "ON_SEARCH",
    });
  };

  const handleLanguageOn = () => {
    dispatch({
      type: "ON_LANGUAGE",
    });
  };

  console.log(searchComponent);
  return (
    <div id="header" className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

      {searchComponent && <Search />}
      <div className="header__center">
        <button onClick={handleSearchOn}>Commencez votre recherche</button>
        <SearchIcon
          style={{
            backgroundColor: "#FF385C",
            color: "white",
            borderRadius: "50%",
            height: "25px",
            margin: "7px 7px 7px 7px",
            padding: "10px",
            width: "25px",
          }}
        />
      </div>
      <div className="header__right">
        <button onClick={handleLanguageOn}>
          <LanguageIcon />
          <ExpandMoreIcon />
          {language && <Language />}
        </button>
        <button>
          <Avatar
            style={{
              height: "25px",
              margin: "-8px 8px 8px 9px",
              padding: "10px",
              width: "25px",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
