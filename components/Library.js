import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const Library = (props) => {
    const [id_library, setId_library] = useState(props.props.id_library)
    const [name_library, setName_library] = useState(props.props.name_library)
    const [address_library, setAddress_library] = useState(props.props.address_library)
    const [libraries, setLibraries] = useState(props.props.libraries)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deleteLibraries() {
        const response = await fetch('http://localhost:8081/libraries/'+props.props.id_library, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_library
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editLibraries(event) {
        const response = await fetch('http://localhost:8081/libraries/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_library' : id_library, 'name_library' : name_library, 'address_library': address_library})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_library}</p>
                <p>{props.props.name_library}</p>
                <p>{props.props.address_library}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deleteLibraries}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editLibraries}>
                    <input defaultValue={id_library} type="text" size="5" onChange={(e) => setId_library(e.target.value)}/>
                    <input defaultValue={name_library} type="text" size="90" onChange={(e) => setName_library(e.target.value)}/>
                    <input defaultValue={address_library} type="text" size="90" onChange={(e) => setAddress_library(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default Library;