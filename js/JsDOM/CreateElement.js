// Create Element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New itme')

// Create text node and append
li.appendChild(document.createTextNode('Helllo world'))

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html 
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link to li
li.appendChild(link)

// Append li as child as ul
document.querySelector('ul.collection').appendChild(li)

console.log(li);