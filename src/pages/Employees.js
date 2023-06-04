import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Employee from "../components/Employee";

const Employees = () => {
    const [id_employee, setId_employee] = useState([])
    const [surname, setSurname] = useState([])
    const [name, setName] = useState([])
    const [patronymic, setPatronymic] = useState([])
    const [number_library, setNumber_library] = useState([])
    const [number_hall, setNumber_hall] = useState([])
    const [employees, setEmployees] = useState([])

    async function getEmployees() {
        const response = await fetch('http://localhost:8081/employees/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setEmployees(data)
        console.log(data)
    }
    async function addEmployees(event) {
        const response = await fetch('http://localhost:8081/employees/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_employee' : id_employee, 'surname' : surname, 'name': name, 'patronymic' : patronymic, 'number_library' : number_library, 'number_hall' : number_hall})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getEmployees()
        console.log(employees)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addEmployees}>
                            <p>Добавить сотрудника: </p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_employee(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите фамилию" onChange={(e) => setSurname(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите имя" onChange={(e) => setName(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите отчество" onChange={(e) => setPatronymic(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите номер библиотеки" onChange={(e) => setNumber_library(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите номер зала" onChange={(e) => setNumber_hall(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {employees?.map((props) => <Employee props={props} employees={employees}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Employees;