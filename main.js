function countD(str) {
    const test = str.match(/d/gi);
    return test ? test.length : 0;
}

console.log(countD("My friend Dylan got distracted in school."));
console.log(countD("Debris was scattered all over the yard."));
console.log(countD("The rodents hibernated in their den."));

function convertToScotland(str) {
    return str.replace(/[ueoai]/gi, "e").toUpperCase();
}

console.log(convertToScotland("hello world"));
console.log(convertToScotland("Mr. Fox was very naughty"));
console.log(convertToScotland("Butterflies are beautiful!"));

function owofied(str) {
    return str.replace(/i/g, "wi").replace(/e/g, "we") + " owo";
}

console.log(owofied("I'm gonna ride 'til I can't no more"));
console.log(owofied("Do you ever feel like a plastic bag"));
console.log(owofied("Cause baby you're a firework"));

function slug28Tech(str) {
    const test = str.match(/[^/]/);
    return test ? test : "không có"
}

console.log(slug28Tech("https://28tech.com.vn/lap-trinh-c-co-ban-toi-nang-cao"));
console.log(slug28Tech("https://28tech.com.vn/lap-trinh-front-end"));
console.log(slug28Tech("https://28tech.com.vn/lap-trinh-back-end-nodejs"));

function lettersOnly(str) {
    return str.replace(/[^a-z]/gi, "");
}

console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));
console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4"));
console.log(lettersOnly("^U)6$22>8p)."));

function findTime(str) {
    const test = str.match(/(?<!\d)\d{2}:\d{2}(?!\d)/g);
    return test ? test : "không có";
}

