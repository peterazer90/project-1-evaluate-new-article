const apiUrl = 'http://localhost:8081/add-url';

////////////////////////////////////////////////////////////////////////
function handleSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('article-url');
    const validURL = Client.checkURL(input.value);

    if (validURL) Client.postMethod(apiUrl, {url: input.value})
        .then(response => response.json())
        .then(data => Client.passDataToDOM(data))
    else alert('Enter a valid URL.');
}

////////////////////////////////////////////////////////////////////////
export {handleSubmit}
