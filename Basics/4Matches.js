first=document.getElementById("id1")
sp11=document.getElementById("sp1")
console.log(first);
// console.log(first.matches(".class1")); //return true
console.log(first.matches(".class2")); //returns false
console.log(sp11.closest("#sp1"));

console.log(sp11.contains(sp1));
console.log(sp11.contains(id1));