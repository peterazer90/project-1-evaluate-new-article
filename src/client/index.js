import {handleSubmit} from './js/handleSubmit';
import './styles/style.sass';
////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        handleSubmit(event)
    });
});
////////////////////////////////////////////////////////////////////////
export {handleSubmit}
