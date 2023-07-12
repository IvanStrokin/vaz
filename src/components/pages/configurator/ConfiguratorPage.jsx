import React from "react";
import s from './ConfiguratorPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
    changeEquipmenComfort, changeEquipmentBase, changeEquipmentLux, changeEquipmentLuxLight,
    changeModelGranta, changeModelLargus, changeModelNiva, changeModelVesta,
    changeToFirType, changeToSecondType
} from '../../../toolkitRedux/configSlice'

const ConfiguratorPage = () => {

    const dataConfig = useSelector(state => state.configuration.configurationData)

    const outInfo = useSelector(state => state.configuration.baseShowData)

    const showImg = useSelector(state => state.configuration.choosenImg)

    const decription = useSelector(state => state.configuration.baseDescription)

    const dispatch = useDispatch()


    return (
        <div className={s.wrapper}>
            <div className={s.buttons}>
                <div className={s.modelsChoose}>
                    <button onClick={() => dispatch(changeModelGranta())}>{dataConfig[0].model}</button>
                    <button onClick={() => dispatch(changeModelVesta())}>{dataConfig[1].model}</button>
                    <button onClick={() => dispatch(changeModelNiva())}>{dataConfig[2].model}</button>
                    <button onClick={() => dispatch(changeModelLargus())}>{dataConfig[3].model}</button>
                </div>

                <div className={s.typeChoose}>
                    <button onClick={() => dispatch(changeToFirType())}>{outInfo.complectation[0]}</button>
                    <button onClick={() => dispatch(changeToSecondType())}>{outInfo.complectation[1]}</button>
                </div>

                <div className={s.complectation}>
                    <button onClick={() => dispatch(changeEquipmentBase())}>BASE</button>
                    <button onClick={() => dispatch(changeEquipmenComfort())}>COMFORT</button>
                    <button onClick={() => dispatch(changeEquipmentLuxLight())}>LUX-LIGHT</button>
                    <button onClick={() => dispatch(changeEquipmentLux())}>LUX</button>
                </div>
                <div className={s.cancel}>
                    <button onClick={() => dispatch(changeModelGranta())}>Сбросить</button>
                </div>

            </div>


            <div className={s.description}>
                <img src={showImg} alt="car img" />
                <div className={s.information}>
                    <p className={s.price}>{outInfo.startPrice} ₽   {outInfo.startPrice / 100} ₽/мес </p>
                    Особенности комплектации:
                    <ul>
                        {decription.map((el) => <li>{el}</li>)}
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default ConfiguratorPage