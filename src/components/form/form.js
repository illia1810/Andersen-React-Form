import React, { useState } from "react";
import CustomInput from "../customInput/customInput";
import CustomTextarea from "../customTextarea/customTextarea";
import "./form.css";

const Form = (props) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    date: "",
    phone: "",
    link: "",
    about: "",
    stack: "",
    project: "",
    isSubmited: false,
    counterTextarea: 600,
    maxCounter: 600,
    errors: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = state.errors;

    switch (name) {
      case "firstName":
        errors[name] =
          value !== "" && value[0].match(/[a-zа-я]/) && value.length !== 0
            ? "Это поле должно начинатся с заглавной буквы"
            : "";
        break;
      case "lastName":
        errors[name] =
          value !== "" && value[0].match(/[a-zа-я]/) && value.length !== 0
            ? "Это поле должно начинатся с заглавной буквы"
            : "";
        break;
      case "link":
        errors[name] =
          value !== "" && value.slice(0, 8).includes("https://") !== true
            ? 'Поле "Сайт" должно начинаться с https:// '
            : "";
        break;

      default:
        break;
    }

    setState({
      ...state,
      errors,
      [name]: value,
    });
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const handleSubmit = (e) => {
    const { date, phone, about, stack, project } = state;

    e.preventDefault();

    if (
      validateForm(state.errors) &&
      phone.length === 12 &&
      date !== "" &&
      about.length !== 0 &&
      about.length <= state.maxCounter &&
      stack.length !== 0 &&
      stack.length <= state.maxCounter &&
      project.length !== 0 &&
      project.length <= state.maxCounter
    ) {
      props.changeState(this.state);
    } else {
      return false;
    }
  };

  const countSymbols = (e) => {
    const { name, value } = e.target;

    if (name === "about") {
      if (value.length > state.maxCounter) {
        setState({
          ...state,
          counterTextarea: "Превышен лимит символов в поле",
        });
      } else {
        setState({
          ...state,
          counterTextarea: this.state.maxCounter - value.length,
          [name]: value,
        });
      }
    }

    if (name === "stack") {
      if (value.length > state.maxCounter) {
        setState({
          ...state,
          counterTextarea: "Превышен лимит символов в поле",
        });
      } else {
        setState({
          ...state,
          counterTextarea: this.state.maxCounter - value.length,
          [name]: value,
        });
      }
    }

    if (name === "project") {
      if (value.length > state.maxCounter) {
        setState({
          ...state,
          counterTextarea: "Превышен лимит символов в поле",
        });
      } else {
        setState({
          ...state,
          counterTextarea: this.state.maxCounter - value.length,
          [name]: value,
        });
      }
    }
  };

  const cancel = () => {
    setState({
      firstName: "",
      lastName: "",
      date: "",
      phone: "",
      link: "",
      about: "",
      stack: "",
      project: "",
      isEmpty: "",
      counterTextarea: 600,
      maxCounter: 600,
      errors: "",
    });
  };

  return (
    <form className="form" action="#" onSubmit={handleSubmit} onReset={cancel}>
      <header>Создание анкеты</header>

      <CustomInput
        type={"text"}
        name="firstName"
        onChange={handleChange}
        valueState={state}
        label="Имя:"
        placeholder="Введите имя..."
        isSubmited={state.isSubmited}
        value={state.firstName}
        errors={state.errors}
      />

      <CustomInput
        type={"text"}
        name="lastName"
        onChange={handleChange}
        valueState={state}
        label="Фамилия:"
        placeholder="Введите фамилию..."
        isSubmited={state.isSubmited}
        value={state.lastName}
        errors={state.errors}
      />

      <CustomInput
        type={"date"}
        name="date"
        onChange={handleChange}
        valueState={state}
        label="Дата рождения:"
        isSubmited={state.isSubmited}
        value={state.date}
        errors={state.errors}
      />

      <CustomInput
        type={"phone"}
        name="phone"
        onChange={handleChange}
        valueState={state}
        label="Телефон:"
        placeholder="Введите номер телефона..."
        isSubmited={state.isSubmited}
        value={state.phone}
        errors={state.errors}
      />

      <CustomInput
        type={"text"}
        name="link"
        onChange={handleChange}
        valueState={state}
        label="Сайт:"
        placeholder="Введите адрес сайта..."
        isSubmited={state.isSubmited}
        value={state.link}
        errors={state.errors}
      />

      <CustomTextarea
        rows="5"
        name="about"
        onChange={countSymbols}
        counter={state.counterTextarea}
        valueState={state}
        label="О себе:"
        placeholder="Напишите о себе..."
        isSubmited={state.isSubmited}
        value={state.about}
      />

      <CustomTextarea
        rows="5"
        name="stack"
        onChange={countSymbols}
        counter={state.counterTextarea}
        valueState={state}
        label="Стек технологий:"
        placeholder="Напишите технологии..."
        isSubmited={state.isSubmited}
        value={state.stack}
      />

      <CustomTextarea
        rows="5"
        name="project"
        onChange={countSymbols}
        counter={state.counterTextarea}
        valueState={state}
        label="Описание последнего проекта:"
        placeholder="Опишите ваш последний проект..."
        isSubmited={state.isSubmited}
        value={state.project}
      />

      <div className="btns">
        <button className="btn" type="cancel" onClick={cancel}>
          Отмена
        </button>
        <button
          className="btn"
          type="submit"
          onClick={() => setState({ ...state, isSubmited: !state.isSubmited })}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default Form;
