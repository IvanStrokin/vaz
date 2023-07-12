import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import s from './MainPage.module.scss'
import { useSelector } from "react-redux"
import NewSlid from "../../slid/NewsSlid";

const MainPage = () => {

    const data = useSelector(state => state.offers.offersData)

    console.log(data)

    return (
        <div className={s.wrapper}>

            <div className={s.slider}>

            
             <AwesomeSlider>
                    {data.map((el) => (<div><NewSlid data= {el} /></div>))}
                </AwesomeSlider>
            </div>

        </div>

    )
}

export default MainPage