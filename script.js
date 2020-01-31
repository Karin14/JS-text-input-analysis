"use strict"

function analyzeText() {
    const analyzeResults = document.getElementById("analyze-results");
    const textInput = document.getElementById("textarea").value;
    analyzeResults.innerHTML = '';
    analyzeResults.appendChild(getLengthInfo(textInput));
    analyzeResults.appendChild(getLengthWithoutSpaces(textInput));
    analyzeResults.appendChild(howManyNumbers(textInput));
    analyzeResults.appendChild(findLongestWord(textInput));
}

function getLengthInfo(textInput) {
    const textLength = textInput.length;
    return createElementWithContent('p', `Text length: <b>${textLength} ${getSignFormat(textLength)}</b>`);
}

function getLengthWithoutSpaces(textInput) {
    const textLength = textInput.replace(/ /g, "").length;
    return createElementWithContent('p', `Text length without spaces: <b>${textLength} ${getSignFormat(textLength)}</b>`);
}

function getSignFormat(length) {
    let signForm = 'characters';
    if (length === 1) {
        signForm = 'character';
    }
    return signForm;
}

function howManyNumbers(textInput) {
    let arrayNumbers = 0;
    for (let i = 0; i < textInput.length; i++) {
        if (!isNaN(parseInt(textInput[i]))) {
            arrayNumbers++;
        }
    }
    return createElementWithContent('p', `Total count of numbers in the text: <b>${arrayNumbers}</b>`);
}

function findLongestWord(textInput) {
    const wordsWrapper = document.createElement("div");
    const splitWords = textInput.split(" ");
    let maxLength = 0;
    for (let word of splitWords) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    splitWords.forEach(word => {
        if (maxLength === word.length) {
            const line = createElementWithContent('p', `Longest word is <b>"${word}"</b> with number of characters <b>${maxLength}</b>`);
            wordsWrapper.appendChild(line);
        }
    });
    return wordsWrapper;
}

function createElementWithContent(element, content) {
    const htmlElement = document.createElement(element);
    htmlElement.innerHTML = content;
    return htmlElement;
}

function searchString() {
    const searchResults = document.getElementById("search-results");
    const search = document.getElementById("search").value;
    const textInput = document.getElementById("textarea").value;
    if (search !== "") {
        searchResults.innerHTML = `<p>Analyzed text ${textInput.includes(search) ? 'contains' : 'does not contain'} <b>"${search}"</b></p>  `;
    } else {
        searchResults.innerHTML = "";
    }
}

function replaceValues() {
    const textInput = document.getElementById("textarea").value;
    const replacedInput = textInput
        .replace(/o/gi, 0)
        .replace(/i/gi, 1)
        .replace(/e/gi, 3)
        .replace(/a/gi, 4)
        .replace(/s/gi, 5)
        .replace(/b/gi, 8);

    const output = document.getElementById("encryption-results");
    output.innerHTML = '';
    output.appendChild(createElementWithContent('p', replacedInput));
}