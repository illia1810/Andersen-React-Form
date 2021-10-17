import React from 'react';
import CustomInput from '../customInput/customInput';
import CustomTextarea from '../customTextarea/customTextarea';
import './form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            date: '',
            phone: '',
            link: '',
            about: '',
            stack: '',
            project: '',
            isSubmited: false,
            counterTextarea: 600,
            maxCounter: 600,
            errors: ''
        }

    }


handleChange = (e) => {
    e.preventDefault();
    const {
        name,
        value
    } = e.target;
    let errors = this.state.errors;



    switch (name) {
        case 'firstName':
            errors[name] = value !== '' && value[0].match(/[a-zа-я]/) && value.length !== 0 ? 'Это поле должно начинатся с заглавной буквы' : '';
            break;
        case 'lastName':
            errors[name] = value !== '' && value[0].match(/[a-zа-я]/) && value.length !== 0 ? 'Это поле должно начинатся с заглавной буквы' : '';
            break;
        case 'link':
            errors[name] = value !== '' && value.slice(0, 8).includes('https://') !== true ? 'Поле "Сайт" должно начинаться с https:// ' : '';
            break;

        default:
            break;
    }

    this.setState({
        errors,
        [name]: value
    });
}



    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }




    handleSubmit = (e) => {

      
        const {date, phone, about, stack, project} = this.state;


        e.preventDefault();

        if (this.validateForm(this.state.errors) && phone.length === 12 && 
        date !== '' && about.length !== 0 && about.length <= this.state.maxCounter &&
        stack.length !== 0 && stack.length <= this.state.maxCounter &&
        project.length !== 0 && project.length <= this.state.maxCounter ) {
            this.props.changeState(this.state)
        } else {
            return false;            
        }
       
    }


countSymbols = (e) => {
    const {
        name,
        value
    } = e.target;


    if (name === 'about') {

        if (value.length > this.state.maxCounter) {
            this.setState({
                counterTextarea: 'Превышен лимит символов в поле',
            })

        } else {
            this.setState({
                counterTextarea: this.state.maxCounter - value.length
            })
        }


    }

    if (name === 'stack') {
        if (value.length > this.state.maxCounter) {
            this.setState({
                counterTextarea: 'Превышен лимит символов в поле',
            })

        } else {
            this.setState({
                counterTextarea: this.state.maxCounter - value.length
            })
        }
    }

    if (name === 'project') {
        if (value.length > this.state.maxCounter) {
            this.setState({
                counterTextarea: 'Превышен лимит символов в поле',
            })

        } else {
            this.setState({
                counterTextarea: this.state.maxCounter - value.length
            })
        }
    }

    this.setState({
        [name]: value
    })
}



    cancel = () => {
            this.setState(
            {   firstName: '',
                lastName: '',
                date: '',
                phone: '',
                link: '',
                about: '',
                stack: '',
                project: '',
                isEmpty: '',
                counterTextarea: 600,
                maxCounter: 600,
                errors: ''
            }
        )
    }
  

    render() {
 

        return(
            <form className="form" 
                  action="#"
                  onSubmit={this.handleSubmit}
                  onReset={this.handleReset}>
                <header>Создание анкеты</header>  

                <CustomInput type={'text'}
                       name="firstName"
                       onChange={this.handleChange}
                       onSubmit={this.isEmptyCheck}
                       state={this.state}
                       label="Имя:"
                       placeholder="Введите имя..."
                       isSubmited={this.state.isSubmited}
                       value={this.state.firstName}/>

                <CustomInput type={'text'}
                       name="lastName"
                       onChange={this.handleChange}
                       state={this.state}
                       label="Фамилия:"
                       placeholder="Введите фамилию..."
                       isSubmited={this.state.isSubmited}
                       value={this.state.lastName}/>

                <CustomInput type={'date'}
                       name="date"
                       onChange={this.handleChange}
                       state={this.state}
                       label="Дата рождения:"
                       isSubmited={this.state.isSubmited}
                       value={this.state.date}/>

                <CustomInput type={'phone'}
                       name="phone"
                       onChange={this.handleChange}
                       state={this.state}
                       label="Телефон:"
                       placeholder="Введите номер телефона..."
                       isSubmited={this.state.isSubmited}
                       value={this.state.phone}/>
                
                <CustomInput type={'text'}
                       name="link"
                       onChange={this.handleChange}
                       state={this.state}
                       label="Сайт:"
                       placeholder="Введите адрес сайта..."                    
                       isSubmited={this.state.isSubmited}
                       value={this.state.link}/>
     
                <CustomTextarea rows="5"
                          name="about"
                          onChange={this.countSymbols}
                          counter={this.state.counterTextarea}
                          state={this.state}
                          label="О себе:"
                          placeholder="Напишите о себе..."
                          isSubmited={this.state.isSubmited}
                          value={this.state.about}/>

                <CustomTextarea rows="5"
                          name="stack"
                          onChange={this.countSymbols}
                          counter={this.state.counterTextarea}
                          state={this.state}
                          label="Стек технологий:"
                          placeholder="Напишите технологии..."
                          isSubmited={this.state.isSubmited}
                          value={this.state.stack}/>

                <CustomTextarea rows="5"
                          name="project"
                          onChange={this.countSymbols}
                          counter={this.state.counterTextarea}
                          state={this.state}
                          label="Описание последнего проекта:"
                          placeholder="Опишите ваш последний проект..."
                          isSubmited={this.state.isSubmited}
                          value={this.state.project}/>

                
                <ul className="btns">
                    <button className="btn" type="cancel" onClick={this.cancel}>Отмена</button>
                    <button className="btn" type="submit" onClick={() => this.setState({isSubmited: true})}>Сохранить</button>
                </ul>
    </form>
        )
    }
}

export default Form;
