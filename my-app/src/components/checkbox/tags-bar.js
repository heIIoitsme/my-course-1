import React from 'react';
import './tags_styles.css'

export const CheckBox = ({ isChecked, onChange, children }) => {
    return (
        <label className='checkbox-wrapper'>
            <p className='tagName'>{children}</p>
            <input
                type='checkbox'
                className='checkbox-element'
                name='t'
                value={children}
                checked={isChecked}
                onChange={() => onChange(children)}></input>
        </label>
)
}