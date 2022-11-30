// P A L L I N D R O M E   O F   A   N U M B E R 

// as we can traverse the string so we can convert the number into string and then compare


let num = 12344321;
let str = num.toString();   // shortcut to CONVERT
let len = str.length;       // storing length of new string
let bag="";                 // to write horizontally


for ( let i=len-1; i>=0; i-- ){  // update : i--
  bag += str[i];
}
if ( bag === str ){
  console.log("Yes");
}else {
  console.log("No");
}

