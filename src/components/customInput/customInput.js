import React, { useState } from "react";
import "./customInput.css";

const CustomInput = (props) => {
  const [state] = useState({ isEmpty: "Поле пустое. Заполните пожалуйста" });

  const { type, name, onChange, valueState, label, value, errors, isSubmited } =
    props;
  return (
    <label className="labelForInput">
      {label}
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={valueState[name]}
        className="inputItem"
      />
      <div className="error">{errors[name]}</div>
      <span className="error">
        {value === "" && isSubmited === true ? state.isEmpty : ""}
      </span>
    </label>
  );
};

export default CustomInput;
