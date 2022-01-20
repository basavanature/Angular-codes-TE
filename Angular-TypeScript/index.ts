var a:boolean
a=true
console.log(a);

var b:any
b="teja"
console.log(b);

var arr:number[]
arr=[1,2,3]
console.log(arr);

var arr1:any[]
arr1=["charan",1,true,null]
console.log(arr1);

//class
/*
syntax:-
class class_name{
    properties
}
*/
//class without constructor
class user{
    firstName:string="TestYantra"
    lastName:string
    id:number
    display(){
        console.log("inside the display function");
    }
}

var obj=new user
console.log(obj.display());
console.log(obj.firstName);
console.log(obj.lastName="Teja");


//class with constructor
class person{
    name:string
    id:number
    constructor(name,id){
        this.name=name
        this.id=id
    }
}
var p=new person("Charan",25)
console.log(p.name);

//main purpose of interface in any object oriented prg lang is to create standardisation
interface car{
    brand:string
    price:number
    result():string
}
class honda implements car{
    brand: string;
    price: number;
    result(): string {
        return "abcd"
    }
}

var c =new honda()
var x=c.result()
console.log(x);

//using interface as datatype

var c2:car={
    brand:"honda",
    price:200000,
    result(){
        return "city"
    }
}
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

enum books{
    book1=10,
    book2=20,
    book3=30,
    book4=40
}

function displayBooks():books{
    if(true){
        return books.book1
    }
}
console.log(displayBooks());

//if in case of number value if u dont assign any value to remaining then those will be incremented by 1

enum book{
    book1=10,
    book2,//=book1+1
    book3,//=book2+1
    book4//=book3+1
}
console.log(book.book3);//12

//Generics:- if we want any function that will take dynamic value and retun them we use this. here value can be any data type  
//any function will have
//any function will have function definition,arg,datatype,name of func
//to pass dynamic(diff datatype)values we use Generics
//t means type here. t will be decided based on the item which u give
function displayValue<t>(item:t):t{
    return item
}

console.log(displayValue("technoelevate"));
console.log(displayValue(11));
//if u give multiple arguments also u can only return one value
function displayValue1<t>(item1:t,item2:t):t{
    return item1
}
console.log(displayValue1(11,2));

