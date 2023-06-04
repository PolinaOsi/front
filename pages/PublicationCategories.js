import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import PublicationCategory from "../components/PublicationCategory";

const PublicationCategories = () => {
    const [id_category, setId_category] = useState([])
    const [name_category, setName_category] = useState([])
    const [publicationCategories, setPublicationCategories] = useState([])
    async function gePublicationCategories() {
        const response = await fetch('http://localhost:8081/publicationCategories/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setPublicationCategories(data)
        console.log(data)
    }
    async function addPublicationCategories(event) {
        const response = await fetch('http://localhost:8081/publicationCategories/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_category' : id_category, 'name_category' : name_category})
        })
        console.log(response.data)
    }
    useEffect(() => {
        gePublicationCategories()
        console.log(publicationCategories)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addPublicationCategories}>
                            <p>Добавить категорию изданий: </p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_category(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите название категории" onChange={(e) => setName_category(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {publicationCategories?.map((props) => <PublicationCategory props={props} publicationCategories={publicationCategories}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PublicationCategories;