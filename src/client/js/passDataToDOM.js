const passToTheElem = (ID, RESULT) => document.getElementById(ID).innerHTML = RESULT;

function passDataToDOM(data) {
    const {text, score_tag, agreement, subjectivity, confidence, irony} = data;
    passToTheElem('text', text);
    passToTheElem('score_tag', score_tag);
    passToTheElem('agreement', agreement);
    passToTheElem('subjectivity', subjectivity);
    passToTheElem('confidence', confidence);
    passToTheElem('irony', irony);
}
export {passDataToDOM}
