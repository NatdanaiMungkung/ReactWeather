function addPromise(a,b) {
    return new Promise (function (resolve,reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('one value is not a number');
        }
    })
    
}
addPromise('a',1).then(function(result) {
    console.log(result);
}, function (result) {
    console.log(result);
})
addPromise(2,1).then(function(result) {
    console.log(result);
}, function (result) {
    console.log(result);
})
addPromise('2',1).then(function(result) {
    console.log(result);
}, function (result) {
    console.log(result);
})