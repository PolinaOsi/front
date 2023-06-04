import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Employee from "../components/Employee";
import query from "../components/Query";
import Query from "../components/Query";

const QueryP = () => {
    const [id_employee, setId_employee] = useState([])
    const [surname, setSurname] = useState([])
    const [name, setName] = useState([])
    const [patronymic, setPatronymic] = useState([])
    const [number_library, setNumber_library] = useState([])
    const [number_hall, setNumber_hall] = useState([])

    const [num_lib, setNum_lib] = useState([])
    const [num_hall, setNum_hall] = useState([])
    const [employees, setEmployees] = useState([])

    async function query() {
        const response = await fetch('http://localhost:8081/employees/q/'+ num_lib+"/"+ num_hall, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setEmployees(data)
        console.log(data)
    }
    useEffect(() => {
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <div className="add">
                            <input type="text" size="15" placeholder="Введите номер зала" onChange={(e) => setNum_lib(e.target.value)}/>
                            <input type="text" size="20" placeholder="Введите номер библиотеки" onChange={(e) => setNum_hall(e.target.value)}/>
                            <button className="btn2" onClick={query}>Ввод</button>
                        </div>
                        {employees?.map((props) => <Query props={props} query={query}/>)}
                    </div>
                </main>
            </div>
        </div>
    );


};

export default QueryP;