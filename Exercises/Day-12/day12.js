// *******************💻 Exercises ****************************


// *****************Exercises: Level 1 ***************************

// 1.Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let personIncome = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let totalIncome = /\d+/g

let annualIncome = personIncome.match(totalIncome).map(x => parseFloat(x)).reduce((sum, x) => sum + x, 0)

console.log(annualIncome)


// 2.The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

let numPattern = new RegExp(/\-?[0-9]+/,'g');

let sortedPoints = points.map(x => parseFloat(x.match(numPattern)[0])).sort((a,b) => a - b)

let distance = Math.abs(sortedPoints[0] - sortedPoints[sortedPoints.length -1])

console.log(distance)

// 1. Write a pattern which identify if a string is a valid JavaScript variable

const is_valid_variable = (string) => {
    let validator = /^[$|_|a-z|A-Z|][1-9|a-z|A-Z|_]*?/
    return Boolean(string.match(validator));

}


console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))


// **************************************Exercises: Level 2******************************************************

// 1.Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

let  paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const tenMostFrequentWords = (str, count) => {
 let validator = /[a-z|A-Z]*/g;
 
 return Object.entries(str.match(validator).reduce((dict, word) => {
    dict[word] = (dict[word] || 0) + 1;
    return dict
 },{})).sort((a,b) => b[1] - a [1]).slice(0,count);

}

console.log(tenMostFrequentWords(paragraph,10)) 


// ***************************Exercises: Level 3*************************************************************

// 1.Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

let  sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`


const cleanText = (text) => {
    let validator = /[~|@|#|!|$|%|\^|&|;|\\?]/g;
    let cleanSentence = text.replace(validator, '')
    console.log(cleanSentence)
    return tenMostFrequentWords(cleanSentence);
}

console.log(cleanText(sentence))