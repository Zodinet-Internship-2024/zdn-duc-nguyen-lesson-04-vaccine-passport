import React from "react";
import qrcode from "../images/qrcode.png";
import protection from "../images/protection.svg";
import { FaDownload } from "react-icons/fa6";
import { IoPrint } from "react-icons/io5";
import "../styles/QrResult.scss";

export default function QrResult({ user }) {
  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }
  return (
    <div className="qr-code-container">
      <div className="shield-icon">
        <img src={protection} alt="Shield Icon" />
      </div>
      <div className="qr-code">
        <img src={qrcode} alt="QR Code" />
        <p>
          Mã QR sẽ hết hạn vào ngày:
          <br />
          <span>&lt;{new Date().toLocaleDateString()}&gt;</span>
        </p>
      </div>
      <div className="info">
        <p>
          <span>Họ tên (Name):</span> {user.firstName}
        </p>
        <p>
          <span>Giới tính:</span> {user.gender}
        </p>
        <p>
          <span>Ngày sinh:</span> {formatDate(user.dateOfBirth)}
        </p>
        <p>
          <span>Bệnh dịch (Targeted disease):</span> 85784309/ <br />
          Covid-19
        </p>
        <p>
          <span>Vắc xin (Vaccine):</span>SARS-CoV-2
          <br />
          mRNA vaccine
        </p>
        <p>
          <span>
            Sản phẩm vắc xin
            <br /> (Vaccine product):
          </span>
          Comirnaty/ Pfizer
        </p>
        <p>
          <span>
            Nhà sản xuất <br /> (Manufacture):
          </span>
          Biontech
          <br /> Manufacturing
          <br /> GmbH
        </p>
        <p>
          <span>Số liều (Dose):</span> 2
        </p>
      </div>
      <div className="actions">
        <div className="actions__btn">
          <FaDownload className="actions__btn_icon" /> Tải hình ảnh
        </div>
        <div className="actions__btn">
          <IoPrint className="actions__btn_icon" />
          In
        </div>
      </div>
    </div>
  );
}
