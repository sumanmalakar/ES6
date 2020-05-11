// async function myfunc() {
//   const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => resolve('Hello'), 1000);

//   });

//   const err = false;

//   if(!err){
    
//       const res = await promise; // wait untill promise is resolved
//       return res;

//   } else{
//     await Promise.reject(new Error('Something went wrong'))
//   }

// }

// myfunc()
// .then(res => console.log(res))
// .catch(err => console.log(err))


async function getUsers(){
  // await response of the fetch call
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await res.json();
  
  // only proceed once second promise is resolved
  return data;
}

getUsers().then(uses => console.log(uses))