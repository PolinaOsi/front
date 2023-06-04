import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const Lending = (props) => {
    const [item_number_publication, setItem_number_publication] = useState(props.props.item_number_publication)
    const [num_ticket, setNum_ticket] = useState(props.props.num_ticket)
    const [issue_date, setIssue_date] = useState(props.props.issue_date)
    const [return_period, setReturn_period] = useState(props.props.return_period)
    const [return_date, setReturn_date] = useState(props.props.return_date)
    const [num_employee, setNum_employee] = useState(props.props.num_employee)
    const [lendings, setLendings] = useState(props.props.lendings)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deleteLendings() {
        const response = await fetch('http://localhost:8081/lending/'+props.props.item_number_publication + "/" + props.props.num_ticket + "/" + props.props.num_employee, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.number
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editLendings(event) {
        const response = await fetch('http://localhost:8081/lending/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'item_number_publication' : item_number_publication, 'num_ticket' : num_ticket, 'issue_date': issue_date, 'return_period' : return_period, 'return_date' : return_date, 'num_employee' : num_employee})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.item_number_publication}</p>
                <p>{props.props.num_ticket}</p>
                <p>{props.props.issue_date.toString().slice(0, 10)}</p>
                <p>{props.props.return_period.toString().slice(0, 10)}</p>
                <p>{(props.props.return_date)?.toString().slice(0, 10)}</p>
                <p>{(props.props.num_employee)}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deleteLendings}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editLendings}>
                    <input defaultValue={item_number_publication} type="text" size="15" onChange={(e) => setItem_number_publication(e.target.value)}/>
                    <input defaultValue={num_ticket} type="text" size="15" onChange={(e) => setNum_ticket(e.target.value)}/>
                    <input defaultValue={issue_date} type="text" size="15" onChange={(e) => setIssue_date(e.target.value)}/>
                    <input defaultValue={return_period} type="text" size="15" onChange={(e) => setReturn_period(e.target.value)}/>
                    <input defaultValue={return_date} type="text" size="15" onChange={(e) => setReturn_date(e.target.value)}/>
                    <input defaultValue={num_employee} type="text" size="15" onChange={(e) => setNum_employee(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default Lending;