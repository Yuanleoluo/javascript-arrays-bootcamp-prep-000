var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b){
  var c = [b, ...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(array, elementN){
  array.unshift(elementN)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  return a.shift
}

function removeElementFromBeginningOfArray(a){
  var b = a.slice(1)
  return b
}

function addElementToEndOfArray(a, b){
  var c = [...a, b]
  return c
}
