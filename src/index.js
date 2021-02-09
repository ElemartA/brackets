module.exports = function check(str, bracketsConfig) {
    const arrayСombined = [];
    bracketsConfig.forEach(arrayElement => arrayСombined.push(arrayElement.join('')));
    const newStr = (str) => {
        let strComparison = str;
        for (let i = 0; i < arrayСombined.length; i++) {
            strComparison = strComparison.replace(arrayСombined[i], '')
        }
        return str === strComparison ? strComparison : newStr(strComparison)

    }
    const result = newStr(str);
    return result === '' ? true : false;
}
