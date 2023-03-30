console.log('JS loaded');
var countdownElement=
document.getElementById('upd');
//inner html is used to view the child elements of the given attribute
console.log(countdownElement.innerHTML);
var newValue=countdownElement.innerHTML;

setInterval(function(){
    newValue=newValue>0?newValue-1:0;
countdownElement.innerHTML=newValue
},1000)

