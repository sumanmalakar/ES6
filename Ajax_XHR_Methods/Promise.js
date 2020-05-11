const posts = [
  { title: 'Post one', body: 'this is post one' },
  { title: 'Post two', body: 'this is post two' }

];



function createPost(post) {
return new Promise(function(resoleve, reject){
    setTimeout(function () {
      posts.push(post);

      const error = false
      
      if(!error){
        resoleve();
      } else{
        reject('Error: Something went wrong!')
      }

      resoleve()
    }, 2000)

});

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

createPost({ title: 'post three', body: 'this is post three' }).then(getPosts)
.catch(function(err){
  console.log(err)
})