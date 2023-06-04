import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import LocationPublication from "../components/LocationPublication";

const LocationPublications = () => {
    const [id_publication, setId_publication] = useState([])
    const [id_shelving, setId_shelving] = useState([])
    const [num_shelf, setNum_shelf] = useState([])
    const [locationPublications, setLocationPublications] = useState([])
    async function getLocationPublications() {
        const response = await fetch('http://localhost:8081/locationPublications/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setLocationPublications(data)
        console.log(data)
    }
    async function addLocationPublications(event) {
        const response = await fetch('http://localhost:8081/locationPublications/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_publication' : id_publication, 'id_shelving' : id_shelving, 'num_shelf': num_shelf})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getLocationPublications()
        console.log(locationPublications)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addLocationPublications}>
                            <p>Добавить расположение изданий: </p>
                            <input type="text" size="15" placeholder="Введите ID издания" onChange={(e) => setId_publication(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите ID стеллажа" onChange={(e) => setId_shelving(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите номер полки" onChange={(e) => setNum_shelf(e.target.value)}/>
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {locationPublications?.map((props) => <LocationPublication props={props} authors={locationPublications}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LocationPublications;