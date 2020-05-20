class EventObserver {
  constructor(){
  this.observers = [];
  }

subscribe(fn){
  this.observers.push(fn);
  console.log(`you are now subsucribe to ${fn.name}`)
}

unsubscribe(fn){
  this.observers = this.observers.filter(function (item) {
    if (item !== fn) {
      return item;
    }
  })
  console.log(`you are now unsubscribe from ${fn.name}`)
}
fire(){
  this.observers.forEach(function (item) {
    item.call();
  })
}

}



const click = new EventObserver();

// event listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
})

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
})

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
})


document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurSeconds);
})

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
})

// click handler
const getCurMilliseconds = function () {
  console.log(`current millisecond: ${new Date().getMilliseconds()}`)
}

const getCurseconds = function () {
  console.log(`current millisecond: ${new Date().getSeconds()}`)
}