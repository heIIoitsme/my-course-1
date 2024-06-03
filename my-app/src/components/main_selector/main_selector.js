import '../main_selector/main_selector.css';
import Worldtop from './worldtop.js';
import Mytop from './mytop.js';

export default () => {
    return (
        <div>
            <div class='block'>
                <div class='subheadline'>
                    <a href="WorldTop">
                        Лучшие рейтинги
                    </a>
                </div>
            <Worldtop />
                <br />
                <div class='subheadline'>
                    <a href="MyTop">
                        Мои оценки
                    </a>
                </div>
            <Mytop />
            </div>
        </div>
    )
}