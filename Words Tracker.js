function wordsTracker(arr) {
    let wordOccurrences = {};

    let wordsToTrack = arr.shift().split(' ');

    for(let word of wordsToTrack)
    {
        wordOccurrences[word] = 0;
    }

    for(let word of arr)
    {
        if(word in wordOccurrences)
        {
            wordOccurrences[word]++;
        }
    }

    let entries = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);

    for(let [word, occurrances] of entries)
    {
        console.log(`${word} - ${occurrances}`);
    }
}

wordsTracker([
'is the',
"first", "sentence", "Here", "is", "another", "the", "And", "finally", "the", "the", "sentence"
])