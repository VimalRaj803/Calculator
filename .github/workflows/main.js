const outputScreen=document.getElementById("display");
function display(num){
   outputScreen.value += num
}

function equal(){
   try{
      outputScreen.value=eval(outputScreen.value);
   }catch(err){
      alert("Invalid Expression");
      outputScreen.value=`0`;
   }
}
function Clear(){
   outputScreen.value=`0`; 
}
function del(){
   outputScreen.value = outputScreen.value.slice(0,-1);
}