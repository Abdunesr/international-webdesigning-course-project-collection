/*console.log(`Hello`);
console.log(`i like pizza`);
let a=`hanim`;
let b=`bura`;
console.log(`my sister name is ${a} suleyman`);
let firstname=`abdelah`;
console.log(`my name is ${firstname} Nesedin`)
*/
/* 1
accepting a name from from user and diaplaying it 
let username;
document.getElementById('mysubmit').onclick=function(){
 username=document.getElementById('mytext').value;
 document.getElementById('myp').innerHTML='the name you enterd is '+username;
}
*/
/* 2
calculating the circumfrence using radius
const pi=3.14;
let radius;
let circumfrence;
document.getElementById('but').onclick=function(){
    radius=document.getElementById('mytext').value;
    radius=Number(radius);
    circumfrence=2*pi*radius;
    document.getElementById('result').textContent='the circumfrence is  '+circumfrence+'cm';
    
}
*/
/* 3
increase decrease and reset button
let count =document.getElementById('count');
let increase =document.getElementById('increase');
let decrease =document.getElementById('decrease');
let counts=0;
increase.onclick=function(){
    counts++;
    document.getElementById('count').textContent=counts;
}
decrease.onclick=function(){
    counts--;
    document.getElementById('count').textContent=counts;
}
reset.onclick=function(){
    counts=0;
    document.getElementById('count').textContent=counts;
}
*/
/* 4
number gussing game
let but=document.getElementById('but');
const randomnum= Math.floor(Math.random() * 100)+1;

console.log(randomnum)
 but.onclick=function(){
    let guss=document.getElementById('guss').value;
    console.log(guss)

   
    if(guss >randomnum){
        document.getElementById('result').textContent='you are too high';
    }
    else if(guss <randomnum){
        document.getElementById('result').textContent='you are too low';
    }
    else{
        document.getElementById('result').textcontent='congratulation you get the answer';
    }
}
 
*/
/*  5
const btn=document.getElementById('btn');
const lable=document.getElementById('lable');
const max=6;
const min=1;
let randomnum;
btn.onclick=function(){
    randomnum=Math.floor(Math.random()*6);
    console.log(randomnum);
    lable.textContent=randomnum;
}
*/

/*   6
let mycheckbox=document.getElementById('mycheckbox');
let myvisa= document.getElementById('myvisa');
let mymaster=document.getElementById('mymaster');
let mypaypal=document.getElementById('mypaypal');
let result1=document.getElementById('result1');
let result2=document.getElementById('result2');
let submit=document.getElementById('submit');
submit.onclick=function(){
    if(mycheckbox.checked){
        result1.textContent="you are subscribed this page";
    }
    else{
        result1.textContent="you are not subscribed this page";
    }
    if(myvisa.checked){
        result2.textContent="you are paying with visa card";
    }
    else if(mymaster.checked){
        result2.textContent="you are paying with master card"
    }
    else if(mypaypal.checked){
        result2.textContent="you are paying with paypal";
    }
    else{
        result2.textContent="you are not paying yet";
    }
}
*//* 7
let mysubmit=document.getElementById('mysubmit');
let myradio1=document.getElementById('myradio');
let myradio2=document.getElementById('myradio1');
let mytext=document.getElementById('mytext');
 let temp=0;
 let cel=0;
 let far =0;
 mysubmit.onclick=function(){
    temp=mytext.value;
    if(myradio1.checked){
       far=9/5*(temp-32);
        document.getElementById('result').textContent=far+"degree farhanite";
    }
    else if(myradio2.checked){
        cel=5/9*(temp-32);
        document.getElementById('result').textContent=cel+"degree celicius";
    }
    else{
        document.getElementById('result').textContent="please choose the conversion methods"
    }
 }
 *//*
let username=window.prompt("ENTER YOURE USER NAME");
 username=username.trim();
 let letter=username.charAt(0);
 letter=letter.toUpperCase();
 let extra=username.slice(1);
 extra=extra.toLowerCase();
 username=letter+extra;
 console.log(username);
 */
