import { createSlice } from "@reduxjs/toolkit";



const toolkitSlice = createSlice({
    name : "toolkit",
    initialState : {
        models : [
            {
                name : "GRANTA",
                startPrice : "632 000",
                instalment : "6 919",
                img : "https://static.lada.ru/images/v6/cars/configurator/granta/sedan.png",
            },
            {
                name : "VESTA",
                startPrice : "1 239 900",
                instalment : "12 555",
                img : "https://static.lada.ru/images/v6/cars/configurator/vesta_new/sedan.webp",
            },
            {
                name : "NIVA TRAVEL",
                startPrice : "1 042 900",
                instalment : "10 528",
                img : "https://static.lada.ru/images/v6/cars/configurator/niva-travel/travel.png",
            },
            {
                name : "LARGUS",
                startPrice : "1 300 900",
                instalment : "13 183",
                img : "https://static.lada.ru/images/v6/cars/configurator/new-largus/universal.png",
            },
            {
                name : "NIVA LEGEND",
                startPrice : "821 900",
                instalment : "8 253",
                img : "https://static.lada.ru/images/v6/cars/configurator/niva-legend/3dv.png",
            },
            {
                name : "LARGUS ФУРГОН",
                startPrice : "1 020 100",
                instalment : "10 320",
                img : "https://static.lada.ru/images/v6/cars/configurator/commercial/new-largus-furgon.png",
            },
        ],  
    },
   reducers: { },
})

export default toolkitSlice.reducer