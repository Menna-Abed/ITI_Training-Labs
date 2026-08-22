// Q4
        var result1 = Number(num1) + Number(num2);
        console.log(result1.toFixed(6));

// Q5
// print num1 + num3

var result2 = num1 + num3;

console.log(result2);


// ==========================================
// Q6
// declare x without initialization

var x;


// ==========================================
// Q7
// multiply num1 with x

var result3 = num1 * x;

console.log(result3);


// ==========================================
// Q8
// print all previous results

console.log("Result1 = " + result1.toFixed(6));
console.log("Result2 = " + result2);
console.log("Result3 = " + result3);


// ======================================================
// Receive 2 values from user

var value1 = prompt("Enter First Value");
var value2 = prompt("Enter Second Value");

if (!isNaN(value1) && !isNaN(value2) && value1 !== "" && value2 !== "") {

    console.log(Number(value1) + Number(value2));

} else {

    console.log(String(value1) + String(value2));

}


// ======================================================
// Receive 5 numbers

for (var i = 1; i <= 5; i++) {

    var num = Number(prompt("Enter Number " + i));

    console.log(num.toFixed(5));

}


// ======================================================
// Student Degree

var degree = Number(prompt("Enter Student Degree"));

if (degree >= 90 && degree <= 100) {

    console.log("%cGrade: A  Level: Excellent", "color:green;font-size:18px;");

}

else if (degree >= 80) {

    console.log("%cGrade: B  Level: Very Good", "color:blue;font-size:18px;");

}

else if (degree >= 70) {

    console.log("%cGrade: C  Level: Good", "color:orange;font-size:18px;");

}

else if (degree >= 60) {

    console.log("%cGrade: D  Level: Pass", "color:brown;font-size:18px;");

}

else {

    console.log("%cGrade: F  Level: Fail", "color:red;font-size:18px;");

}


// ======================================================
// Price with Tax

var price = Number(prompt("Enter Price"));

var totalPrice = price + (price * 0.14);

console.log("Total Price = " + totalPrice.toFixed(2)); 