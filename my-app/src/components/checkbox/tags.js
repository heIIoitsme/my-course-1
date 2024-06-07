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
        <div style={{'overflow-x': 'scroll', padding: '4px'}}>
            <div className='allTags'>
                {
                    allTags.map(item =>
                        <CheckBox isChecked={checkedValues.includes(item)} onChange={addValues}>{item}</CheckBox>
                    )
                }
            </div>
        </div>

        <div style={{height: '30px'}}>
            <button className='buttOn'>Поиск</button>
        </div>
    </form>;
}

export default Tag;