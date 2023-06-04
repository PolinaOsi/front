import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Pensioner from "../components/Pensioner";
import UserCategory from "../components/UserCategory";

const UserCategories = () => {
    const [id_category, setId_category] = useState([])
    const [name_category, setName_category] = useState([])
    const [userCategories, setUserCategories] = useState([])
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
    async function addUserCategories(event) {
        const response = await fetch('http://localhost:8081/usersCategories/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_category' : id_category, 'name_category' : name_category})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getUserCategories()
        console.log(userCategories)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addUserCategories}>
                            <p>Добавить категорию пользователей: </p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_category(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите название категории" onChange={(e) => setName_category(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {userCategories?.map((props) => <UserCategory props={props} userCategories={userCategories}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserCategories;