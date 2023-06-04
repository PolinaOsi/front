import React from 'react';
import '../style/style.css';
import {useState} from 'react';
import Header from "./Header";
import Aside from "./Aside";

const Query = (props) => {
    const [id_employee, setId_employee] = useState(props.props.id_employee)
    const [surname, setSurname] = useState(props.props.surname)
    const [name, setName] = useState(props.props.name)
    const [patronymic, setPatronymic] = useState(props.props.patronymic)
    const [number_library, setNumber_library] = useState(props.props.number_library)
    const [number_hall, setNumber_hall] = useState(props.props.number_hall)
    const [employees, setEmployees] = useState(props.props.employees)

    const [qyery, setQuery] = useState([])
    const [num_lib, setNum_lib] = useState(0)
    const [num_hall, setNum_hall] = useState(0)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };


    return (
            <div>
                <main className="content">
                    <div className="main-form2">
                        <div>
                            <div className="container">
                                <p>{props.props.id_employee}</p>
                                <p>{props.props.surname}</p>
                                <p>{props.props.name}</p>
                                <p>{props.props.patronymic}</p>
                                <p>{(props.props.number_library)}</p>
                                <p>{(props.props.number_hall)}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

    );
};

export default Query;