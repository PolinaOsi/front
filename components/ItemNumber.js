import React from 'react';
import '../style/style.css';
import {useState} from 'react';

const ItemNumber = (props) => {
    const [number, setNumber] = useState(props.props.number)
    const [id_publication, setId_publication] = useState(props.props.id_publication)
    const [date_import, setDate_import] = useState(props.props.date_import)
    const [date_writeoff, setDate_writeoff] = useState(props.props.date_writeoff)
    const [num_library, setNum_library] = useState(props.props.number_library)
    const [itemNumbers, setItemNumbers] = useState(props.props.itemNumbers)
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);
    };

    async function deleteItemNumbers() {
        const response = await fetch('http://localhost:8081/itemNumbers/'+props.props.number, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: props.props.number
        })
        console.log(response.data)
        window.location.reload();
    }
    async function editItemNumbers(event) {
        const response = await fetch('http://localhost:8081/itemNumbers/edit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'number' : number, 'id_publication' : id_publication, 'date_import': date_import, 'date_writeoff' : date_writeoff, 'num_library' : num_library})
        })
        console.log(response.data)
    }
    console.log(props);
    return (
        <div>
            <div className="container">
                <p>{props.props.number}</p>
                <p>{props.props.id_publication}</p>
                <p>{props.props.date_import.toString().slice(0, 10)}</p>
                <p>{props.props.date_writeoff?.toString().slice(0,10)}</p>
                <p>{(props.props.num_library)}</p>
                <button className="btn2" onClick={handleClick}>Изменить</button>
                <button className="btn2" onClick={deleteItemNumbers}>Удалить</button>
            </div>
            {isShown && (
                <form className="formUpdate" onSubmit={editItemNumbers}>
                    <input defaultValue={number} type="text" size="15" onChange={(e) => setNumber(e.target.value)}/>
                    <input defaultValue={id_publication} type="text" size="15" onChange={(e) => setId_publication(e.target.value)}/>
                    <input defaultValue={date_import} type="text" size="15" onChange={(e) => setDate_import(e.target.value)}/>
                    <input defaultValue={date_writeoff} type="text" size="15" onChange={(e) => setDate_writeoff(e.target.value)}/>
                    <input defaultValue={num_library} type="text" size="15" onChange={(e) => setNum_library(e.target.value)}/>
                    <button className="btn2" type="submit">Сохранить</button>
                </form>
            )}
        </div>

    );
};

export default ItemNumber;