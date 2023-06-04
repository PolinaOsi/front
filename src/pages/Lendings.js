import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Lending from "../components/Lending";

const Lendings = () => {
    const [item_number_publication, setItem_number_publication] = useState([])
    const [num_ticket, setNum_ticket] = useState([])
    const [issue_date, setIssue_date] = useState([])
    const [return_period, setReturn_period] = useState([])
    const [return_date, setReturn_date] = useState([])
    const [num_employee, setNum_employee] = useState([])
    const [lendings, setLendings] = useState([])
    const [isShown, setIsShown] = useState(false);
    async function getLendings() {
        const response = await fetch('http://localhost:8081/lending/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setLendings(data)
        console.log(data)
    }
    async function addLendings(event) {
        const response = await fetch('http://localhost:8081/lending/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'item_number_publication' : item_number_publication, 'num_ticket' : num_ticket, 'issue_date': issue_date, 'return_period' : return_period, 'return_date' : return_date, 'num_employee' : num_employee})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getLendings()
        console.log(lendings)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addLendings}>
                            <p>Добавить запись выдачи: </p>
                            <input type="text" size="15" placeholder="Введите номенклатурный номер" onChange={(e) => setItem_number_publication(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите номер билета" onChange={(e) => setNum_ticket(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите дату выдачи" onChange={(e) => setIssue_date(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите срок возврата" onChange={(e) => setReturn_period(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите дату возврата" onChange={(e) => setReturn_date(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите номер сотрудника" onChange={(e) => setNum_employee(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {lendings?.map((props) => <Lending props={props} lendings={lendings}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Lendings;