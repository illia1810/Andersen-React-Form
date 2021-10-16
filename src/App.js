import Form from './components/form/form';
import React from 'react';
import { Tamplate } from './components/tamplate/tamplate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  changeState = (state) => {
    this.setState({
      ...state,
      showModal: true,
    })
  }

  backToForm = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    if(this.state.showModal) {
      const {firstName, lastName, date, phone, link, about, stack, project, showModal} = this.state;
      return(
        <Tamplate firstName = {firstName}
        lastName = {lastName}
        date = {date}
        phone = {phone}
        link = {link}
        about = {about}
        stack = {stack}
        project = {project}
        backToForm = {this.backToForm}
        showModal = {showModal}        
        />
      )
    }

    return (
      <Form changeState={this.changeState}/>
     );
  }
}

export default App;
