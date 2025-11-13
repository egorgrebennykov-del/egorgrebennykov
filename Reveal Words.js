function revealWords(findWords, text) {
    findWords = findWords.split(', ');

    for(let element of findWords)
    {
        let spliteText = text.split(' ');
        spliteText[spliteText.indexOf('*'.repeat(element.length))] = element;
        text = spliteText.join(' ');
    }

    console.log(text);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')