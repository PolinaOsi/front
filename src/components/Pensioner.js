import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const Pensioner = (props) => {
    const [id_pensioner, setId_pensioner] = useState(props.props.id_pensioner)
    const [pension, setPension] = useState(props.props.pension)
    const [pensioners, setPensioners] = useState(props.props.pensioners)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deletePensioners() {
        const response = await fetch('http://localhost:8081/pensioners/'+props.props.id_pensioner, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_pensioner
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editPensioners(event) {
        const response = await fetch('http://localhost:8081/pensioners/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_pensioner' : id_pensioner, 'pension' : pension})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_pensioner}</p>
                <p>{props.props.pension}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deletePensioners}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editPensioners}>
                    <input defaultValue={id_pensioner} type="text" size="15" onChange={(e) => setId_pensioner(e.target.value)}/>
                    <input defaultValue={pension} type="text" size="15" onChange={(e) => setPension(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default Pensioner;