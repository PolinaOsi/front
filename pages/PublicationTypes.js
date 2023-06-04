import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import PublicationType from "../components/PublicationType";

const PublicationTypes = () => {
    const [id_type, setId_type] = useState([])
    const [name_type, setName_type] = useState([])
    const [publicationTypes, setPublicationTypes] = useState([])
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
    async function addPublicationTypes(event) {
        const response = await fetch('http://localhost:8081/publicationTypes/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_type' : id_type, 'name_type' : name_type})
        })
        console.log(response.data)
    }
    useEffect(() => {
    getPublicationTypes()
    console.log(publicationTypes)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addPublicationTypes}>
                            <p>Добавить тип изданий: </p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_type(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите название типа" onChange={(e) => setName_type(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {publicationTypes?.map((props) => <PublicationType props={props} publicationTypes={publicationTypes}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PublicationTypes;