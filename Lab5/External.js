 // Part 1 Array 
 //Q1
var numbers = [3, 1, 2, 4, 3, 5, 1];
console.log("Original Array:");
console.log(numbers);
console.log("============================");
 

function rmDuplicates(arr) {

    var unique = [];

    for (var i = 0; i < arr.length; i++) {

        if (!unique.includes(arr[i])) {

            unique.push(arr[i]);

        }
    }
    return unique;
}

var uniqueNumbers = rmDuplicates(numbers);

console.log("Without Duplicates:");
console.log(uniqueNumbers);
console.log("============================");
 
 


uniqueNumbers.sort(function (a, b) {
    return a - b;
});

console.log("Sorted:");
console.log(uniqueNumbers);
console.log("============================ ");;
 



function greaterThan50(arr) {

    var result = [];
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 50) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log("Greater Than 50 (User Function):");
console.log(greaterThan50(uniqueNumbers));
console.log("============================ ");
 


var res  = uniqueNumbers.filter(function (value) {

    return value > 50;

});
console.log("Greater Than 50 (Filter):");
console.log(res);
console.log("============================ ");
 



function maxNumber(arr) {

    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {

        if (arr[i] > max) {

            max = arr[i];
        }
    }
    return max;
}
console.log("Max = " + maxNumber(uniqueNumbers));
console.log("============================ ");
 
 


function minNumber(arr) {
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log("Min = " + minNumber(uniqueNumbers));
console.log("============================ ");
 
 
//Q2
function sumAll(numbersArray) {

    var expression = numbersArray.join("+");

    return eval(expression);

}
console.log(sumAll([3, 1, 4, 5, 2]));
console.log("============================ ");
 


function productAll(numbersArray) {

    var expression = numbersArray.join("*");

    return eval(expression);

}
console.log(productAll([3, 1, 4, 5, 2]));
console.log("============================ ");
 



function sumAllArguments() {

    var arr = [];

    for (var i = 0; i < arguments.length; i++) {

        arr.push(arguments[i]);
    }
    return eval(arr.join("+"));
}
console.log(sumAllArguments(3, 1, 4, 5, 2));
console.log("============================ ");
 


function productAllArguments() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    return eval(arr.join("*"));

}
console.log(productAllArguments(3, 1, 4, 5, 2)); 

console.log("=====================================================================");



// Part 2 Strings

var text = prompt("Enter a sentence");

if (text === null) {

    alert("Cancelled");

} else {

    text = text.trim();
    if (text === "" || !isNaN(text)) {
        alert("Invalid Input");
    } else {

        var words = text.split(" ");
        for (var i = 0; i < words.length; i++) {

            if (words[i] !== "") {

                words[i] =
                    words[i].charAt(0).toUpperCase() +
                    words[i].slice(1).toLowerCase();
            }
        }

        var result = words.join(" ");

        console.log("Capitalized:");
        console.log(result);
console.log("============================ ");
        
        var longest = words[0];
        for (var j = 1; j < words.length; j++) {
            if (words[j].length > longest.length) {

                longest = words[j];
            }
        }
        console.log("Longest Word:");
        console.log(longest);
    }
}

 
 