import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import "./Language.css";
function Language() {
  return (
    <div className="language">
      <div className="lang">
        <LanguageIcon />
        <h3>English</h3>
      </div>
      <div className="currency">
        <AttachMoneyIcon />
        <h3>Currency</h3>
      </div>
    </div>
  );
}

export default Language;
