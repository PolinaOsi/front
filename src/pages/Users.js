import React, {useEffect, useState} from 'react';
import Aside from "../components/Aside";
import Header from "../components/Header";
import User from "../components/User";
import user from "../components/User";

const Users = () => {
    const [id_user, setId_user] = useState([])
    const [category, setCategory] = useState(0)
    // const [userCategories, setUserCategories] = useState(0)
    const [surname, setSurname] = useState([])
    const [name, setName] = useState([])
    const [patronymic, setPatronymic] = useState([])

    const [userCategories, setUserCategories] = useState([])
    const [users, setUsers] = useState([])

    async function getUserCategories() {
        const response = await fetch('http://localhost:8081/usersCategories/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setUserCategories(data)
        console.log(data)
    }
    async function getUsers() {
        const response = await fetch('http://localhost:8081/users/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setUsers(data)
        console.log(data)
    }
    async function addUsers(event) {
        const response = await fetch('http://localhost:8081/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_user' : id_user, 'category' : category, 'surname': surname, 'name' : name, 'patronymic' : patronymic})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getUsers()
        getUserCategories()
        console.log(users)
        console.log(userCategories)
    }, [])
    return (
        <div className="App"className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addUsers}>
                            <p>Добавить пользователя:</p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_user(e.target.value)}/>
                            <select onChange={(e) => setCategory(e.target.value)}>
                                {userCategories?.map((userCategory) => {
                                    return <option value={userCategory.id_category}>{userCategory.name_category}</option>
                                })}
                            </select>
                            <input type="text" size="15" placeholder="Введите фамилию" onChange={(e) => setSurname(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите имя" onChange={(e) => setName(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите отчество" onChange={(e) => setPatronymic(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {users?.map((props) => <User props={props} userCategories={userCategories}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Users;