import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const User = (props) => {
    const [id_user, setId_user] = useState(props.props.id_user)
    const [category, setCategory] = useState(props.props.category)
    // const [userCategories, setUserCategories] = useState(props.userCategories)
    const [surname, setSurname] = useState(props.props.surname)
    const [name, setName] = useState(props.props.name)
    const [patronymic, setPatronymic] = useState(props.props.patronymic)

    const [userCategories, setUserCategories] = useState(props.userCategories)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deleteUsers() {
        const response = await fetch('http://localhost:8081/users/'+props.props.id_user, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_user
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editUsers(event) {
        const response = await fetch('http://localhost:8081/users/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_user' : id_user, 'category' : category, 'surname': surname, 'name' : name, 'patronymic' : patronymic})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_user}</p>
                <p>Категория: {props.props.category}</p>
                <p>{props.props.surname}</p>
                <p>{props.props.name}</p>
                <p>{props.props.patronymic}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deleteUsers}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editUsers}>
                    <input defaultValue={id_user} type="text" size="15" onChange={(e) => setId_user(e.target.value)}/>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        {userCategories?.map((userCategory) => {
                            return <option value={userCategory.id_category}>{userCategory.name_category}</option>
                        })}
                    </select>
                    {/*<input defaultValue={category} type="text" size="15" onChange={(e) => setCategory(e.target.value)}/>*/}
                    <input defaultValue={surname} type="text" size="15" onChange={(e) => setSurname(e.target.value)}/>
                    <input defaultValue={name} type="text" size="15" onChange={(e) => setName(e.target.value)}/>
                    <input defaultValue={patronymic} type="text" size="15" onChange={(e) => setPatronymic(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default User;