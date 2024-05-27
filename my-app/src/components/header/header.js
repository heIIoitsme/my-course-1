import logo from '../../logo.svg';
import './header-styles.css';
import { useState } from 'react';

export default () => {
    return (
        <header>
          <textarea class='search-input'>
          Поиск ...
          </textarea>
      </header>
    )
}