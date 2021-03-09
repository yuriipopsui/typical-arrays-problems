

exports.min = function(array){
  if(arguments.length>0){
    return array.length===0 ? 0 : Math.min.apply(null, array); 
  }
 return 0;
}

exports.max = function max (array) {
  if(arguments.length>0){
    return array.length===0 ? 0 : Math.max.apply(null, array); 
  }
 return 0;
}

exports.avg = function avg (array) {
  if(arguments.length>0){
    return array.length===0 ? 0 : array.reduce((acc, cur) => (acc + cur), 0) / array.length;
  }
 return 0;
}
