import Form from "./components/form/form";
import React, { useState } from "react";
import { Tamplate } from "./components/tamplate/tamplate";
import "./App.css";

const App = (props) => {
  const [state, setState] = useState({ showModal: false });

  const changeState = (state) => {
    setState({
      ...state,
      showModal: true,
    });
  };

  const backToForm = () => {
    setState({
      showModal: false,
    });
  };

  if (state.showModal) {
    const {
      firstName,
      lastName,
      date,
      phone,
      link,
      about,
      stack,
      project,
      showModal,
    } = state;
    return (
      <Tamplate
        firstName={firstName}
        lastName={lastName}
        date={date}
        phone={phone}
        link={link}
        about={about}
        stack={stack}
        project={project}
        backToForm={backToForm}
        showModal={showModal}
      />
    );
  }

  return <Form changeState={changeState} />;
};

export default App;
