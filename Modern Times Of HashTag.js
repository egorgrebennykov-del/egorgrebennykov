function modernTimesOfHashTag(text) {
    let specialWords = [];

    for(let element of text.split(' '))
    {
        let elementWithoutHash = element.slice(1);
        if(element.startsWith('#') && /^[A-Za-z]+$/.test(elementWithoutHash))
        {
            specialWords.push(elementWithoutHash);
        }
    }

    console.log(specialWords.join('\n'));
}

modernTimesOfHashTag('#special word in #socialMedia')