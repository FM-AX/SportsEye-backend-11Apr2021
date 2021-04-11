function ArrayFindElement(array, key, value) {
  const index = array.findIndex(x => x[key] === value);

  if (array[index] === "undefined") {
    // console.log(array,key,value,index)
  }
  return array[index];
}

exports.ArrayFindElement = ArrayFindElement;
