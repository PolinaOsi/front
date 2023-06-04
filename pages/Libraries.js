import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import Library from "../components/Library";

const Libraries = () => {
    const [id_library, setId_library] = useState([])
    const [name_library, setName_library] = useState([])
    const [address_library, setAddress_library] = useState([])
    const [libraries, setLibraries] = useState([])
    async function getLibraries() {
        const response = await fetch('http://localhost:8081/libraries/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setLibraries(data)
        console.log(data)
    }
    async function addLibraries(event) {
        const response = await fetch('http://localhost:8081/libraries/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_library' : id_library, 'name_library' : name_library, 'address_library': address_library})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getLibraries()
        console.log(libraries)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addLibraries}>
                            <p>Добавить автора: </p>
                            <input type="text" size="15" placeholder="Введите ID" onChange={(e) => setId_library(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите название" onChange={(e) => setName_library(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите адрес" onChange={(e) => setAddress_library(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {libraries?.map((props) => <Library props={props} authors={libraries}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Libraries;