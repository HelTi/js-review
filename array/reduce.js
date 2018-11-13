[1, 2, 3, 4, 5].reduce(function (accumlator, currentValue, currentIndex, arry) {
    console.log(accumlator, currentValue, currentIndex, arry);
}, 0)

var total = [0, 1, 2, 3].reduce((sum, value) => sum + value);
console.log(total);
var flattened = [
    [0, 1],
    [2, 3],
    [4, 5, 6]
].reduce(function (a, b) {
    return a.concat(b);
}, []);
console.log(flattened);
//计算数组中每个元素出现的次数
console.log('计算数组中每个元素出现的次数')
var names = ['Alice', 'Bob', 'Tiff', 'B', 'B', 'Alice'];

function aitemCount(arr) {
    var result = {};
    arr.map((i, j) => {
        var count = 0;
        for (var isName of names) {
            if (i == isName) {
                result[i] = ++count;
            }
        }
    })
    return result
}
// console.log(result);
//2.reduce版
function reducCountArray(arr) {
    var countedNames = arr.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++
        } else {
            allNames[name] = 1;
        }
        return allNames
    }, {})
    return countedNames;
}
var rarr = ['a', 'a', 'b', 'c'];
console.log(reducCountArray(rarr))

/**
 * example:计算分数
 */

var porprotion = {
    chinese: .3,
    english: .2,
    math: .5
}

var studentScore = [{
        score: 90,
        subject: 'chinese'
    },
    {
        score: 90,
        subject: 'english'
    },
    {
        score: 100,
        subject: 'math'
    }
]

var totalScore = studentScore.reduce((preValue, currentValue) => {
    return currentValue.score * porprotion[currentValue.subject] + preValue
}, 0)

console.log('totalScore', totalScore);

/**
 * example:计算字符串中字符出现的次数
 */

var englishStr = 'aabcddebdde';
var strCount = englishStr.split('').reduce((res, cur) => {
    res[cur] ? res[cur]++ : res[cur] = 1
    return res;
}, {})

console.log(strCount)