/* login credential checker 
let login=false;
let username;
let password;
 while(!login){
    username=window.prompt("enter your username");
    password=window.prompt("enter youre password");
    if(username == "ABDELAH" && password == "hanim"){
        login=true;
        console.log("you are logged in");

    }
    else{
        console.log("invalid credential");
    }


 }
 */
/* number gussing game 
let MAX=100;
let MIN=1;
const randomnum=Math.floor(Math.random()*(MAX-MIN)+1);
let running=true;
while(running){
    let guss=window.prompt(`ENTER YOUR GUSS BETWEEN ${MIN}- ${MAX} `);
     guss=Number(guss);
     if(isNaN(guss)){
        console.log(`invalid input!`);
     }
     else if(guss>100 || guss <0){
        console.log( `you entered above or below the required situation`);
     }
     else{
        if(guss>randomnum){
            console.log(`its too high `);
        }
        else if(guss<randomnum){
            console.log(`its too low please try agiain`);
        }
        else{
            console.log(`congratulation you got the answer`);
            running=false;
        }
     }
    
}10
*/
/* spread operator .... and reset operators
let  fruits=["apple","orange","banana"];
let vegtable=["carrot", "potato"];
let foods=[...fruits, ...vegtable]
let newfruits=[...fruits];
console.log(foods) 
reset operator 
 function openfrige(...foods){
    console.log(foods);
} 
const foodd=["pasta","mocorone","meat"];
openfrige(food1,food2,food3,food4,...foodd);

function getfood(...fodds){
    console.log(...fodds)

}
const food1="pizza";
const food2="hamburger";
const food3="hotdog";
const food4="shiro";

const food=getfood(food1,food2,food3,food4);
console.log(food) 
function sum(...numbers){
    console.log(...numbers)
    console.log(numbers)
    let result=0;
    for(number of numbers){
        result+=number;
    }
    console.log(`the total is equal to ${result}`)
}
sum(1,2,3,9,10,20,50);

function combine(...names){
    return names.join("-");

}
let fullname=combine("ABDELAH","NESREDIN","NASIR");
console.log(fullname);
*/
/*  password generator  using number uppercase and lower case and symbol letters
function generatepassword(length,includelowecase,includeuppercase,includenumbers,includesymbols){

const lowerchar="abcdefghijklmnopqrstuvwxyz";
const upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number="0123456789";
const symbol="!@#$%^&*()_-+\/";

let allowchar="";
let password="";
 allowchar+=includelowecase ? lowerchar:"";
 allowchar+=includeuppercase? upperchar:"";
 allowchar+=includenumbers?  number:"";
 allowchar+=includesymbols? symbol:"";
 if(length<=0){
    console.log( `at least the password length must be 1 `);
 }
 if(allowchar.length=== 0){
    console.log(`youre password atlease must contain 1 char`)
 }  
  for(let i=0; i<length;i++){
    const randomindex=Math.floor(Math.random()*76);
    password+=allowchar[randomindex];

    
  }
console.log(password)

    return password;
}




const passwordlength=12;
const includelowecase=true;
const includeuppercase =true;
const includenumbers=true;
const includesymbols=true;
const password=generatepassword(passwordlength,
                                includelowecase,
                                includeuppercase,
                                includenumbers,
                                 includesymbols)
console.log(`generated password :${password}`)


*/
/* call back operations a function that is passed as an argument to another function 
  used to handle asynchronous operations 
  1,reading a file
  2 ,network requests
  3, intracting with databases
    "hey when you are done ,call this next"
sum(display,3,4);
function sum(callback,a,b){
    let result =a+b;
    callback(result);
}
function display(result){
    console.log(result);
}
*/

