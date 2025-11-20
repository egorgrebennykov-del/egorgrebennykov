function starEnigma(arr) {
    arr.shift();
    let destroyed = [];
    let attacked = [];

    for (let message of arr) {
        let number = 0;
        let decodedMessage = '';

        for (let char of message) {
            if (/[STAR]/i.test(char)) {
                number++;
            }
        }
        for (let char of message) {
            let trueCode = char.codePointAt(0) - number;
            decodedMessage += String.fromCharCode(trueCode);
        }

        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiersQty>\d+)/;
        let matched = decodedMessage.match(pattern);
        if (matched) {
            let {name, population, type, soldiersQty} = matched.groups;
            if (type === 'A') {
                attacked.push(name);
            } else {
                destroyed.push(name);
            }
        }
    }

    attacked.sort();
    destroyed.sort();

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(planet => console.log(`-> ${planet}`));
}



starEnigma(
['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']
);
