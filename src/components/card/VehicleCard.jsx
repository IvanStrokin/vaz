import React from "react";
import s from "./Card.module.scss"

const VehicleCard = ({ data }) => {
    return (
        <div className={s.wrapper}>
            <img src={data.img} alt="Car image"/>
            <div className={s.info}>
                <h1>{data.name}</h1>
                <div className={s.price}>
                    <div>от {data.startPrice} ₽</div> <div> от {data.instalment} ₽/мес</div>
                </div>
            </div>
        </div>
    )
}

export default VehicleCard