import React, {useEffect, useState} from 'react';
import '../style/style.css';
import Aside from "../components/Aside";
import Header from "../components/Header";
import ItemNumber from "../components/ItemNumber";

const ItemNumbers = () => {
    const [number, setNumber] = useState([])
    const [id_publication, setId_publication] = useState([])
    const [date_import, setDate_import] = useState([])
    const [date_writeoff, setDate_writeoff] = useState([])
    const [num_library, setNum_library] = useState([])
    // const [id_library, setId_library] = useState(props.props.id_library)
    // const [libraries, setLibraries] = useState(props.libraries)
    const [itemNumbers, setItemNumbers] = useState([])
    async function getItemNumbers() {
        const response = await fetch('http://localhost:8081/itemNumbers/all', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setItemNumbers(data)
        console.log(data)
    }
    async function addItemNumbers(event) {
        const response = await fetch('http://localhost:8081/itemNumbers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'number' : number, 'id_publication' : id_publication, 'date_import': date_import, 'date_writeoff' : date_writeoff, 'num_library' : num_library})
        })
        console.log(response.data)
    }
    useEffect(() => {
        getItemNumbers()
        console.log(itemNumbers)
    }, [])
    return (
        <div className="App">
            <Header/>
            <Aside/>
            <div>
                <main className="content">
                    <div className="main-form2">
                        <form className="add" onSubmit={addItemNumbers}>
                            <p>Добавить номенклатурный номер: </p>
                            <input type="text" size="15" placeholder="Введите номенклатурный номер" onChange={(e) => setNumber(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите номер издания" onChange={(e) => setId_publication(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите дату привоза" onChange={(e) => setDate_import(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите дату списания" onChange={(e) => setDate_writeoff(e.target.value)}/>
                            <input type="text" size="15" placeholder="Введите номер библиотеки" onChange={(e) => setNum_library(e.target.value)}/>
                            {/*<select onChange={(e) => setId_library(e.target.value)}>*/}
                            {/*    {libraries?.map((libraries) => {*/}
                            {/*        return <option value={libraries.id}>{libraries.name}</option>*/}
                            {/*    })}*/}
                            {/*</select>*/}
                            <button className="btn2" type="submit">Добавить</button>
                        </form>
                        {itemNumbers?.map((props) => <ItemNumber props={props} itemNumbers={itemNumbers}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ItemNumbers;