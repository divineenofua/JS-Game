var myArray = [];
var people = ["Terry", "Jerry", "Ruona", "Divine", "Great", "Deborah", "Henry", "Larry", 'kim', "Joanne", "Lisa", "Jane"];
var key;  
var box = document.querySelector('.box');
function start(){
    myArray = people.slice();
    myArray.sort(function(a,b){
        return 0.5 - Math.random()
    });
    console.log(myArray);
    build(); 
}
function build() {
    var html = "<h1 class='header'>Name Game</h1>";
    for(var x= 0; x<myArray.length; x++){
        var str = myArray[x];
        var shuffled = str.split("").sort(function () {
            return 0.5 - Math.random()
        }).join("");
        html += '<div class="box" onmouseover="uText(this,\"+shuffled+\")" onmouseout="uText(this,\"Hidden "+(x+1)\")">Hidden '+ (x+1)+'<br>'+shuffled+'</div>';
    }
    document.getElementById('output').innerHTML = html;

}
function uText(t,mes){
    t.innerHTML = mes;
}