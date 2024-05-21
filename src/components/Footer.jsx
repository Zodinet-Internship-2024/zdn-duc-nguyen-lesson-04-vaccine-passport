import React from "react";
import "../styles/Footer.scss";
import NCSC from "../images/NCSC.png";
import logoCuc from "../images/logoCuc.svg";
import Rectangle605 from "../images/Rectangle605.svg";
import vector from "../images/Vector.svg";
export default function Footer() {
  return (
    <div className="footer-info">
      <div className="footer-top">
        <div className=" footer-top-logo">
          <img src={logoCuc} alt="Logo 1" className="logo" />
          <span className="">
            CỤC CNTT <br />
            BỘ Y TẾ
          </span>
        </div>
        <div className=" footer-top-logo logo-right">
          <img src={Rectangle605} alt="Logo 2" className="logo" />
          <span className="">
            VIỆT NAM <br />
            KHỎE MẠNH
          </span>
        </div>
      </div>
      <div className="footer-content-follow">
        <div className="footer-content">
          <p>Bản quyền thuộc</p>
          <p>TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA</p>
          <p>
            Phát triển bởi: <strong>Galaxy Digital</strong>
          </p>
        </div>
        <div className="footer-follow">
          <p>Theo dõi chúng tôi:</p>
          <img src={vector} alt="Facebook" className="social-icon" />
        </div>
        <div className="footer-website">
          <a href="/">www.vietnamkhoemanh.vn</a>
        </div>
      </div>
      <div className="footer-certification">
        <img src={NCSC} alt="NCSC" className="ncsc-logo" />
      </div>
    </div>
  );
}
