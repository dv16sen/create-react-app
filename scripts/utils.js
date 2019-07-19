const joinStrings = (strings, string) => strings + string;

const decapitalizeFirstLetter = (string = "") => {
    let firstLetter = string.charAt(0).toLowerCase();
    let restOfString = string.substring(1, string.length);
    return `${firstLetter}${restOfString}`;
};

module.exports = {
    joinStrings,
    decapitalizeFirstLetter
};