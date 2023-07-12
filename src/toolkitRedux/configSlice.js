import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name: "configuration",
    initialState: {
        configurationData: [
            {
                model: "LADA GRANTA",
                complectation: ["Седан", "Лифбек"],
                img: "https://static.lada.ru/images/v6/cars/configurator/granta/sedan.png",
                imgCompl: ["https://static.lada.ru/images/v6/cars/configurator/granta/sedan.png",
                    "https://static.lada.ru/images/v6/cars/configurator/granta/liftback.png",],
                equioment: ["BASE", "COMFORT", "LUX-LIGHT", "LUX"],
                startPrice: 692960,
            },
            {
                model: "LADA VESTA",
                complectation: ["Седан", "CW"],
                img: "https://static.lada.ru/images/v6/cars/configurator/vesta_new/sedan.webp",
                imgCompl: ["https://static.lada.ru/images/v6/cars/configurator/vesta_new/sedan.webp",
                    "https://static.lada.ru/images/v6/cars/configurator/vesta_new/sw.webp",],
                equioment: ["BASE", "COMFORT", "LUX-LIGHT", "LUX"],
                startPrice: 1092960,
            },
            {
                model: "NIVA",
                complectation: ["LEGEND", "TRAVEL"],
                img: "https://static.lada.ru/images/v6/cars/configurator/niva-legend/3dv.png",
                imgCompl: ["https://static.lada.ru/images/v6/cars/configurator/niva-legend/3dv.png",
                    "https://static.lada.ru/images/v6/cars/configurator/niva-travel/travel.png",],
                equioment: ["BASE", "COMFORT", "LUX-LIGHT", "LUX"],
                startPrice: 1192960,
            },
            {
                model: "LADA LARGUS",
                complectation: ["Универсал", "Cross"],
                img: "https://static.lada.ru/images/v6/cars/configurator/new-largus/universal.png",
                imgCompl: ["https://static.lada.ru/images/v6/cars/configurator/new-largus/universal.png",
                    "https://static.lada.ru/images/v6/cars/configurator/new-largus/cross.png",],
                equioment: ["BASE", "COMFORT", "LUX-LIGHT", "LUX"],
                startPrice: 1392960,
            },
        ],
        options: [
            ["Подушка безопасности водителя и переднего пассажира",
                "Электропривод и обогрев наружных зеркал",
                "Кондиционер",
                "Аудиоподготовка"],

            ["Подушка безопасности водителя и переднего пассажира",
                "Электропривод и обогрев наружных зеркал",
                "Кондиционер",
                "Мультимедийная система с навигацией в пакете Multimedia"],

            ["Электропривод и обогрев наружных зеркал",
                "Датчики парковки",
                "Датчики дождя и света",
                "Аудиосистема"],

            ["Камера заднего вида",
                "Датчики дождя и света",
                "Мультимедийная система с навигацией",
                "Подогрев задних сидений в пакете Prestige"],

        ],
        baseShowData: {
            model: "LADA GRANTA",
            complectation: ["Седан", "Лифбек"],
            img: "https://static.lada.ru/images/v6/cars/configurator/granta/sedan.png",
            imgCompl: ["https://static.lada.ru/images/v6/cars/configurator/granta/sedan.png",
                "https://static.lada.ru/images/v6/cars/configurator/granta/liftback.png",],
            equioment: ["BASE", "COMFORT", "LUX-LIGHT", "LUX"],
            startPrice: 692960,
        },
        choosenImg: "https://static.lada.ru/images/v6/cars/configurator/granta/sedan.png",
        baseDescription: ["Подушка безопасности водителя и переднего пассажира",
            "Электропривод и обогрев наружных зеркал",
            "Кондиционер",
            "Аудиоподготовка"],
        countedPrice: 692960,
    },
    reducers: {
        changeModelGranta(state) {
            state.baseShowData = state.configurationData[0]
            state.choosenImg = state.baseShowData.img
            state.countedPrice = state.configurationData[0].startPrice
        },
        changeModelVesta(state) {
            state.baseShowData = state.configurationData[1]
            state.choosenImg = state.baseShowData.img
            state.countedPrice = state.configurationData[1].startPrice
        },
        changeModelNiva(state) {
            state.baseShowData = state.configurationData[2]
            state.choosenImg = state.baseShowData.img
            state.countedPrice = state.configurationData[2].startPrice
        },
        changeModelLargus(state) {
            state.baseShowData = state.configurationData[3]
            state.choosenImg = state.baseShowData.img
            state.countedPrice = state.configurationData[3].startPrice
        },
        changeToFirType(state) {
            state.countedPrice = state.baseShowData.startPrice
            state.choosenImg = state.baseShowData.imgCompl[0]
        },
        changeToSecondType(state) {
            state.countedPrice = (state.baseShowData.startPrice + 200000)
            state.choosenImg = state.baseShowData.imgCompl[1]
        },
        changeEquipmentBase(state) {
            state.countedPrice = (state.baseShowData.startPrice + 120000)
            state.baseDescription = state.options[0]
        },
        changeEquipmenComfort(state) {
            state.countedPrice = (state.baseShowData.startPrice + 167000)
            state.baseDescription = state.options[1]
        },
        changeEquipmentLuxLight(state) {
            state.countedPrice = (state.baseShowData.startPrice + 224500)
            state.baseDescription = state.options[2]
        },
        changeEquipmentLux(state) {
            state.countedPrice = (state.baseShowData.startPrice + 254000)
            state.baseDescription = state.options[3]
        },
    },
})

export default configSlice.reducer

export const { changeEquipmenComfort, changeEquipmentBase, changeEquipmentLux, changeEquipmentLuxLight,
    changeModelGranta, changeModelLargus, changeModelNiva, changeModelVesta,
    changeToFirType, changeToSecondType } = configSlice.actions