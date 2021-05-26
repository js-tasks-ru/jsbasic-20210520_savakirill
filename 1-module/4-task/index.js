function checkSpam(str) {
  const a = str.toLowerCase();
  let res = (a.includes('1xbet') || a.includes('xxx')) ? true : false;
  return res;
  // if (a.includes('1xbet') || a.includes('xxx')) {
  //   return true;
  // } else {
  //   return false;
  // }
}
