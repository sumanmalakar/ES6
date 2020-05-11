document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);


document.getElementById('button3').addEventListener('click', getExternal);


// local txt file data
function getText(){

  fetch('test.txt')
  .then(res => res.text())
  .then( data => {
    console.log(data)
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err)
  );


}

// local json data
function getJson() {

  fetch('post.json')
    .then( res => res.json())
    .then(data => {
      console.log(data)
      let output = ''
      data.forEach(element => {
        output += `<li>${element.title}</li>`
      });
      document.getElementById('output').innerHTML = output
    })
    .catch(err => console.log(err)
    );


}

// local external
function getExternal() {

  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let output = ''
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output
    })
    .catch(err => console.log(err)
    );


}