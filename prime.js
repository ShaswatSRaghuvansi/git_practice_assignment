
let num = 13;
let count=0;     // update : count =0;

for ( let i=1; i<=num; i++ ){   
  if( num % i/2 === 0 ){     //update : num%i/2==0
    count++;
  }
}
if( count==1 ){      //update : count==0;
  console.log("Yes");
}else {
  console.log("No")
}