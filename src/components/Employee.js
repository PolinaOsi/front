import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const Employee = (props) => {
    const [id_employee, setId_employee] = useState(props.props.id_employee)
    const [surname, setSurname] = useState(props.props.surname)
    const [name, setName] = useState(props.props.name)
    const [patronymic, setPatronymic] = useState(props.props.patronymic)
    const [number_library, setNumber_library] = useState(props.props.number_library)
    const [number_hall, setNumber_hall] = useState(props.props.number_hall)
    const [employees, setEmployees] = useState(props.props.employees)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deleteEmployees() {
        const response = await fetch('http://localhost:8081/employees/'+props.props.id_employee, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_employee
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editEmployees(event) {
        const response = await fetch('http://localhost:8081/employees/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_employee' : id_employee, 'surname' : surname, 'name': name, 'patronymic' : patronymic, 'number_library' : number_library, 'number_hall' : number_hall})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_employee}</p>
                <p>{props.props.surname}</p>
                <p>{props.props.name}</p>
                <p>{props.props.patronymic}</p>
                <p>{(props.props.number_library)}</p>
                <p>{(props.props.number_hall)}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deleteEmployees}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editEmployees}>
                    <input defaultValue={id_employee} type="text" size="15" onChange={(e) => setId_employee(e.target.value)}/>
                    <input defaultValue={surname} type="text" size="15" onChange={(e) => setSurname(e.target.value)}/>
                    <input defaultValue={name} type="text" size="15" onChange={(e) => setName(e.target.value)}/>
                    <input defaultValue={patronymic} type="text" size="15" onChange={(e) => setPatronymic(e.target.value)}/>
                    <input defaultValue={number_library} type="text" size="15" onChange={(e) => setNumber_library(e.target.value)}/>
                    <input defaultValue={number_hall} type="text" size="15" onChange={(e) => setNumber_hall(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default Employee;