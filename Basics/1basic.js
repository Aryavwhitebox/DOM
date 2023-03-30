// a=document.body.firstChild
// console.log(a);
// a=document.body.firstElementChild
// console.log('the first element child is');
// console.log(a);
// b=document.parentNode
// console.log('the parent node is');
// console.log(b);

// document.body.style.backgroundColor="red"

function changecolor(){
    //we can run this code in the console and the color of child of body will change

    document.body.firstElementChild.style.background='red'
}

b=document.body.firstElementChild;
console.log(b);