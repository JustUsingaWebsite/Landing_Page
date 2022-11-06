var inputOneIsOn = false; 
var inputTwoIsOn = false;
var img1 = "../imgs/button-on-xxl.png";
var img2 = "../imgs/button-off-xxl.png";
var db1 = false;
var db2 = false;


function toggleImage() {
   
  
   
   var imgElement = document.getElementById('toggleImage');

   if (db1 == true){

        db1 = false;
         imgElement.src = img2;
         return;
   }
   
   db1 = true;
   imgElement.src = img1;
}

  
function toggleImage2() {
   
   var imgElement = document.getElementById('toggleImage2');

   if (db2 == true){

        db2 = false;
         imgElement.src = img2;
         return;
   }
   
   db2 = true;
   imgElement.src = img1;
   
   
}

    function toggleInputOne() { 
            inputOneIsOn = !inputOneIsOn; 
            
        } 

    function toggleInputTwo() { 
            inputTwoIsOn = !inputTwoIsOn; 
              
           
        } 



function and(){
    var a = inputOneIsOn;
    var b = inputTwoIsOn;
    
	  
            console.log('Input one is on: ', 
                                inputOneIsOn); 
								
	        console.log('Input two is on: ', 
                                inputTwoIsOn); 
	
    
    if(inputOneIsOn&&inputTwoIsOn)
        document.getElementById('andGate').src='../imgs/and2on.png';
    else if (!inputOneIsOn && inputTwoIsOn) 
        document.getElementById('andGate').src='../imgs/andoffon.PNG';
	else if (inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='../imgs/andonoff.PNG';
	else if (!inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='../imgs/and2off.PNG';
	}
