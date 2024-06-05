import {React, useState} from "react";
import {CheckBox} from "./tags_cont";

function Tag({allTags}) {

    const [checkedValues, setCheckedValues] = useState([])
    const addValues = (newValue) => {
        checkedValues.includes(newValue) ? setCheckedValues([...checkedValues].]) : setCheckedValues([...checkedValues, newValue])
    }
    return <form className='form'>
            {
                allTags.map(item =>
                    <CheckBox isChecked={checkedValues.includes(item)} onChange={addValues}>{item}</CheckBox>
                )
            }
            <button>Отправить</button>
        </form>;
}

export default Tag;