import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const Author = (props) => {
    const [id_author, setId_author] = useState(props.props.id_author)
    const [surname, setSurname] = useState(props.props.surname)
    const [name, setName] = useState(props.props.name)
    const [patronymic, setPatronymic] = useState(props.props.patronymic)
    const [date_birth, setDate_birth] = useState(props.props.date_birth)
    const [authors, setAuthors] = useState(props.props.authors)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deleteAuthors() {
        const response = await fetch('http://localhost:8081/authors/'+props.props.id_author, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_author
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editAuthors(event) {
        const response = await fetch('http://localhost:8081/authors/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_author' : id_author, 'surname' : surname, 'name': name, 'patronymic' : patronymic, 'date_birth' : date_birth})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_author}</p>
                <p>{props.props.surname}</p>
                <p>{props.props.name}</p>
                <p>{props.props.patronymic}</p>
                <p>{props.props.date_birth.toString().slice(0, 10)}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deleteAuthors}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editAuthors}>
                    <input defaultValue={id_author} type="text" size="15" onChange={(e) => setId_author(e.target.value)}/>
                    <input defaultValue={surname} type="text" size="15" onChange={(e) => setSurname(e.target.value)}/>
                    <input defaultValue={name} type="text" size="15" onChange={(e) => setName(e.target.value)}/>
                    <input defaultValue={patronymic} type="text" size="15" onChange={(e) => setPatronymic(e.target.value)}/>
                    <input defaultValue={date_birth} type="text" size="15" onChange={(e) => setDate_birth(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default Author;