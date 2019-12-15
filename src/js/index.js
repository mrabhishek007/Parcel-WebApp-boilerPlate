// Using js latest import (Unsupported throughout all the browser)
import {getCurrDate} from './helper.js'
import '../css/styles.css'
import '../css/learning.scss'

// Using string literal
console.log(`Curr date is ${getCurrDate()}`);


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
