// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   // e.preventDefault();

//   console.log('Hello World')
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('Clicked')

  let val;

  val = e;

  // Event target element
  val = e.target
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList
  
  // e.target.innerText  = 'Hello'

  //Event type
  val = e.type

  // TimeStamp
  val = e.timeStamp

  // Coordinate of event relative to window
  val = e.clientY
  val = e.clientX


  // Coordinate of event relative to element
  val = e.offsetY
  val = e.offsetX

  
  console.log(val)
}