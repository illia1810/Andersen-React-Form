import React, { useState } from "react";
import "./customTextarea.css";

const CustomTextarea = (props) => {
  const [state] = useState({
    isEmpty: "Поле пустое. Заполните пожалуйста",
  });

  const {
    name,
    onChange,
    valueState,
    label,
    rows,
    counter,
    value,
    placeholder,
    isSubmited,
  } = props;
  return (
    <>
      <label className="textareaLabel">{label}</label>
      <textarea
        rows={rows}
        value={valueState[name]}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        className="textareaItem"
      ></textarea>
      <span className="counter">{counter}</span>
      <span className="error">
        {value === "" && isSubmited === true ? state.isEmpty : ""}
      </span>
    </>
  );
};

export default CustomTextarea;
