const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template String ES5

html = '<ul><li>Name: ' + name + '</li> <li>age: ' + age + '</li> <li>' + job+  '</li> <li>City: '+ city + '</li></ul>';

html = '<ul>' + 
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>City: ' + city + '</li>' +
      '</ul>';

      function hello(){
        return 'hello'
      }

// With template String ES6
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job} </li>
<li>City: ${city} </li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'Over': 'Under 30' }</li>
<li></li>
</ul>
`;


document.body.innerHTML = html;