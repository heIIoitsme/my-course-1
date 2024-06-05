import React from 'react';
import './tags_styles.css'

export const CheckBox = ({ isChecked, onChange, children }) => {
    return (
        <label className='checkbox-wrapper'>
            <input
                type='checkbox'
                className='checkbox-element'
                name='tags'
                checked={isChecked}
                onChange={() => onChange(children)}
            />
            <p>{children}</p>
        </label>
    )
}