import React from "react";
import VehicleCard from "../../card/VehicleCard";
import { useSelector} from "react-redux"
import s from './ModelPage.module.scss'


const ModelPage = () => {

    const data = useSelector(state => state.toolkit.models)

    console.log(data)   

    return(
        <div className={s.wrapper}>
            {data.map((el) => (<VehicleCard data={el} />))}
        </div>
    )
}

export default ModelPage