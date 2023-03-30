t=document.body.firstElementChild.firstElementChild     
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tFoot); // as we dont have foot in our html we are getting null
console.log(t.tHead);
console.log(t.tBodies);
console.log(t.rows[1].rowIndex);