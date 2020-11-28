 alert("Hey ,friend it is a popup-Changed");
 
 var mula = 50;
     document.write(mula,"<br>");
 
 var mitu = "shaila";
     console.log("<br>",mitu);
	 
 var Saiyan = 100;
 var Minha = 50;
 var Mahir = 70;
 var Masum = 80;
 var Total = Saiyan+Minha+Mahir+Masum;
     console.log(Total);
	 
	 
 var FirstName = "Romana";
 var LastName = "khatun";
	 console.log(FirstName ," ", LastName , " is ", " 16 " , " years gril. ");
 
 var taka = 50;
 var poisha = 1;
 if( taka >= 100 ){
	 console.log('You can going Ranigong');
}else if (poisha = 1){
	 console.log('You can going Ranigong with your poisha')
 }
 else{
	 console.log('You can not going Ranigong');
 }
 
for(var a = 1; a <= 5; a++){
	console.log(a);
}

for(var a = 1; a <=10; a++){
	if(a%2 == 1){
		document.write(a ,"<br>")
	}
}
var a = 50
while(a >= 43){ 
    document.write(a ,"<br>");
	a--;
}
var a = 50
do{ 
    document.write(a ,"<br>");
	a--;
}while(a >= 43)


var country = ["Bangladesh","canada",20,"Usa"]
 country [4] = "pakistan"
document.getElementById("demo").innerHTML =country[0];

var age = 20;

 age >= 18 ? document.write("Yes, you can going America" ):document.write("No , You can not going America")

function oddName(){for(var a = 0; a <=10; a++){
	if(a%2 == 1){
		document.write(a ,"<br>")
	}
  }
}
oddName();
//Scound Function
var x = CustomFunction(5,6)
function CustomFunction(b,c){
	return b*c;
}
document.write("<br>",x );

var car = {color:"blue",color:"red",color:"green",model:"adventa"}

console.log(car.model);



var m = 10;
var n = 11;
function testFunction() {
	document.write("<br><br>",m*n);
}
testFunction()
	document.write("<br><br>",m-n);

function weightConverter(numValue){
	document.getElementById("outputKg").innerHTML=numValue/2.204;
}











 