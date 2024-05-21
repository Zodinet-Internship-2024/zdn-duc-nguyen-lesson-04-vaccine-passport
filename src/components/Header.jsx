import React from "react";
import "../styles/Header.scss";
import logoCuc from "../images/logoCuc.svg";
import Rectangle605 from "../images/Rectangle605.svg";
import VN from "../images/MaskCopy.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__nav-left">
          <div className="header__nav-item">
            <img src={logoCuc} alt="" className="nav-item-img" />
            <div className="nav-item-medical">
              <span>CỤC CNTT </span>
              <span> BỘ Y TẾ</span>
            </div>
          </div>
          <div className="header__nav-item">
            <img src={Rectangle605} alt="" className="nav-item-img" />
            <div className="nav-item-vn">
              <span>VIỆT NAM</span>
              <span> KHỎE MẠNH</span>
            </div>
          </div>
        </div>
        <div className="header__nav-right">
          <div className="header__nav-item nav-item-desktop">
            <span>Trang chủ</span>
          </div>
          <div className="header__nav-item nav-item-desktop">
            <span>Giới thiệu</span>
          </div>
          <div className="header__nav-item nav-item-button">
            <img src={VN} alt="" className="nav-item-img" />
            <select>
              <option value="VN">VN</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
