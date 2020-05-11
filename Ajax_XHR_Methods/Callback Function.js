const posts = [
  {title:'Post one', body:'this is post one'},
  { title: 'Post two', body: 'this is post two' }

];

// function createPost(post){
// setTimeout(function(){
//   posts.push(post)
// }, 2000)

// }

// function getPosts(){
//  setTimeout(function(){
//   let output = ''
//   posts.forEach(function(post){
//     output += `<li>${post.title}</li>`
//   });
//   document.body.innerHTML = output
//  },1000)
// }

// createPost({title:'post three', body:'this is post three'});

// getPosts();

function createPost(post, callback) {
  setTimeout(function () {
    callback();
    posts.push(post)
  }, 2000)

}

function getPosts() {
  setTimeout(function () {
    let output = ''
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output
  }, 1000)
}

createPost({title:'post three', body:'this is post three'}, getPosts);