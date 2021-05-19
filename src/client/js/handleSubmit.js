import {checkURL} from "./checkURL";
import {postMethod} from "./methods";
import {passDataToDOM} from "./passDataToDOM";

const apiUrl = 'http://localhost:8081/add-url';

////////////////////////////////////////////////////////////////////////
function handleSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('article-url');
    const validURL = checkURL(input.value);

    if (validURL) postMethod(apiUrl, {url: input.value})
        .then(response => response.json())
        .then(data => passDataToDOM(data))
    else alert('Enter a valid URL.');
}

////////////////////////////////////////////////////////////////////////
export {handleSubmit}
