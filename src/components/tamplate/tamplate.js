import React from "react";

export class Tamplate extends React.Component {
    render() {
        const {firstName, lastName, date, phone, link, about, stack, project, backToForm} = this.props;
        return(
            <>
                <div className="tamplate">
                <header> {firstName} {lastName} </header>
                <h4>Дата рождения: {date} </h4>
                <h4>Номер телефона: {phone} </h4>
                <h4>Сайт: {link} </h4>
                <h4>О себе: {about} </h4>
                <h4>Стек технологий: {stack} </h4>
                <h4>Описание последнего проекта: {project} </h4>
                </div>
                <button className="btn" type="back" onClick={() => backToForm()}>Back to form</button>
            </>
        )
    }
}