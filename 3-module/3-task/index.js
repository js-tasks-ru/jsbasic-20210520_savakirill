function camelize(str) {
  let arr = str.split('-');
  let res = [];
  res.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    // console.log(i);
    // console.log(arr[i]);
    if (arr[i].length > 0) {
      function ucFirst(a) {
        let res = a[0].toUpperCase();
        for (let i = 1; i < a.length; i++) {
          res = res + a[i];
        }
        // console.log(res);
        return res;
      }
      res.push(ucFirst(arr[i]));
    }
  }
  let ar = res.join('');
  // console.log(ar);
  return ar;
};
/*
function camelize(str) {
  let arr = str.split('-');
  let res = arr[0];
  console.log(res)
  arr.forEach(function (item) {
    function ucFirst(a) {
      let res = a[0].toUpperCase();
      for (let i = 1; i < a.length; i++) {
        res = res + a[i];
      }
      return res;
    };
    if (item.length > 1) {
      res.push(ucFirst(item));
    };
  });
  let ar = res.join('');
  console.log(ar);
  return ar;
};
 */