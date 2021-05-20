import {passDataToDOM} from './js/passDataToDOM';
import {checkURL} from './js/checkURL';
import {postMethod} from './js/methods';
import {handleSubmit} from './js/handleSubmit';
import './styles/style.sass';
//////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        return Client.handleSubmit(event)
    });
});
////////////////////////////////////////////////////////////////////////
export {
    passDataToDOM,
    checkURL,
    postMethod,
    handleSubmit
}
