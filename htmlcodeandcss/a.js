const sumArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let s = arr[i];
    for (let j = 0; j < s.length; j++) {
      console.log(s[j]);
    }
  }
};

console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"]));
