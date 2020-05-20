const data = [
  {
    name:'john doe',
    age: 32,
    gender: 'male',
    lookingfor:'female',
    location:'Boston MA',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'jen Smith',
    age: 26,
    gender: 'fmale',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
    {
    name: 'brad',
    age: 36,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile Display
function nextProfile(){
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined){

  document.getElementById('profileDisplay').innerHTML = ` 
  <ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>

  </ul>
  
  `;

  document.getElementById('imageDisplay').innerHTML = `
  <img src="${currentProfile.image}">
  `
  } else {
    // No more profiles
    window.location.reload();

  }

}


// profile Iterator
function profileIterator(profiles){
  let nextIndex = 0;

  return{
    next: function(){
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false} : {done:true}
    }
  };
}