/*  
  Dice Game  id 10
 function ROLLDICE(){
    const numofdice=document.getElementById('numofdice').value;
    const diceresult=document.getElementById('diceresult');
    const diceimages=document.getElementById('diceimages');
    const values=[];
    const images=[];
    for(let i=0;i<numofdice;i++){
        const value =Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="${value}.png">`);
    }
    diceresult.textContent= `dice: ${values}`;
    diceimages.innerHTML=images;      
}

 */

/* foreach() =method used to iterate over the elements of an array and apply a specified function (callback)
   to each elemnt 
   array.foreach(callback);
   element ,index,array are providede by default 
by default when the function pass throgh foreach method elment ,index ,array;

let numbers=[1,2,3,4,5];
numbers.forEach(square); 
numbers.forEach(display);
function double(element,index,array){
    array[index]=element *2;
}
function triple(element,index,array){
    array[index]=element *3;
}
function square(element,index,array){
    array[index]=Math.pow(element,2);

}
function display(element){
    console.log(element);
}
let fruits =["Apple","Orange","banana","conconat"];
fruits.forEach(capitalize);
fruits.forEach(display);
function uppercase (element,index,array){
    array[index]=element.toUpperCase();
}
function lowercase(element,index,array){
    array[index]=element.toLowerCase();
}
function capitalize(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}
 function display(element){
    console.log(element);
 }
 ----
*/




/*  .map() =accepts a callback and applies that function to eaxh elment of array,then return a new array
const numbers=[1,2,3,4,5];
const squares=numbers.map(square);
console.log(squares);
function square(element){
    return Math.pow(element,2)
} 

const student=["Abdelah","Biruk","fuad"];
const students=student.map(lowercase);
console.log(students)
function uppercase(element){
    return element.toUpperCase();
}
function lowercase(element){
    return element.toLowerCase();
}
const dates=["2016-1-10","2017-2-20","2018-3-30"];
const display=dates.map(formatdates);
console.log(dates);
console.log(display)

 function formatdates(element){
    const parts=element.split("-");
    return `${parts[2]}/${parts[1]}/ ${parts[0]}`;
 }
*/
/*  .filter () =creates a new array by filtering out elemnets bsed on diffrent conditions
let numbers=[1,,2,3,4,5];
let evennum=numbers.filter(iseven);
let oddnum=numbers.filter(isodd);
console.log(oddnum); 
console.log(evennum);
function iseven(element){
    return element %2===0;
}
function isodd(element){
    return element %2 !==0;
}
const ages =[16,17,18,19,20,60];
const addults=ages.filter(isaddult);
console.log(addults);

function isaddult(elemnt){
    return elemnt>18;
}
const words =["apple" ," bannana","orange","kiwi","hippopothamus","coconut"];
const shortwords=words.filter(getshortword);
const longwords=words.filter(getlongword);
console.log(longwords);
console.log(shortwords);




function getshortword(element){
    return element.length <=6;//if its true return;
}
function getlongword(element){
    return element.length >6;//if its true return;
}
*/
/*  .reduce()=reduce the elemnets of an array to a single value
const prices=[5,30,10,25,15,20];
const total =prices.reduce(sum);
console.log(`$${total}`);
function sum (accumulator ,element){
    return accumulator + element;
}
 to find the maximum and the minimum of a values
const grade=[ 75,50,90,80,95];
const max=grade.reduce(getmax);
console.log(max);
const min=grade.reduce(getmin);
console.log(min);
function getmax(accumulator,element){
    return Math.max(accumulator,element);

}
function getmin(accumulator,element){
    return Math.min(accumulator,element);

}*/
/*  function expression is a way in which to define the function as values or variables 
the function declaration is for beginners and it used for proffessional coder
inorder to declare the function separatly instead we can insert 
 the function in to the brackets of the builtin methods;this method is called function expression 


function hello(){
    console.log("Hello")
}
setTimeout(hello,3000)
setTimeout(function(){
    console.log("Hello");
},3000);

const numbers=[1,2,3,4,5,6]
const squares= numbers.map(function (elemnet){
    return Math.pow(elemnet,2);
});
 console.log(squares);
 const cubs=numbers.map( function (elemnet){
    return Math.pow(elemnet,3);
 });
 console.log(cubs);

*/
  

