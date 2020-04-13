/*
* observer.js
* test observer pattern
*/

// constructor for subject
function Subject () {
  // keep track of observers
  this.observers = [];
}

// add subscribe to constructor prototype
Subject.prototype.subscribe = function(fn) {
  this.observers.push(fn);
};

// add unsubscribe to constructor prototype
Subject.prototype.unsubscribe = function(fn) {
  // ...
  this.observers = [];
};

// add broadcast to constructor prototype
Subject.prototype.broadcast = function(status) {
  // each subscriber function called in response to state change...
  this.observers.forEach((subscriber) => subscriber(status));
};

/*
* DOM check
*/
// instantiate subject object
const domSubject = new Subject();

// subscribe & define function to call when broadcast message is sent
domSubject.subscribe((status) => {
  // check dom load
  let domCheck = status === true ? `dom loaded = ${status}` : `dom still loading...`;
  // log dom check
  console.log(domCheck)
  let domStatus = elemBuilder('p', null, domCheck);
  document.getElementById('output').appendChild(domStatus);
});

// event checks loading of DOM
document.addEventListener('DOMContentLoaded', () => domSubject.broadcast(true));

/*
* button click
*/
// instantiate subject object for button clicks
const btnSubject = new Subject();

btnSubject.subscribe((status) => {

  // output button click check
  let btnStatus = elemBuilder('p', null, status.val);
  let currentChild = document.getElementById('output').firstChild;
  document.getElementById('output').replaceChild(btnStatus, currentChild);

  if (status.check === 'end') {
    btnSubject.unsubscribe();
    console.log('btn observers = ', ...btnSubject.observers);
    console.log('dom observers = ', ...domSubject.observers);
  } else if (status.check === 'no') {
    let powerbar = document.getElementById('powerbar');
    let barWidth = powerbar.offsetWidth;
    if ( barWidth >= 100) {
      console.log('current width = ', barWidth);
      powerbar.style.width = (barWidth - 100) + 'px';
    } else {
      powerbar.style.width = 0;
      powerbar.style.border = 0;
      let btnStatus = elemBuilder('p', null, 'the end is nigh...restart your quest');
      document.getElementById('output').appendChild(btnStatus);
      btnSubject.unsubscribe();
    }
    // console.log('new width = ', barWidth);
  }

});

const blueBtn = document.getElementById('blueBtn');
const greenBtn = document.getElementById('greenBtn');
const redBtn = document.getElementById('redBtn');
blueBtn.addEventListener('click', () => btnSubject.broadcast({check: 'yes', val: 'you chose wisely...'}));
greenBtn.addEventListener('click', () => btnSubject.broadcast({check: 'no', val: 'you chose poorly...'}));
redBtn.addEventListener('click', () => btnSubject.broadcast({check: 'end', val: 'terrible choice...consider a different quest'}));
