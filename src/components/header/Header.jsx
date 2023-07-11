import React from "react";
import s from './Header.module.scss'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={s.Header}>
            <h1 className={s.Logo}>
                <NavLink to="/">
                    <img src='https://bogatyr.club/uploads/posts/2023-03/1678514164_bogatyr-club-p-avtovaz-logo-foni-instagram-49.jpg' alt="logo" />
                </NavLink>
            </h1>
            <div className={s.ProductsBlock}>
                <NavLink to="">Модельный ряд</NavLink>
                <NavLink to="">Конфигуратор</NavLink>
            </div>
            <div className={s.InfoBlock}>
                <NavLink to="">Диллеры</NavLink>
                <NavLink to="">Контакты</NavLink>
            </div>
            <div className={s.Geoposition}>
                <img src="https://static.tildacdn.com/tild3936-6530-4538-a432-306661633732/hotpngcom.png" />
                <select name="choice">
                    <option value="first" selected>Тольятти</option>
                    <option value="second">Москва</option>
                    <option value="third">Санкт-Питербург</option>

                </select>
            </div>
        </div>
    )
}

export default Header  