/* arrow functions = a concise way to write a function expression good for simple functions that you use only once parameter 



const hello=(name,age)=>{console.log(`hello ${name}`)
                        console.log(`you are ${age} years old`)};
hello("abdelah",20); 
setTimeout(() => console.log("hello"),3000);

const numbers=[1,2,3,4,5,6];

  const squares= numbers.map((element)=> Math.pow(element,2));
  console.log(squares);

  const cubes=numbers.map((element)=> Math.pow(element,3));
  console.log(cubes);
 
  const evennum=numbers.filter((elements)=>   elements %2===0 );
  const total = numbers.reduce((acumulator,elements) => acumulator + elements);
   console.log(total)
   */
   
/*  objects in javascript
  const person1 = {
    firstname:"abdelah",
    lastname:"nesredin",
    age:30,
    isemployed:true, 
    sayhello:()=> 
        console.log("hi i am abdelah ")
    
  }
  const person2={
    firstname:"hanim",
    lastname:"suleyman",
    age:6,
    isemployed:false,

  }
  person1.sayhello(); */
 /* this = used as refrence to objects where this is used the object dpends on the immediate context 
 
 const person1 ={
    name: "abdelah",
    favfood: "shiro",
    sayhello: function(name){console.log(`hi i am ${this.name}`)},
    eat: () => {console.log(`${this.name} is eating ${this.favfood}`)}
 
}
 
person1.sayhello("hanim");

 */
  /* 
  constructors = special method for defining the properties and methods of objectss 
  function car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive= ()=> {console.log(`you drive the ${this.make}`)}
   

  }
  const car1 =new car("ford","mustang",2024,"red");
  console.log(car1.make);
  console.log(car1.model);
  console.log(car1.year);
  console.log(car1.color);
  car1.drive(); */

/* class are ES6 features a more structured and clener way to work with objects compared to traditional
  constructor function  
class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    dispalay(){
        console.log(`product: ${this.name}`);
        console.log(`price:$${this.price}`);
    }
    calculate(salestax){
        return this.price + (this.price * salestax)
    }
}
 product1=new product("shirt",250);
 product2= new product("pants,",22.34)
   const salestax=0.05;
product1.dispalay();
product2.dispalay();
const total = product1.calculate(salestax);
console.log(`total price (with tax): $${total}`)
   
   */

 /*  class mathutil{
    static pi=3.1415;
    static getdiameter (radius){
        return radius *2
;    }
  }

  console.log(mathutil.pi)
  console.log(mathutil.getdiameter(10)); */
  /*  static =  keyword that defines properties or methods that belong to a class itsef rather than the object created from that class 
        class owns anything static ,not the object)
  
  
  
  
  class user{
    static usercount=0;
    constructor(username){
        this.username=username;
        user.usercount++;
    }
    static getusercount(){
        console.log(`there are ${user.usercount} users online`)


    }
    sayhello=() => {
        console.log(`my username is ${this.username}`)
    }
  }
  const user1=new user("abdelah");
  const user2= new user("hanim");
  const user3=new user("mother");

 user1.sayhello();
 user2.sayhello();
 user3.sayhello();
 user.getusercount()
  console.log(user.usercount);
 */
