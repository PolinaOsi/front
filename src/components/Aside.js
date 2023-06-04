import React from 'react';
import {Link} from "react-router-dom";
import '../style/aside.css';

const Aside = () => {
    return (
        <aside className="headerContainer">
                <Link className="link" to="/authors">
                    <p className="headerElement">Авторы</p>
                </Link>
                <Link className="link" to="/employees">
                    <p className="headerElement">Сотрудники</p>
                </Link>
                <Link className="link" to="/itemNumbers">
                    <p className="headerElement">Номенклатурные номера</p>
                </Link>
                <Link className="link" to="/lending">
                    <p className="headerElement">Выдача</p>
                </Link>
                <Link className="link" to="/libraries">
                    <p className="headerElement">Библиотеки</p>
                </Link>
                <Link className="link" to="/locationPublications">
                    <p className="headerElement">Расположение изданий</p>
                </Link>
                <Link className="link" to="/pensioners">
                    <p className="headerElement">Пенсионеры</p>
                </Link>
                <Link className="link" to="/users">
                    <p className="headerElement">Пользователи</p>
                </Link>
                <Link className="link" to="/usersCategories">
                    <p className="headerElement">Категории пользователей</p>
                </Link>
                <Link className="link" to="/publicationTypes">
                    <p className="headerElement">Типы изданий</p>
                </Link>
                <Link className="link" to="/publicationCategories">
                    <p className="headerElement">Категории изданий</p>
                </Link>
                <Link className="link" to="/publications">
                    <p className="headerElement">Издания</p>
                </Link>
            <Link className="link" to="/employees/q">
                <p className="headerElement">Запрос</p>
            </Link>
        </aside>
    );
};

export default Aside;