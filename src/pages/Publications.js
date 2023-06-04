import React, {useEffect, useState} from 'react';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Publication from "../components/Publication";

const Publications = () => {
    const [id_publication, setId_publication] = useState([])
    const [name, setName] = useState([])
    const [category, setCategory] = useState(0)
    const [type, setType] = useState(0)
    const [author, setAuthor] = useState([])

    const [publicationCategories, setPublicationCategories] = useState([])
    const [publicationTypes, setPublicationTypes] = useState([])
    const [publications, setPublications] = useState([])

    async function getPublicationCategories() {
        const response = await fetch('http://localhost:8081/publicationCategories/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setPublicationCategories(data)
        console.log(data)
    }

    async function getPublicationTypes() {
        const response = await fetch('http://localhost:8081/publicationTypes/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setPublicationTypes(data)
        console.log(data)
    }

    async function getPublications() {
        const response = await fetch('http://localhost:8081/publications/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setPublications(data)
        console.log(data)
    }
    async function addPublications(event) {
        const response = await fetch('http://localhost:8081/publications/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_publication' : id_publication, 'name' : name, 'category': category, 'type' : type, 'author' : author})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getPublications()
        getPublicationCategories()
        getPublicationTypes()
        console.log(publications)
        console.log(publicationCategories)
        console.log(publicationTypes)
    }, [])
    return (
        <div className="App"className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addPublications}>
                            <p>Добавить пользователя:</p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_publication(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите название" onChange={(e) => setName(e.target.value)}/>
                            <select onChange={(e) => setCategory(e.target.value)}>
                                {publicationCategories?.map((publicationCategory) => {
                                    return <option value={publicationCategory.id_category}>{publicationCategory.name_category}</option>
                                })}
                            </select>
                            <select onChange={(e) => setType(e.target.value)}>
                                {publicationTypes?.map((publicationType) => {
                                    return <option value={publicationType.id_type}>{publicationType.name_type}</option>
                                })}
                            </select>
                            <input type="text" size="15" placeholder="Введите автора" onChange={(e) => setAuthor(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {publications?.map((props) => <Publication props={props} publicationCategories={publicationCategories} publicationTypes={publicationTypes}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Publications;