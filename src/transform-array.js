function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  let a = '--double-next';
  let b = '--double-prev';
  let c = '--discard-prev';
  let d = '--discard-next';

  for (let i = 0; i < arr.length; i++) {
    if ((i == 0 && !String(arr[i]).localeCompare(b)) ||
        (i == 0 && !String(arr[i]).localeCompare(c)) ||
        (i == arr.length -1 && !String(arr[i]).localeCompare(a)) ||
        (i == arr.length -1 && !String(arr[i]).localeCompare(d)) ||
        (!String(arr[i+1]).localeCompare(c)) ||
        (!String(arr[i-1]).localeCompare(d)) ||
        (!String(arr[i]).localeCompare(a))  ||
        (!String(arr[i]).localeCompare(b)) ||
        (!String(arr[i]).localeCompare(c))  ||
        (!String(arr[i]).localeCompare(d))) {continue}

    if (!String(arr[i-1]).localeCompare(a)) {
      //console.log('i = ', i, '   ', !String(arr[i+1]).localeCompare(a))
      res.push(arr[i]);
      res.push(arr[i]);
    }
    if (!String(arr[i+1]).localeCompare(b)) {
               res.push(arr[i]);
               } else {res.push(arr[i]);}

  }
  //console.log(res);
  return res;
}

module.exports = {
  transform
};
