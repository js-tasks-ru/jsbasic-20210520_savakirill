function getMinMax(str) {
  let k = str.replace(/[^0-9.-]/g, ' ');
  k = k.replace(/\s+/g, ' ');
  let stringToArr = k.split(' ').map(Number);
  let result = {
    min: 0,
    max: 0,
  };
  for (let i = 0; i < stringToArr.length; i++) {
    if (stringToArr[i] > 0) {
      if (result.max === 0) {
        result.max = stringToArr[i];
      }
      if (result.max < stringToArr[i]) {
        result.max = stringToArr[i];
      }
    }
    if (stringToArr[i] <= 0) {
      if (result.min === 0) {
        result.min = stringToArr[i];
      }
      if (result.min > stringToArr[i]) {
        result.min = stringToArr[i];
      }
    }
  }
  return result;
}