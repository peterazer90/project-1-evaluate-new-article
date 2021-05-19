async function postMethod(URL, DATA) {
    const response = await fetch(URL, {
        method: 'POST',
        credentials: "same-origin",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(DATA)
    });
    try {
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export {postMethod}
