import { Component } from "react";
import "./customTextarea.css";

class CustomTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: "Поле пустое. Заполните пожалуйста",
    };
  }

  render() {
    const { name, onChange, state, label, rows, counter, value, placeholder, isSubmited } =
      this.props;
    return (
      <><label className="textareaLabel">
        {label}</label><textarea
          rows={rows}
          value={state[name]}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          className="textareaItem"
        ></textarea><span className="counter">{counter}</span><span className="error">
          {value === "" && isSubmited === true ? this.state.isEmpty : ""}
        </span></>
      
    );
  }
}

export default CustomTextarea;
