let val;

const list = document.querySelector('ul.collection');
const listItme = document.querySelector('li.collection-item:first-child')

val = listItme
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0]
val = list.childNodes[0].nodeName
val = list.childNodes[3].nodeType

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - comment
// 9 - Document itself
// 10 - Doctype



// Get children element nodes
val = list.children
val = list.children[1]
val = list.children[1].textContent = 'Hello'

// Children of children
// list.children[3].children[0].id = 'test-link'
// val = list.children[3].children[0];

val = list.firstChild
val = list.firstElementChild;


// las child
val = list.lastChild
val = list.lastElementChild;

// Count child elements
val = list.childElementCount

// Get parent node
val = listItme.parentNode;
val = listItme.parentElement;
val = listItme.parentElement.parentElement;

// Get next sibling
val = listItme.nextSibling
val = listItme.nextElementSibling.nextElementSibling.previousElementSibling;

 // Get previous sibling
// val = listItme.previousSibling
// val = listItme.previousElementSibling


console.log(val)