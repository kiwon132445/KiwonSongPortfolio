
function insertionSortSimple(insertArray) {
  for (let i = 1; i < insertArray.length; i++) {
    let carryValue = insertArray[i];
    for (let j = i-1; j >= 0; j--){
        if (insertArray[j] > insertArray[j+1]) {
            carryValue = insertArray[j+1];
            insertArray[j+1] = insertArray[j];
            insertArray[j] = carryValue;
        }
    }
  }
  return insertArray;
}

function insertionSortObjects() {

}

function InsertionSortExample() {
  let insertValues = [60, 4, 10, 34512, 3, 21, 120, 5, 0, 0, 120, 100, 99, 13];
  var sortedValues = insertionSortSimple(insertValues);
  console.log(sortedValues);
}
