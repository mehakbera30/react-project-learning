import { jsx } from 'react/jsx-runtime';
import a from './import.js' 
import {arr} from './import.js'
var h1 = document.createElement("h1"); // Creates <h1></h1>

h1.innerHTML = "Hello from JS";        // Adds text inside the h1
// Result: <h1>Hello from JS</h1>
console.log(h1);
document.body.appendChild(h1);         // Appends the h1 to the body
console.log(a);
console.log(arr);

// hum react ka use krke bhi component bna sakte hai , isma humne element liya then use describe kiya the
// use html ke body tag ke saath append kr diya jissa brower par output aajya and agar hum last wali line na 
// likha toh browser par koi bhi output nhi ayega.


// react js is a library of the js use to create the frontend ui of the website. har feature ke liya alg lib
// framework is a inbuilt like something is premade means hume agr new home lena hai toh , toh hum premade ghr
// bhi le sakte hai but hum usma jayada customisation nhi kr sakte.


// import the variable from app js, then export the variable

// What is a module?
// A module is simply a JavaScript file that has its own scope and can export or import code from other files.
//Without modules : - Everything is in one big file. Variables and functions can easily conflict.
//With modules:- Code is split into multiple files.Each file does one job.Files can share only what they explicitly export.

// name export means : export var arr = {20,30,44,56};
                        //  while importing remember to add : import {arr} from './import.js'

// agar humne default kiya age ya kuch bhi toh hume import mein age hi milaga chahe hum ussa kuch bhi name bhi de
// but agr specific krna tha toh name export use krna


// what is jsx?
// jsx is a combination of both html and jsx. If we write in traditional way then we have to create a html and then js
// then we have to connect them both and then proceed with our Worker.
