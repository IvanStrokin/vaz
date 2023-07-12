import { createSlice } from "@reduxjs/toolkit";



const offersSlice = createSlice({
    name : "offers",
    initialState : {
        offersData : [
            {
                name : "LADA GRANTA",
                description : "ВЫГОДА БЛИЖЕ, ЧЕМ КАЖЕТСЯ",
                backImg : "https://static.lada.ru/images/v6/actions/gv_d.webp",
            },
            {
                name : "ЗАКАЖИ LADA ОНЛАЙН",
                description : "АВТОМОБИЛИ В НАЛИЧИИ",
                backImg : "https://static.lada.ru/images/v6/promo/online-sales.jpg",
            },
            {
                name : "ЗАВОДИТСЯ ЛЕГКО",
                description : "ПОЛУЧИТЕ ПОДАРОК ПРИ ОФОРМЛЕНИИ КАРТЫ ПОЛЬЗОВАТЕЛЯ",
                backImg : "https://static.lada.ru/images/v6/promo/easily_starts.webp",
            },
            {
                name : "LADA VESTA НОВОЕ ПОКОЛЕНИЯ",
                description : "",
                backImg : "https://static.lada.ru/images/v6/promo/vesta-ng.webp",
            },
            {
                name : "LADA X-CROSS 5",
                description : "СКОРО В ПРОДАЖЕ",
                backImg : "https://static.lada.ru/images/v6/promo/start-x-cross-5.webp",
            },
        ],  
    },
   reducers: { },
})

export default offersSlice.reducer