import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Author from "../components/Author";

const Authors = () => {
    const [id_author, setId_author] = useState([])
    const [surname, setSurname] = useState([])
    const [name, setName] = useState([])
    const [patronymic, setPatronymic] = useState([])
    const [date_birth, setDate_birth] = useState([])
    const [authors, setAuthors] = useState([])
    async function getAuthors() {
        const response = await fetch('http://localhost:8081/authors/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setAuthors(data)
        console.log(data)
    }
    async function addAuthors(event) {
        const response = await fetch('http://localhost:8081/authors/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_author' : id_author, 'surname' : surname, 'name': name, 'patronymic' : patronymic, 'date_birth' : date_birth})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getAuthors()
        console.log(authors)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addAuthors}>
                            <p>Добавить автора: </p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_author(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите фамилию" onChange={(e) => setSurname(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите имя" onChange={(e) => setName(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите отчество" onChange={(e) => setPatronymic(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите дату рождения" onChange={(e) => setDate_birth(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {authors?.map((props) => <Author props={props} authors={authors}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Authors;