/*  inheritance = allows a new class to inherit properties and methods from an existing class (parrent -> child)
     helps with code reusablity;


class Animal{
    alive=true;
    eat =()=> {
        console.log(`this ${this.name} is eating`)
    }
    sleep =()=> {
        console.log(`this ${this.name} is sleeping `)
    }

 }
 class rabbit extends Animal{
    name="rabbit";
    run(){
        console.log(`this ${this.name} is running`)
    }
 }
 class fish extends Animal{
    name="fish";

 }
 class hawk extends Animal{
    name ="hawk";
 }

 const rabbits=new rabbit();
 const fishs = new fish();
 const hawks =new hawk();
//we can use the child class object to inherit from their parent

 rabbits.eat();
 rabbits.run(); */
 /* super = keyword is used to call the construtor or used to acess 
    the properties and methods of a parent class(super class)
    this=this object 
    super =the parent
 class animal{
    constructor(name ,age){
        this.name=name;
        this.age=age;

    }
    static ab="abdelah";
    move(speed){
        console.log(`the ${this.name} moves at speed of ${speed} mph`)
    }

 }
 class rabit extends animal{
  runs=() => {
    super.move(this.run)
  }
   
    constructor(name,age,run){
        super(name,age);
        this.run=run;

    }
   

 }
 class fish extends animal{

    constructor(name,age,swim){
        super(name,age);
        this.swim=swim;

    }

 }

class hawk extends animal{
    constructor(name,age,fly){
        super(name,age)
        this.fly=fly;

    }

}
const rabits=new rabit("rabit",1,25);
const fishs = new fish("fish",2,12);
const hawks= new hawk("hawk",3,50);
  
console.log(rabits.name)
console.log(rabits.age)
console.log(rabits.run)
console.log(fishs.name);
console.log(fishs.age);
console.log(fishs.swim)
console.log(hawks.name)
console.log(hawks.age)
console.log(hawks.fly) 
rabits.runs(); */

/*   setter and getter methods 
class rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    // setting a value
    set width(newwidth){
        if(newwidth>0){
            this._width =newwidth
        }
        else{
            console.log('width must be the posetive')
        }
    }
    set height(newheight){
        if(newheight>0){
            this._height =newheight;
        }
        else{
            console.log('width must be the posetive')
        }
    }
//getting or readable a value
static x=12;

    get width(){
        return this._width;

    }
    get height(){
        return this._height;

    }
}
  const rectangles=new rectangle(10000,2999);
  rectangles.width=5;
  rectangles.height=6;
  console.log(rectangles.width);
  console.log(rectangles.height); */

  /* ..cont of setter and getter methods 
  //getter =special method that makes a property readable
  // setter = special method that makes the the property writale
  // they are mainly used for validate and modify a value from input 
  
  class person {
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    set fname(newfname){
        if(typeof newfname === "string" && newfname.length > 0){
           this._fname=newfname; 
        }
        else{
            console.log("first name must be a non empty string")
        }
    }
    set lname(newlname){
        if(typeof newlname === "string" && newlname.length >0 ){
             this._lname=newlname;

        }
        else {
            console.log("last name must be a non empty string")
        }
    }
set age(newage){
    if(typeof newage === "number" && newage.length>0){
        this._age=newage
    }
    else{
        console.error("age must be a non negative number")
    }

}
    get fname(){
        return this._fname
    }

  }

  const person1= new person("abdelah" ,"nesredin",20);
  console.log(person1.fname);
  console.log(person1.lname);
  console.log(person1.age) */
  
 /* destructuring = extract values from arrays and objects ,
   then assign them to variables in a covinnet way 
   []=to perform array destructuring 
   {}= to perform objects destructuring 
 example one for swapping 
  let a=20;
  let b=10;
  [a,b]=[b,a];
  console.log(a)
  console.log(b) 
  example 2 swap and modify elemnts in array
  const color=["tomato","green","blue","red"];
  [color[0]]= ["abdelah"];
  console.log(color);
example 3 destucting used for reassigning array elements to a variables
const arr=["abdelah","nesredin","nasir", "halid", "misgan"];
[fname,lname,llname,...lllname]=[arr[0], arr[1],arr[2],arr[3],arr[4]]
console.log(fname + lname );
console.log(...lllname);
  //example 4 used for extracting elemnts in an object
const person1 = {
    firstname:"abdelah",
    lastname:"nesredin",
    age:30,
}
const {firstname,lastname,age,job="student"} =person1;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job)
//example 5 destructuring used in function parameters 
function display({firstname,lastname,age,job="student"}){
    console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job)
}
const person1 = {
    firstname:"abdelah",
    lastname:"nesredin",
    age:30,
}
display(person1);
*/

