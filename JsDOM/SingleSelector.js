// // document.getElementById()

// console.log(document.getElementById('task-title'))

// // Get things from the element
// console.log(document.getElementById('task-title').id)
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title')

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.colorbackground = '#fff'
// taskTitle.style.padding = '5px'

// // Change Content

// taskTitle.textContent = 'Suman'
// taskTitle.innerText = 'My Tasks'
// taskTitle.innerHTML = '<span style="color:red">Task</span>'


// document.querySelector()

console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.testSuman'))
console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'yellow';
document.querySelector('ul li').style.color = 'yellow';

document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').style.color = 'blue';
document.querySelector('li:nth-child(4)').textContent = 'Hello World!';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';

document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';








