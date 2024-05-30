import '../background/background-styles.css';
import MainSelector from '../main_selector/main_selector.js';
import World_selector from "../main_selector/world_selector";

export default () => {
    return (
        <div class='background'>
            <World_selector />
        </div>
    )
}