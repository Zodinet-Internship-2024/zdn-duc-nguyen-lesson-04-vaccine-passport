import React, { useEffect, useState } from "react";
import "../styles/Form.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "../utils/util";
import { getAllDistricts, getAllProvince, getAllWards } from "../api/province";
import { Navigate, useNavigate } from "react-router-dom";
export default function Form() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const id = data.cardId; // hoặc bất kỳ giá trị nào từ data bạn muốn
    navigate(`/result/${id}`, { state: { formData: data } });
  };
  const fetchProvinces = async () => {
    const { results } = await getAllProvince();
    if (results.length > 0) {
      setProvinces(results);
    }
  };
  const fetchDistricts = async (id) => {
    const { results } = await getAllDistricts(id);
    if (results.length > 0) {
      setDistricts(results);
    }
  };
  const fetchWards = async (id) => {
    const { results } = await getAllWards(id);
    if (results.length > 0) {
      setWards(results);
    }
  };
  const handleCityChange = (event) => {
    fetchDistricts(event.target.value);
  };
  const handleDistrictsChange = (event) => {
    fetchWards(event.target.value);
  };
  const handleCardIdInput = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[eE\-\+\s]/g, "");
    event.target.value = sanitizedValue;
  };

  const handleCardIdKeyPress = (event) => {
    if (/[eE\-\+\s]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleCardIdPaste = (event) => {
    event.preventDefault();
  };
  console.log(errors);
  useEffect(() => {
    fetchProvinces();
  }, []);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title">
        <span>Tra cứu chứng nhận vắc xin!</span>
        <p>
          Vui lòng điền đầy đủ các thông tin để tiến hành tìm
          <br />
          kiếm thông tin chứng nhận vắc xin của bạn
        </p>
      </div>
      <div className="form__input">
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <div className="form__input-text">
          <div className="form__input-label">
            <label>Họ và tên</label>
            <span>*</span>
          </div>

          <input
            type="text"
            className="form__input-text-value"
            {...register("firstName")}
          />
        </div>
        {errors.gender && <p>{errors.gender.message}</p>}
        <div className="form__input-text">
          <div className="form__input-label">
            <label>Giới tính*</label>
            <span>*</span>
          </div>
          <select name="" id="" {...register("gender")}>
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nu">Nữ</option>
          </select>
        </div>
        {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
        <div className="form__input-text">
          <div className="form__input-label">
            <label>Ngày sinh*</label>
            <span>*</span>
          </div>
          <input
            type="date"
            className="form__input-text-value"
            {...register("dateOfBirth")}
          />
        </div>
        {errors.cardId && <p>{errors.cardId.message}</p>}
        <div className="form__input-text">
          <div className="form__input-label">
            <label>Số CCCD / Mã định danh cá nhân*</label>
            <span>*</span>
          </div>
          <input
            type="number"
            className="form__input-text-value"
            onInput={handleCardIdInput}
            onKeyPress={handleCardIdKeyPress}
            onPaste={handleCardIdPaste}
            {...register("cardId")}
          />
        </div>
        {errors.province && <p>{errors.province.message}</p>}
        <div className="form__input-text">
          <label>Tỉnh /thành phố</label>
          <select
            name=""
            id=""
            {...register("province")}
            onChange={handleCityChange}
          >
            <option value="">Chọn thành phố</option>
            {provinces.map((province) => (
              <option key={province.province_id} value={province.province_id}>
                {province.province_name}
              </option>
            ))}
          </select>
        </div>
        {errors.district && <p>{errors.district.message}</p>}
        <div className="form__input-text">
          <label>Quận/Huyên</label>
          <select
            name=""
            id=""
            {...register("district")}
            onChange={handleDistrictsChange}
          >
            <option value="">Chọn quận/huyện</option>
            {districts.map((district) => (
              <option key={district.district_id} value={district.district_id}>
                {district.district_name}
              </option>
            ))}
          </select>
        </div>
        {errors.ward && <p>{errors.ward.message}</p>}
        <div className="form__input-text">
          <label>Xã /phường</label>
          <select name="" id="" {...register("ward")}>
            <option value="">Chọn xã/phường</option>
            {wards.map((ward) => (
              <option key={ward.ward_id} value={ward.ward_id}>
                {ward.ward_name}
              </option>
            ))}
          </select>
        </div>

        <button className="form__input-submit" type="submit">
          Tìm kiếm
        </button>
      </div>
    </form>
  );
}