/* nested objects = objects inside of other objects.
//allows you to represent more complex data structures child objects is enclosed by a parrent objects 
//person{address{},contactinfo{}}
// shoping cart{keyboard{},mouse{},monitor{}}

const person ={
    fullname:" abdelah",
    age:20,
    isstudent:true,
    hobbies:["football","programming","cooking"],
    address: {
        street :"124 conch st.",
        city:" bikin bottom",
        country: "ETHIOPIA"
    }
}
console.log(person.fullname);
console.log(person.age)
console.log(person.isstudent)
console.log(person.hobbies[0]);
console.log(person.address.city)  

    for(const property in person.address){
        console.log(person.address[property])
    } 
    //example two
  class person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.addresss=new Address(...address);

    }
  }



 class Address{
    constructor(street,city ,country){
        this.street=street;
        this.city=city;
        this.country=country

    }
 }


 const person1= new person("abdelah",20,"124 constreet ",
                                        "addis ababa",
                                         "ETHIOPIA");
 const person2= new person("hanim",15,"guje ",
                                         "oromia",
                                          "ETHIOPIA")
                                          
                                          
                                          
      console.log(person1.addresss.street);
      console.log(person1.addresss.city);
      console.log(person1.addresss.country);
      console.log(person2.addresss.street);
      console.log(person2.addresss.city);
      console.log(person2.addresss.country);
      */
   /*  const fruits=[{name:"apple", color:"red", calories:95},
                 {name:"orange", color:"orange", calories:45},
                 {name:"bannana",color:"yellow", calories:23} ];


         fruits.push({name: "grapes",color:"purple",calories:62}); */
/* 
         console.log(fruits);
          for each ()
         fruits.forEach(fruit => console.log(fruit.name))
     
         map()
        const fruitname=fruits.map(fruit => fruit.name);
         const fruitcolor=fruits.map(fruit => fruit.color);
         console.log(fruitname)
         console.log(fruitcolor)
         filter(); 
        const yellofruit=fruits.filter(fruit =>fruit.name=== "orange")
        const highcal=fruits.filter(fruit =>fruit.calories >45)
        console.log(yellofruit);
        console.log(highcal)
        reduce() method
           
        
        
       const maxfruit= fruits.reduce((max,fruit) => 
                              fruit.calories > max.calories ? 
                                fruit : max)
     const minfruit= fruits.reduce((min,fruit) => 
                                fruit.calories < min.calories ? 
                                  fruit : min)
      
      
                                console.log(minfruit)
                                */
/* sort() = method used to sort elemnets of array inplace 
 sorts elements as string in lexicographic order ,not alphabetical
 lexicographic =(alphabet + numbers +sysmbols)as string 
    used for sorting a number elements 
    let number=[1,2,3,,4,10,7,9];
    number.sort((a,b) =>a-b)
    console.log(number)
   const people=[{name:"abdelah", age:20,gpa:3.6},
                 {name:"kaleb", age:23,gpa:4},
                 {name:"biruk", age:21,gpa:3.9},
                 {name:"fuad", age:22,gpa:3.8},
                             ]
           // people.sort((a,b) => a.age -b.age) ;
           // people.sort((a,b)=> a.gpa -b.gpa);
            people.sort((a,b) => b.name.localeCompare(a.name))
            console.log(people)
 */
/* fisher yates algorithm    for games using java script 
      const cards =['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
      console.log(cards)
      shuffle(cards);
      function shuffle(array){

    for(let i= array.length-1;i>0;i--){
        const random= Math.floor(Math.random() *i+1);
        [array[i],array[random]]=[array[random],array[i]]

    }
  console.log(cards)

      } */
      /*Date ojects=objects that contain  values that represent dates and times 
       these date objects can be chnged and formatted
        Date(year,month,day,hour,minute,second,ms)
      const date=new Date();
      date.setFullYear(2025);
      console.log(date)
       const year=date.getFullYear();
      const month =date.getMonth();
      const day=date.getDate();
      const da=date.getDay();
      const hour=date.getHours();
      const miniutes=date.getMinutes();
      const seconds=date.getSeconds();
       console.log(year);
       console.log(month);
       console.log(day);
       console.log(da);
       console.log(hour);
       console.log(miniutes);
       console.log(seconds)
        */


