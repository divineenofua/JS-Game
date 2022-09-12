var myArray = [];
var people = ["Terry", "Henry", "Larry", 'kim', "Joanne", "Lisa", "Jane"];
var key;  
function start(){
    myArray = people.slice();
    myArray.sort(function(a,b){
        return 0.5 - Math.random()
    });
    console.log(myArray);
    build(); 
}