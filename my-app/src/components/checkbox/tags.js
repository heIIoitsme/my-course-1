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

    return <form className='form' action="/TagRes" id='tagForm'>
        <div className='AT_container'>
            <div className='allTags'>
                {
                    allTags.map(item =>
                        <CheckBox isChecked={checkedValues.includes(item)} onChange={addValues}>{item}</CheckBox>
                    )
                }
            </div>
        </div>
        <div className='button_container'>
            <button className='buttOn' form='tagForm'>Поиск</button>
        </div>
    </form>;
}

export default Tag;