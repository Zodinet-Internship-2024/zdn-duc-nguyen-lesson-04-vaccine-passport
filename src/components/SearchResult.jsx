import React from "react";
import "../styles/SearchResult.scss";
import search from "../images/8.svg";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/`);
  };
  return (
    <div className="search-result">
      <div className="message-container">
        <div className="icon">
          <img src={search} alt="Not found icon" />
        </div>
        <div className="message">
          <p>Chúng tôi không tìm thấy chứng nhận của bạn trong hệ thống.</p>
          <p>Vui lòng kiểm tra lại thông tin.</p>
        </div>
        <button className="search-again-button" onClick={handleNavigate}>
          Quay lại tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
