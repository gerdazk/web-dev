const push = require("../utils/push")

function slice(arr, start, end) {
    if(!end) {
        end = arr.length
    }
    let result = [];
    for(let i = start; i < end; i++ ) {
        if(arr[i] !== undefined) {
            push(result, arr[i])
        }
    }
    return result;
}

module.exports = slice;