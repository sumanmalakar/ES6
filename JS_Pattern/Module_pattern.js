// Basic structure

// (function() {
//   // Declare private variable and functions

//   return {
//     // Declare public variable and functions
//   }
// })();

// STANDARD MODULE PATTERN 
// const UICtrl = (function(){
//   let text = 'Hello World';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return{
//     callChangText: function(){
//       changeText();
//       console.log(text)
//     }
//   }

// })();

// UICtrl.callChangText()
// // UICtrl.changeText();

// console.log(UICtrl.text)

// REVEALING MODULE PATTERN
const itemCtrl = (function(){
  let data = [];


  function add(item){
    data.push(item);
    console.log("Item Added....")
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    })
  }

  return{
    add: add,
    // get:get
  }
})();

itemCtrl.add({id:1, name:'john'});
itemCtrl.add({ id: 2, name: 'mark' });

console.log(itemCtrl.get(2))