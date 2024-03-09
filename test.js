function convert(source, ignoreList, range) {
    let result = "";
    for (let i = 0; i < source.length; i++) {
        const char = source[i];
        result += getCharInRangeIgnoreList(char, ignoreList, range);
    }
    console.log(result);
}

function getCharInRangeIgnoreList(char, ignoreList, range) {
    const charCode = char.charCodeAt(0);
    let nextChar;
    let index = 1;
    while (range > 0) {
        nextChar = getLowercaseChar(charCode + index);
        if (!ignoreList.includes(nextChar)) {
            range--;
        }
        index++;
    }
    return nextChar;
}

function getLowercaseChar(charCode) {
    const maxCharCode = 122;
    const minCharCode = 96;
    let newCharCode = charCode;
    if (charCode > maxCharCode) {
        const diff = charCode - maxCharCode;
        newCharCode = minCharCode + diff;
    }
    const char = String.fromCharCode(newCharCode);
    return char;
}

convert("aukks", "wbqd", 5);
