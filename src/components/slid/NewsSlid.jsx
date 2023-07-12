import React from "react";
import s from './NewSlid.module.scss'

const NewSlid = (data) => {

    const fields = data.data
    return (
        <div className={s.wrapper} style={{ backgroundImage: "url(" + fields.backImg + ")" }}>
            <div className={s.text}>
                <h1>
                    {fields.name}
                </h1>
                <div>
                    {fields.description}
                </div>
            </div>

        </div>
    )
}

export default NewSlid