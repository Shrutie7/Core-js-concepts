//...........function to capitalize every alternate letter.............

function getcapitalletter(value) {
// handle no space
  if (value.indexOf(" ") < 0) {
      //convert to array
    let strarr = value.toLowerCase().split("");
    //loop through array on every alternate element and make it uppercase
    for (let i = 0; i < strarr.length; i += 2) {
      strarr[i] = strarr[i].toUpperCase();
      console.log(strarr);
    }
    //join array so it becomes string again
    return strarr.join("");
  } 
  
//   handle space in string
  else if (value.indexOf(" ") > 0) {
     //convert to array
    let strarr = value.toLowerCase().split("");
     //loop through array on every alternate element and make it uppercase and join it to make string again
    return strarr
      .map((c, i) =>
        i !== 0 && i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
      )
      .join("");
    //join array so it becomes string again
  }
}

console.log(getcapitalletter("hello??"));
