const http = new easyHTTP;

// Get Posts
//  http.get('https://jsonplaceholder.typicode.com/posts',
//  function(err, posts){
//    if(err){
// console.log(err)
//    }
//    else{

//      console.log(posts)
//    }

//  });

 // get Single post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//   function (err, post) {
//     if (err) {
//       console.log(err)
//     }
//     else {

//       console.log(post)
//     }

//   });


// Create Data
const data = {
  title:'custome post',
  body:'this is a custom psot'
};

// Crate Post
// http.post('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//   if (err) {
//       console.log(err)
//     }
//     else {

//       console.log(post)
//     }

// })

// Upadte Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//    if (err) {
//       console.log(err)
//     }
//     else {

//       console.log(post)
//     }

// })

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',
 function(err, res){
   if(err){
console.log(err)
   }
   else{

     console.log(res)
   }

 });