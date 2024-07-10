let a = 400;
let b = 250;
let c = 90;


let min , max;

//  max 
if(a > b  && a > c){
 max = a;
   }
   else if(b>a && b>c){
     max = b;
   }
   else{
    max = c
   }


//  min 
if(a < b  && a < c){
 min = a;
   }
   else if(b<a && b<c){
     min = b;
   }
   else{
    min = c
   }


   document.writeln( "Minimum Value :  " +  min +  "<br>");
   document.writeln( "Maximum Value  : " + max);
   

// if(a<b && a<c) {
// document.writeln(a);
// }
// else{
//  document.writeln("Error");
 
// }
