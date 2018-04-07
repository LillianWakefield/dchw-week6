//how bonusforEach was supposed to be done
var forEach=function(arr,callback){
    for(var i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}

forEach([1,2,3],function(item){
    console.log(item);
});

//how bonusMap was supposed to be implemented
var map=function(arr,callback){
    var newArray = [];
    for(var i=0;i<arr.length;i++){
        var item = arr[i];
        var newItem = callback(item);
        newArray.push(newItem);
    }
    return newArray;
}



var result=map([1,2,3],function(item){
    return item*item;
});

console.log(result);