var breakOut = function(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

var keepGoing = function(array, changeValue, skipValue) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

var findBy = function(array, findFn) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] == findFn) {
      return array[i];
    }
  }
  return null;
}
