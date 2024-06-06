import {React, useState} from "react";
import {CheckBox} from "./tags-bar";

function Tag({allTags}) {

    const [checkedValues, setCheckedValues] = useState([])
    const addValues = (newValue) => {
        if (checkedValues.includes(newValue)) {
            setCheckedValues(checkedValues.filter((value) => value !== newValue));
        } else {
            setCheckedValues([...checkedValues, newValue]);
        }
    };

    return <form className='form' action="/TagRes">
            {
                allTags.map(item =>
                    <CheckBox isChecked={checkedValues.includes(item)} onChange={addValues}>{item}</CheckBox>
                )
            }
            <button>Отправить</button>
        </form>;
}

export default Tag;