import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Pensioner from "../components/Pensioner";

const Pensioners = () => {
    const [id_pensioner, setId_pensioner] = useState([])
    const [pension, setPension] = useState([])
    const [pensioners, setPensioners] = useState([])
    async function getPensioners() {
        const response = await fetch('http://localhost:8081/pensioners/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setPensioners(data)
        console.log(data)
    }
    async function addPensioners(event) {
        const response = await fetch('http://localhost:8081/pensioners/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_pensioner' : id_pensioner, 'pension' : pension})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getPensioners()
        console.log(pensioners)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addPensioners}>
                            <p>Добавить пенсионера: </p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_pensioner(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите пенсионный" onChange={(e) => setPension(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {pensioners?.map((props) => <Pensioner props={props} pensioners={pensioners}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pensioners;