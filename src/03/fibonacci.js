'use strict';

class Fibonacci{
    constructor(){
        this.memo = new Map();
        this.memo.set(0, 0);
        this.memo.set(1, 1);
    }

    calc(n) {
        if(this.memo.has(n)){
            return this.memo.get(n);
        }
        let result = this.calc(n-1) + this.calc(n-2)
        this.memo.set(n, result);
        return result;
    }
}

class Tribonacci{
    constructor(){
        this.memo = new Map();
        this.memo.set(0, 0);
        this.memo.set(1, 0);
        this.memo.set(2, 1);
    }

    calc(n) {
        if(this.memo.has(n)){
            return this.memo.get(n);
        }
        let result = this.calc(n-1) + this.calc(n-2) + this.calc(n-3);
        this.memo.set(n, result);
        return result;
    }
}

let fib = new Fibonacci();
let trib = new Tribonacci();

for(let i=0; i<=40; ++i){
    console.log(fib.calc(i));
}
