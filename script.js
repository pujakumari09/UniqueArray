let newarr = [1, 2, 3, 4, 1, 3, 5, 1, 6, 7, 3];

// unique array through set
console.log([...new Set(newarr)]);

// unique array through filter method
let jj = newarr.filter(function(item, index) {
  if (newarr.indexOf(item) === index) {
    return newarr;
  } else {
    return "false";
  }
});

console.log(jj);

//unique array through reduce method

let u = newarr.reduce(
  (acc, val) => (acc.includes(val) ? acc : [...acc, val]),
  []
);

console.log(u);
