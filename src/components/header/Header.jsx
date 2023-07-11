import React from "react";
import s from './Header.module.scss'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={s.Header}>
            <h1 className={s.Logo}>
                LADA
            </h1>
            <div className={s.Products}>
                <NavLink to="">Модельный ряд</NavLink>
                <NavLink to="">Конфигуратор</NavLink>
            </div>
            
        </div>
    )
}