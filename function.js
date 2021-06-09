// function printhello() {
//     console.log('hello');
// }

// function printhelloworld() {
//     console.log('hello world');
// }

// function hiroshan() {
//     console.log('hi roshan');
// }

// printhello();

// printhelloworld();
// hiroshan();


// function print(word){

//     console.log(word);
// }

// print('hello');
// print('hello world');
// print('hi Roshan');

// function add(a, b) {

//     const result = a + b;

//     return result;
// }

// const value = add(2,3);
// console.log(value)

/**
 * 
 * return max of a,b
 * @param {number} a 
 * @param {number} b 
 * @return number
 */


function max(a, b) {
    const output = 0;
    if (a > b) return a;
    if (a < b) return b;
    if (a === b) return b;
    return output;
}


function max2(a, b) {
    const output = 0;
    if (a > b) {
       output = a;
    } 
    if (a < b) {
        output = b;
    };
    if (a === b)  {
        output = a;
    }
    return output;
}

function max3(a, b) {
    if(a > b){
        return a
    }else{
        return b;
    }
}


function max4(a, b) {
    let maxnum = a;
    if(b > a) {
        maxnum = b;
    }
    return maxnum;
}

const maxvalue = max4(3, 3);///  return 3
console.log(maxvalue);
console.log( max4(4, 3))/// return 4 

console.log( max4(1, 2)) // return 2