/*  is 11 calculator project 
const dispalay= document.getElementById('display');

function appendtodisplay(input){
    dispalay.value +=input;


}
function cleardisplay(){
    dispalay.value="";

}
 function calculate(){
  try{
    dispalay.value= eval(dispalay.value)
  }
  catch(error){
    dispalay.value="error"
  }

 } */
 /* closure = a function defined inside of another function,
 // the inner function has access to variable 
 // and scope of outer function
 // allow for private variable and state maintanaince 
 // used frequently in  35 frame works :react ,value ,angular 
function outer(){
    let message="hello";
    function inner(){
        console.log(message)
    }    
}
outer()
 
-----in this example we can naot maintain the state of the variable 
 function increment(){
    let count=0;
    count++;
    console.log(`count increased to ${count}`)
 }
 increment();
 increment()
in order to maintain te state of our private variables we have to use closures
function counters(){
let count =0;

function increment(){
    count++;
    console.log(`count increased to ${count}`);
}
function getcount(){
    return count;
}
return {increment , getcount}
}
const counter=counters();
counter.increment();
counter.increment();
counter.increment();
console.log(`the current counter is ${counter.getcount()}`);
 another example
function game(){
let score=0;
function increasescore(points){
    score+=points;
    console.log(`+${points}pts`)

}
function decreasescore(points){
    score-=points;
    console.log(`-${points}pts`)

}
function getscore(){
    return score;
    
}
return{increasescore ,decreasescore, getscore};
}
const games=game();
games.increasescore(9);
games.increasescore(10);
games.decreasescore(6);
console.log(`the final point you score is ${games.getscore()}`)

*/
/*setTimeout()=function in a javascript that allows you to schedule 
the excution of a function after an ammount of time (mileseconds )
times are approximate(variables based on the workload of the javascript runtime )
setTimeout(callback,delay);

const timeoutid= setTimeout(()=>{
    window.alert("hello")
          },3000);

clearTimeout(timeoutid)
using html buttons clearing and setting a time out function
let timeoutid;
function starttimer(){
 timeoutid=setTimeout(()=>{window.alert(`Hello`)},3000)
 console.log(`starter`)
}
function cleartimer(){
    clearTimeout(timeoutid);
    console.log(`clear`)
}
*/

/* id 12   digital clock program 
function updateclock(){
    const now=new Date();
    const hour = now.getHours().toString().padStart(2,0);
    const meridian= hour > 12 ? 'PM':'AM';
    
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const tiemstring= `${hour}:${minutes}:${seconds} ${meridian}`;
    document.getElementById('clock').textContent=tiemstring;

}
updateclock();
setInterval(updateclock,1000)


 */
