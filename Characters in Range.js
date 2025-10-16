function charactersInRange(char1, char2)
{
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let result = [];

    for(let currentCode = Math.min(code1, code2) + 1; currentCode < Math.max(code1, code2); currentCode++)
    {
        result.push(String.fromCharCode(currentCode));
    }

    console.log(result.join(' '));
}

charactersInRange('d', 'a');