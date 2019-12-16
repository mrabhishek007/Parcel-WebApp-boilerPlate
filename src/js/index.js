// Using js latest import (Unsupported throughout all the browser)
import {getCurrDate} from './helper.js'
import '../css/styles.css'
import '../css/learning.scss'
import $ from 'jquery'

// Using string literal
console.log(`Curr date is ${getCurrDate()}`);


// Class syntax
class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
        return this.instanceProperty;
    };

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function () {
        return Bork.staticProperty;
    };
}

let myBork = new Bork;
console.log(myBork.boundFunction());


// Jquery with string literal
$('body').append(`Jquery via npm is added at ${getCurrDate()}`);


// Async await working
async function getPosts() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    res = await res.json();
    return res;

}

getPosts().then(success => {
    console.log(`Post is >>>>`, success);
});


