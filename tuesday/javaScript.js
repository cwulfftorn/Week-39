//JavaScript exercises - Period 2 Day-1

//Exercise 1.a) 
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
function witha(name) {
    if (name.includes('a'))
        return name;
}
//console.log(names.filter(witha));//works

//Exercise 1.b 
function reverse(name) {
    return name.split('').reverse().join('');
}
//console.log(names.map(reverse));//works

//Exercise 2.a
function myFilter(array, callback) {
    var filtered = [];
    array.forEach(element => {
        if (!(callback(element) == undefined)) { //so that the function does not add undefined elements
            filtered.push(callback(element));
        }
    });
    return filtered;
}
//console.log(myFilter(names, witha));//works

//Exercise 2.b
function myMap(array, callback) {
    var mapped = [];
    array.forEach(element => {
        if (!(callback(element) == undefined)) { //so that the function does not add undefined elements
            mapped.push(callback(element));
        }
    });
    return mapped;
}
//console.log(myMap(names, reverse));//works

//Exercise 3
Array.prototype.myFilter = function (callback) {
    var filtered = [];
    this.forEach(element => { //using this
        if (!(callback(element) == undefined)) { //so that the function does not add undefined elements
            filtered.push(callback(element));
        }
    });
    return filtered;
}
//console.log(names.myFilter(witha));//works

Array.prototype.myMap = function (callback) {
    var mapped = [];
    this.forEach(element => { //using this
        if (!(callback(element) == undefined)) { //so that the function does not add undefined elements
            mapped.push(callback(element));
        }
    });
    return mapped;
}
//console.log(names.myMap(reverse));//works

//Exercise 4.a
var numbers = [1, 3, 5, 10, 11];
var result = [4, 8, 15, 21, 11];
function addnext(element, index, array) {
    if (index < array.length - 1)
        return element + array[index + 1];
    else return element;
}
//console.log(numbers.map(addnext));//works

//Exercise 4.b
var html = names.map(name => "<a href=\"\">" + name + "</a>");
html.join(""); //reduces array to single String
html.unshift("<nav>"); //adds element to start of array
html.push("</nav>"); //adds element to end of array
//console.log(html);

//Exercise 4.c
var persons = [
    { name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }
];
const td = persons
    .map(el => "\n<tr><td>" + el.name + "</td><td>" + el.phone + "</td></tr>")
    .join("");
const htmlTable = 
    "<table>\n<tr><th> Name </th><th> Phone </th></tr>" + td + "\n</table";
//console.log(htmlTable);//works

//Exercise 4.d
//Create a single html-file and test the examples
//document.getElementById("names").innerHTML = html;//works
//document.getElementById("names").innerHTML = makeTable(names);//works

//Exercise 4.e
//Add a button with a click-handler and use the filter method to find only names containing the letter 'a'
//document.getElementById("button").onclick = witha(names);

//Exercise 5.a
var all = ["Lars", "Peter", "Jan", "Bo"];
//console.log(all.join(","));//works
//console.log(all.join(" "));//works
//console.log(all.join("#"));//works

//Exercise 5.b
var numbers = [2, 3, 67, 33];
function getSum(total, number) {
    return total + number;
}
//console.log(numbers.reduce(getSum,0));//works, reduces the array to a single value

//Exercise 5.c
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
];
const avg = members.reduce((acc, p, idx, arr) => {
    //console.log('idx', idx, 'acc', acc, 'p.age', p.age);//works
    if (idx === arr.length - 1)
        return (acc + p.age) / arr.length;
    return acc + p.age;
}, 0);
//console.log(avg);//works


//Exercise 5.d
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
const numberOfVotes = votes.reduce((acc, el) => {
    if (acc[el]) 
        acc[el]++;
    else
        acc[el] = 1;
    return acc;
}, {});
console.log(numberOfVotes);