console.log(findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456"));
console.log(findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456. Bữa tối ăn lúc 20:30 ở phòng 222:333"));
console.log(findTime("ở phòng 222:999 22:99 a23:39a"));
console.log(findTime("ở phòng 222:999"));

function chanLe(str) {
    return /[02468]$/.test(str);
}

console.log(chanLe("2341"));
console.log(chanLe("132"));
console.log(chanLe("29"));
console.log(chanLe("5578"));

function isValid(str) {
    return /^\d{5}$/.test(str);
}

console.log(isValid("59001"));
console.log(isValid("853a7"));
console.log(isValid("732 32"));
console.log(isValid("393939"));

function isJS(str) {
    return /\.jsx?$/.test(str);
}

console.log(isJS("/users/user.jsx"));
console.log(isJS("/users/user.js"));
console.log(isJS("/users/user.ts"));
console.log(isJS("/users/user.j"));

function getDecimalPlaces(str) {
    const test = str.match(/\.(\d+)/);
    return test ? test[1].length : 0;
}

console.log(getDecimalPlaces("43.20"));
console.log(getDecimalPlaces("400"));
console.log(getDecimalPlaces("3.1"));
console.log(getDecimalPlaces("3.33"));

function capitalToFront(str) {
    const hoa = str.match(/[A-Z]/g) || [];
    const thuong = str.match(/[a-z]/g) || [];
    return hoa.join("") + thuong.join("");
}

console.log(capitalToFront("hApPy"));
console.log(capitalToFront("moveMENT"));
console.log(capitalToFront("shOrtCAKE"));
console.log(capitalToFront("hihi"));

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
console.log(validatePIN(""));
console.log(validatePIN("123456"));

function splitCode(str) {
    const test = str.match(/^([A-Za-z]+)(\d+)$/);
    return [test[1], Number(test[2])];
}

console.log(splitCode("TEWA8392"));
console.log(splitCode("MMU778"));
console.log(splitCode("SRPE5532"));

function variableValid(str) {
    return /^[A-Za-z][A-Za-z0-9_]*$/.test(str);
}

console.log(variableValid("fullName"));
console.log(variableValid("full_name"));
console.log(variableValid("fullname"));
console.log(variableValid("2fullName"));
console.log(variableValid("full-name"));
console.log(variableValid("full name"));
console.log(variableValid("FullName"));

function isValidHexCode(str) {
    return /^#[0-9A-Fa-f]{6}$/.test(str);
}

console.log(isValidHexCode("#CD5C5C"));
console.log(isValidHexCode("#EAECEE"));
console.log(isValidHexCode("#eaecee"));
console.log(isValidHexCode("#CD5C58C"));
console.log(isValidHexCode("#CD5C5Z"));
console.log(isValidHexCode("#CD5C&C"));
console.log(isValidHexCode("CD5C5C"));

function insertWhitespace(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

console.log(insertWhitespace("SheWalksToTheBeach"));
console.log(insertWhitespace("MarvinTalksTooMuch"));
console.log(insertWhitespace("TheGreatestUpsetInHistory"));

function countVowels(str) {
    const test = str.match(/[aeiou]/gi);
    return test ? test.length : 0;
}

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));

function bomb(str) {
    return /bomb/i.test(str) ? "Duck!!!" : "There is no bomb, relax.";
}

console.log(bomb("There is a bomb."));
console.log(bomb("Hey, did you think there is a bomb?"));
console.log(bomb("This goes boom!!!"));

function removeVowels(str) {
    const test = str.replace(/[aeiou]/gi, "");
    return test;
}

console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
console.log(removeVowels("We're gonna build a wall!"));
console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"));

function firstVowel(str) {
    const test = str.search(/[aeiou]/i);
    return test;
}

console.log(firstVowel("apple"));
console.log(firstVowel("hello"));
console.log(firstVowel("STRAWBERRY"));
console.log(firstVowel("pInEaPPLe"));

function hashPlusCount(str) {
    const hashes = (str.match(/#/g) || []).length;
    const pluses = (str.match(/\+/g) || []).length;
    return [hashes, pluses];
}

console.log(hashPlusCount("###+"));
console.log(hashPlusCount("##+++#"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(""));

function convertBinary(str) {
    return str.replace(/[a-m]/gi, '0').replace(/[n-z]/gi, '1');
}

console.log(convertBinary("house"));
console.log(convertBinary("excLAIM"));
console.log(convertBinary("moon"));

function makeTitle(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}

console.log(makeTitle("This is a title"));
console.log(makeTitle("capitalize every word"));
console.log(makeTitle("I Like Pizza"));
console.log(makeTitle("PIZZA PIZZA PIZZA"));

function removeABC(str) {
    if (!/[abc]/i.test(str)) return null;
    return str.replace(/[abc]/gi, "");
}

console.log(removeABC("This might be a bit hard")); 
console.log(removeABC("hello world!"));
console.log(removeABC(""));

function dashed(str) {
    return str.replace(/[aeiou]/gi, c => `-${c}-`);
}

console.log(dashed("28Tech")); 
console.log(dashed("Carpe Diem")); 
console.log(dashed("Fight for your right to party!")); 

function replaceVowel(str) {
    return str.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
}

console.log(replaceVowel("karachi")); 
console.log(replaceVowel("chembur")); 
console.log(replaceVowel("khandbari"));

function countAll(str) {
    const letters = (str.match(/[a-z]/gi) || []).length;
    const digits = (str.match(/[0-9]/g) || []).length;
    return { "LETTERS": letters, "DIGITS": digits };
}

console.log(countAll("Hello World"));
console.log(countAll("H3ll0 Wor1d")); 
console.log(countAll("149990"));

function countAdverbs(sentence) {
    const matches = sentence.match(/\b\w+ly\b/gi);
    return matches ? matches.length : 0;
}

console.log(countAdverbs("She ran hurriedly towards the stadium.")); 
console.log(countAdverbs("She ate the lasagna heartily and noisily.")); 
console.log(countAdverbs("He hates potatoes."));
console.log(countAdverbs("He was happily, crazily, foolishly over the moon.")); 

function lettersOnly(str) {
    const test = str.match(/^[a-z\s]+$/);
    return test ? true : false;
}

console.log(lettersOnly("JAVACRIPT"));
console.log(lettersOnly("javascript")); 
console.log(lettersOnly("12321313"));
console.log(lettersOnly("i have spaces"));
console.log(lettersOnly("i have numbers(1-10)"));
console.log(lettersOnly(""));

function alphanumericRestriction(str) {
    if (!str) return false; 
    if (/\s/.test(str)) return false; 
    return /^[a-z]+$/i.test(str) || /^[0-9]+$/.test(str);
}

console.log(alphanumericRestriction("Bold"));
console.log(alphanumericRestriction("123454321"));
console.log(alphanumericRestriction("H3LL0"));
console.log(alphanumericRestriction("ed@bit"));
console.log(alphanumericRestriction("hello hi"));