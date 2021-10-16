import React from "react";
import './customInput.css';

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmpty: 'Поле пустое. Заполните пожалуйста'
        }
    }

    render() {
        const {type, name, onChange, state, label, value, placeholder, isSubmited} = this.props;
        return(
            <><label className="inputLabel">{label}</label><input
                type={type}
                onChange={onChange}
                name={name}
                value={state[name]}
                placeholder={placeholder}
                className="inputItem" /><div className="error">{state.errors[name]}</div><span className="error">{value === '' && isSubmited === true ? this.state.isEmpty : ''}</span></>
            
        )
    }
}

export default CustomInput;