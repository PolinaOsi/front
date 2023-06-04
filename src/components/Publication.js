import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const Publication = (props) => {
    const [id_publication, setId_publication] = useState(props.props.id_publication)
    const [name, setName] = useState(props.props.name)
    const [category, setCategory] = useState(props.props.category)
    const [type, setType] = useState(props.props.type)
    const [author, setAuthor] = useState(props.props.author)

    const [publicationCategories, setPublicationCategories] = useState(props.publicationCategories)
    const [publicationTypes, setPublicationTypes] = useState(props.publicationTypes)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deletePublications() {
        const response = await fetch('http://localhost:8081/publications/'+props.props.id_publication, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.id_publication
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editPublications(event) {
        const response = await fetch('http://localhost:8081/publications/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id_publication' : id_publication, 'name' : name, 'category': category, 'type' : type, 'author' : author})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.id_publication}</p>
                <p>{props.props.name}</p>
                <p>{props.props.category}</p>
                <p>{props.props.type}</p>
                <p>{props.props.author}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deletePublications}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editPublications}>
                    <input defaultValue={id_publication} type="text" size="15" onChange={(e) => setId_publication(e.target.value)}/>
                    <input defaultValue={name} type="text" size="15" onChange={(e) => setName(e.target.value)}/>
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
                    <input defaultValue={author} type="text" size="15" onChange={(e) => setAuthor(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default Publication;