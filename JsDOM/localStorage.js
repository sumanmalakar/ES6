// const btn = document.querySelector('h1')

// // Set local storage item
// localStorage.setItem('name', 'john');
// localStorage.setItem('age', '30');


// // Set session storage item
// sessionStorage.setItem('name', 'bath');

// remove from storage
// localStorage.removeItem('name')

// get from storage

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age')


// btn.innerText = name

// // clear local storage
// localStorage.clear()

// console.log(name , age)


const form = document.querySelector('form')

form.addEventListener('submit', formSubmit)

function formSubmit(e){
  e.preventDefault();
  const task = document.getElementById('task').value

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved')

} 

const tasks = JSON.parse(localStorage.getItem('tasks'))


tasks.forEach(function (task) {
  console.log(task)
});