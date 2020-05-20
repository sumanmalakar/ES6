const user = {email:'shk@gmail.com'};
try{
  // Produce a ReferenceError
  //  myFunctio();


  // Produce a TypeError
  // null.myfunction()

  // wil produce SyntaxError
// eval('Hello words');

// will produce a URIError
// decodeURIComponent('%');

if(!user.name){
  // throw 'user has no name'
  throw new SyntaxError('user has no name')
}

} catch(e){
  // console.log('its null stupid')
//  console.log(e)
//  console.log(e.message)
//   console.log(e.name)
//   console.log(e instanceof TypeError)

} finally {
  console.log('Finally runs..')
}

console.log('Program continuess...')

console.log("hello")