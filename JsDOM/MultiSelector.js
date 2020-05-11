// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');

// console.log(items)
// console.log(items[0]);

// items[0].style.color = 'red'
// items[3].textContent = "Hello!"

// const listItmes = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItmes)

// document.getElementByTagName

// let lis = document.getElementsByTagName('li');

// console.log(lis)
// console.log(lis[0]);
// lis[0].style.color = 'red'
// lis[3].textContent = "Hello!"

// // Convert HTML Collection into array
// lis = Array.from(lis)

// lis.reverse();

// lis.forEach(function(li , index){
//   console.log(li.className)
//   li.textContent = `${index}: Hello&Echo!`
// })

// console.log(lis)

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (itme, index) {
  console.log(itme.className)
  itme.textContent = `${index}: Hello&`
})

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li , index){
  li.style.background = 'blue'
})

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'gray'
}


console.log(items)