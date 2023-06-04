import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const PublicationCategory = (props) => {
    const [id_category, setId_category] = useState(props.props.id_category)
    const [name_category, setName_category] = useState(props.props.name_category)
    const [publicationCategories, setPublicationCategories] = useState(props.props.publicationCategories)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deletePublicationCategories() {
        const response = await fetch('http://localhost:8081/publicationCategories/'+props.props.id_category, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_category
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editPublicationCategories(event) {
        const response = await fetch('http://localhost:8081/publicationCategories/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_category' : id_category, 'name_category' : name_category})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_category}</p>
                <p>{props.props.name_category}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deletePublicationCategories}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editPublicationCategories}>
                    <input defaultValue={id_category} type="text" size="15" onChange={(e) => setId_category(e.target.value)}/>
                    <input defaultValue={name_category} type="text" size="15" onChange={(e) => setName_category(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default PublicationCategory;