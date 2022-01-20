var a;
a = true;
console.log(a);
var b;
b = "teja";
console.log(b);
var arr;
arr = [1, 2, 3];
console.log(arr);
var arr1;
arr1 = ["charan", 1, true, null];
console.log(arr1);
//class
/*
syntax:-
class class_name{
    properties
}
*/
//class without constructor
var user = /** @class */ (function () {
    function user() {
        this.firstName = "TestYantra";
    }
    user.prototype.display = function () {
        console.log("inside the display function");
    };
    return user;
}());
var obj = new user;
console.log(obj.display());
console.log(obj.firstName);
console.log(obj.lastName = "Teja");
//class with constructor
var person = /** @class */ (function () {
    function person(name, id) {
        this.name = name;
        this.id = id;
    }
    return person;
}());
var p = new person("Charan", 25);
console.log(p.name);
var honda = /** @class */ (function () {
    function honda() {
    }
    honda.prototype.result = function () {
        return "abcd";
    };
    return honda;
}());
var c = new honda();
var x = c.result();
console.log(x);
//using interface as datatype
var c2 = {
    brand: "honda",
    price: 200000,
    result: function () {
        return "city";
    }
};
console.log(c2.brand);
console.log(c2.price);
console.log(c2.result());
/*
//enum is a set of named constants in type script
->  in our application if we have a set of constants which we need to use multiple times during the execution
then we can group together all the constants inside one enumerated datatype or enum datatype
-> its like logically grouping all constants and put in a enum type datatype
-> in enum we should give same datatype constants only.
-> we cannont write one enum inside another enum
*/
var books;
(function (books) {
    books[books["book1"] = 10] = "book1";
    books[books["book2"] = 20] = "book2";
    books[books["book3"] = 30] = "book3";
    books[books["book4"] = 40] = "book4";
})(books || (books = {}));
function displayBooks() {
    if (true) {
        return books.book1;
    }
}
console.log(displayBooks());
//if in case of number value if u dont assign any value to remaining then those will be incremented by 1
var book;
(function (book) {
    book[book["book1"] = 10] = "book1";
    book[book["book2"] = 11] = "book2";
    book[book["book3"] = 12] = "book3";
    book[book["book4"] = 13] = "book4"; //=book3+1
})(book || (book = {}));
console.log(book.book3); //12
//Generics:- if we want any function that will take dynamic value and retun them we use this. here value can be any data type  
//any function will have
//any function will have function definition,arg,datatype,name of func
//to pass dynamic(diff datatype)values we use Generics
//t means type here. t will be decided based on the item which u give
function displayValue(item) {
    return item;
}
console.log(displayValue("technoelevate"));
console.log(displayValue(11));
function displayValue1(item1, item2) {
    return item1 || item2;
}
console.log(displayValue1(11, 2));
