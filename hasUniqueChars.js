// Write your code below

function is_unique(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let j = str[i];
    if (obj[j]) return false;
    obj[j] = true;
  }
  return true;
}
console.log(is_unique("true"));