/*
const display =document.getElementById('display');
let timer=null;
let startime=0;
let elapsetime=0;
let running=false;

function start(){
    if(!running){
        startime=Date.now()-elapsetime;
        timer=setInterval(update, 10)
        running=true;
       

         
        
    }
    

}
function stop(){
    if(running){
        clearInterval(timer);
        elapsetime=Date.now()-startime
        running=false;
    }

}

function reset(){
    clearInterval(timer);
let startime=0;
let elapsetime=0;
let running=false;
display.textContent="00:00:00"


    
}
function update(){
    const currenttime= Date.now();
    elapsetime=currenttime-startime;

    let hour=Math.floor(elapsetime/(1000*60*60));
    let miniute= Math.floor(elapsetime/(1000*60)%60);
    let second=Math.floor(elapsetime/1000%60)
    let milisecond=Math.floor(elapsetime% 1000/10);
    hour= String(hour).padStart (2,"0");
    miniute= String(miniute).padStart (2,"0");
    second= String(second).padStart (2,"0");
    milisecond= String(milisecond).padStart (2,"0");
  display.textContent= `${hour}: ${miniute}: ${second}: ${milisecond}`
}
*/
/* E56 MODULE = an external fiel that contain reusable code that can be imported other javascript fiels can contian a variable ,classes ,function ...and more introduced as part of ECMAScript 2015 update 
import {pi,getcircumfrence,getvolume,area} from './mathUtil.js';
console.log(pi); */
/*synchronous = excutes line by line conscuetively in a sequntial manner 
                code that waits for an operation to complete 
    //asynchronous = alows multiple operation to be performed concurently without waiting 
                     dosen't block the excution flow and allows the program to continue 
                     (i/o operation ,network requests ,promises ,asycn/awaits )
 function func1(callback){
    setTimeout(()=> { console.log("task0");
                    callback()},3000);
   
}
function func2( ){
    console. log(`task 1`)
console.log(`task 2`);
console.log(`task 3`)

}
func1(func2); */


/* try {
    console.log(x)

}
catch (error){
    console.error(error);
}
 console.log("we have reached the end of the programm")


 */
/* Error =an object that is created to represent a problem that occur 
   occur often with user input or establishing a connection 
   //try {}=encloses code that might pottential cause error 
   //catch{}=catch and handle any thrown Errors from the try block
   //finally{}=optional always excutes ,used mostly for clean up
         ex.close fiels ,close connection ,release resources
try{
    const dividendend= window.prompt("enter a dividendend:")
const divisor=window.prompt("enter the divisor:");
const result =dividendend/divisor;
if(divisor == 0){
    throw new Error("you can't divide by zero");

}
if( isNaN(dividendend) || isNaN(divisor)){
    throw new Error("VALUE must be a")
}
console.log(result)
}
catch(error){
    console.error(error)
} */
//DOM =Document object model 
//  object {} that represent the page you see in the web browser 
// and provides you with an API  TO INTRACT WITH IT 
// WEB BROWSER construct the element in tree like represenrtation 
// javasccript can acess the dom to dynamically
//change the content ,structure ,and style of a web page

/*  const username = "Abdelah Nesredin Nasir";
   const welcomemsg= document.getElementById('welcomemsg');

   welcomemsg.textContent+= username === "" ?  `   GUST`: username
   */
  /* elemnt selector= methods used to get target and manipulate Html elements 
   they allow you to select one or multiple  html elemnts 
    from the dom (Document object Model )

    1,document.getelementbyid()//element or null
    2, document.getelmentbyclassName()//html collection
    3, document.getelemntbytagname()//htmlcollection
    4, document.getelementbyselector()//element or null
    5, document.querySelectorAll()//nodelists
    */
   /*  getelement  by id
   const myhead= document.getElementById('myh1')
   myhead.style.backgroundColor="yellow";
   myhead.style.textAlign= "center"
   console.log(myhead) */
   /* getelement by class name
   const fruit = document.getElementsByClassName('fruit')
   console.log(fruit)
   fruit[0].style.backgroundColor ="yellow";
 */

 /*  getElemntbyTagName 
  const h4elments= document.getElementsByTagName("h4")
  const lielemnts= document.getElementsByTagName("li")

for (i of h4elments){
    i.style.backgroundColor="red";
}
for(i of lielemnts){
    i.style.backgroundColor="lightgreen"
}

Array.from(lielemnts).forEach(i => {
    i.style.listStyle = "none"
}) */

/*  query selector
const elemnet= document.querySelector(".fruit");
const elemnet1= document.querySelector("h4");
elemnet.style.backgroundColor="yellow";
elemnet1.style.backgroundColor="yellow"; */
/* quey selcectorAll
const fruit= document.querySelectorAll(".fruit")
console.log(fruit)

fruit[0].style.backgroundColor="yellow"; */

















































