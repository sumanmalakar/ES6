const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5')
const select = document.querySelector('select')

// Clear input
taskInput.value = ''


// form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);
// keyup
// taskInput.addEventListener('keyup', runEvent)
// keypress
// taskInput.addEventListener('keypress', runEvent)
// Focus
// taskInput.addEventListener('focus', runEvent)
// Blur
// taskInput.addEventListener('blur', runEvent)
// Cut
// taskInput.addEventListener('cut', runEvent)
// // Paste
// taskInput.addEventListener('paste', runEvent)
// Input
// taskInput.addEventListener('input', runEvent)
// Change 
select.addEventListener('change', runEvent)





function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`)
  
  console.log(e.target.value)
  
  // Display value in html
  // heading.innerText = e.target.value

  // e.preventDefault();

  // Get Input value
  // console.log(taskInput.value); 

}