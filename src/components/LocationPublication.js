import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const LocationPublication = (props) => {
    const [id_publication, setId_publication] = useState(props.props.id_publication)
    const [id_shelving, setId_shelving] = useState(props.props.id_shelving)
    const [num_shelf, setNum_shelf] = useState(props.props.num_shelf)
    const [locationPublications, setLocationPublications] = useState(props.props.locationPublications)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deleteLocationPublications() {
        const response = await fetch('http://localhost:8081/locationPublications/'+props.props.id_publication + "/" + props.props.id_shelving + "/" + props.props.num_shelf, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_publication
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editLocationPublication(event) {
        const response = await fetch('http://localhost:8081/locationPublications/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_publication' : id_publication, 'id_shelving' : id_shelving, 'num_shelf': num_shelf})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_publication}</p>
                <p>{props.props.id_shelving}</p>
                <p>{props.props.num_shelf}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deleteLocationPublications}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editLocationPublication}>
                    <input defaultValue={id_publication} type="text" size="15" onChange={(e) => setId_publication(e.target.value)}/>
                    <input defaultValue={id_shelving} type="text" size="15" onChange={(e) => setId_shelving(e.target.value)}/>
                    <input defaultValue={num_shelf} type="text" size="15" onChange={(e) => setNum_shelf(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default LocationPublication;