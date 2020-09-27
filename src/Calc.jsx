function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let sub = a - b;
    return sub;
}

function mult(a,b){
    let sum = a*b;
    return sum;
}
function div(a,b){
    let sum = a / b;
    sum = sum.toFixed(2);
    return sum;
}


export {add,sub,mult,div};
