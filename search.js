console.log("file is connected")
//in this DSA challenge i will learn how  i can search an element in the array by building a logic


function search() {
    let arr=[23,56,89,45,78,12,96,45]
let item=document.querySelector('#input').value
console.log(item)
let index=undefined;
for (let i = 0; i <= arr.length-1; i++) {
   if (arr[i]==item) {
    index=i;
    break
   }
   
   if (arr[i]!==item) {
    index="number is not i the array"
   }
    
}
console.log(index)
}





// console.warn(index)
//another method of doing the same thing by methd is that

//   let valid=arr.find((i)=>{
//    if (i===item) {
//     console.log(arr.indexOf(i))
//    }
// })
// console.log(valid)








