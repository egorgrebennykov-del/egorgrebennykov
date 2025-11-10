function cardGame(arr) {
    let players = new Map();
    let allCards = new Map();

    for (let element of arr) {
        let [name, cardsStr] = element.split(': ');
        let cards = cardsStr.split(', ');

        if (!players.has(name)) {
            players.set(name, 0);
            allCards.set(name, []);
        }

        for (let card of cards) {
            if (allCards.get(name).includes(card)) continue;

            let cardPower = card.slice(0, -1);
            let cardType = card.slice(-1);

            let multiplier = 0;
            switch (cardType) {
                case 'C': multiplier = 1; break;
                case 'D': multiplier = 2; break;
                case 'H': multiplier = 3; break;
                case 'S': multiplier = 4; break;
            }

            let number = 0;
            switch (cardPower) {
                case 'J': number = 11; break;
                case 'Q': number = 12; break;
                case 'K': number = 13; break;
                case 'A': number = 14; break;
                default: number = Number(cardPower);
            }

            let value = number * multiplier;

            players.set(name, players.get(name) + value);
            allCards.get(name).push(card);
        }
    }

    for (let [name, sum] of players) {
        console.log(`${name}: ${sum}`);
    }
}

cardGame([
'Peter: 2C, 4H, 9H, AS, QS','Tomas: 3H, 10S, JC, KD, 5S, 10S','Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD'
])