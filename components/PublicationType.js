import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const PublicationType = (props) => {
    const [id_type, setId_type] = useState(props.props.id_type)
    const [name_type, setName_type] = useState(props.props.name_type)
    const [publicationTypes, setPublicationTypes] = useState(props.props.publicationTypes)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deletePublicationTypes() {
        const response = await fetch('http://localhost:8081/publicationTypes/'+props.props.id_type, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_type
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editPublicationTypes(event) {
        const response = await fetch('http://localhost:8081/publicationTypes/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_type' : id_type, 'name_type' : name_type})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_type}</p>
                <p>{props.props.name_type}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deletePublicationTypes}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editPublicationTypes}>
                    <input defaultValue={id_type} type="text" size="15" onChange={(e) => setId_type(e.target.value)}/>
                    <input defaultValue={name_type} type="text" size="15" onChange={(e) => setName_type(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default PublicationType;