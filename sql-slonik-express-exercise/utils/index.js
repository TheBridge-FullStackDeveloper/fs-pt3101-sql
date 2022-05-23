const firstLetterToUpper = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
};

module.exports = {
    firstLetterToUpper,
}