import {createSlot} from 'react-slotify';

export const MySlot = createSlot();

export const Component = ({children}) => {
    return(
        <div>
            Это компонент слова
            <MySlot.Render childs={children}>
                Это сам слот
            </MySlot.Render>
            <div>Отрисовка {children}</div>
        </div>
    )
}