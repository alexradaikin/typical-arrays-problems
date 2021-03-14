
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let minValue = array.reduce(function(previousValue, currentItem) {
        if(previousValue < currentItem){
            return previousValue;
        }else{
            return currentItem;
        }
    });
    return minValue;
  
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } 
    let minValue = array.reduce(function(previousValue, currentItem) {
        if(previousValue > currentItem){
            return previousValue;
        }else{
            return currentItem;
        }
    });
    return minValue;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let avgValue = array.reduce(function(previousValue, currentItem) {
        return previousValue + currentItem;
    });

    return avgValue / array.length ;
}
