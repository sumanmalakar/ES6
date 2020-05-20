const PageState = function(){
  let currentState = new homeState(this);


  this.init = function(){
    this.change(new homeState)
  }

  this.change = function(state){
    currentState = state
  }

}

// Home State
const homeState = function(page){
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
   `
}

// About State
const aboutState = function(page){
  document.querySelector('#heading').textContent = 'About us';
  document.querySelector('#content').innerHTML = `
  <p>This is the about page</p>
   `
}

// Contact state
const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact us';
  document.querySelector('#content').innerHTML = `
 <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
</form>
   `
}

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Variables
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');


// Home 
home.addEventListener('click' , (e)=>{
  e.preventDefault()
  page.change(new homeState);
})



// About 
about.addEventListener('click', (e) => {
  e.preventDefault()
  page.change(new aboutState);
})


// Contact
contact.addEventListener('click', (e) => {
  e.preventDefault()
  page.change(new contactState);
})