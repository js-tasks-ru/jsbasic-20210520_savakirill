function ucFirst(str) {
  if (str === '') {
    return '';
  } else {
    let res = str[0].toUpperCase()
    if (str.length > 1) {
      for (let i = 1; i < str.length; i++) {
        res = res + str[i];
      }
      return res;
    } else {
      return res;
    }
  }
}
