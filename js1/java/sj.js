
function fucion(){
  
   var b = document.getElementById("input").value;
   var a=b*1.7;
 
   
  if( b==0){
    document.getElementById("h1").innerHTML ="Məbləği daxil etməmisiniz";
    
  }
 
    else{
        document.getElementById("h1").innerHTML = b+ " " +   "dollar" + " "+ a + " " +  " "  +"manata bərabərdir";
        
    };

};







