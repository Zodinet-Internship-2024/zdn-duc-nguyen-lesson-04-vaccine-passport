import React, { useState } from "react";
import "../styles/Result.scss";
import qrcode from "../images/qrcode.png";
import protection from "../images/protection.svg";
import { FaDownload } from "react-icons/fa6";
import { IoPrint } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import QrResult from "./QrResult";
import SearchResult from "./SearchResult";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { sampleData } from "../utils/sampleData";

export default function Result() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const location = useLocation();
  // const { formData } = location.state || {};
  const navigate = useNavigate();
  const result = sampleData.find((item) => item.cardId === id);
  console.log(result);
  const handlenavigate = () => {
    navigate(`/`);
  };
  return (
    <div className="qr-code-card">
      <header>
        <div onClick={handlenavigate}>Trang chủ</div>

        <MdArrowRight className="qr-code-card-icon" />

        <a href="/" className="qr-code-card-find">
          Kết quả tìm kiếm
        </a>
      </header>
      {result ? <QrResult user={result} /> : <SearchResult />}
    </div>
  );
}
