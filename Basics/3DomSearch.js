// ctitle=document.getElementsByClassName("card-title")[0]

// ctitle=document.getElementById("firt-id")
// ctitle.style.color="blue"

ctitle=document.querySelectorAll(".card-title")

ctitle[0].style.color="orange"
ctitle[1].style.color="grey"
ctitle[2].style.color="green"

document.querySelector(".card-body").style.color='red'

els=document.getElementsByTagName('a')
console.log(els);

els2=document.querySelector(".card").getElementsByTagName("a")
console.log(els2);