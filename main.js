//grabbing the elements from the dom
const time = document.getElementById('time')

const greeting = document.getElementById('greeting');

const name = document.getElementById('name');

const focus = document.getElementById('focus');

const showAmPm = true

//show time
function showTime() {
  //setting the date
  let today = new Date();

  //getting the hr
  hour = today.getHours();

  //getting the minutes
  min = today.getMinutes();

  //getting the seconds
  sec = today.getSeconds();

  //Set am or pm 
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12 hr format
  hour = hour % 12 || 12;

  //output the time 
  time.innerHTML = `${hour}<span>:</span>${addZeros(min)}<span>:<span>${addZeros(sec)}${showAmPm? amPm : ''}`;

  setTimeout(showTime, 1000)
}

//add zeros
function addZeros(num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num
}


//set background and greetings
function setBgGreet() {
  //getting the date
  let today = new Date();

  //grabbing the hr
  hour = today.getHours();

  //if its morning
  if (hour < 12) {
    document.body.style.backgroundImage = "url('landscape-photography-of-green-mountains-910411.jpg')";

    greeting.textContent = 'Good Morning'
  } else if (hour < 18) { //if its afternoon
    document.body.style.backgroundImage = "url('fishing-69224.jpg')";

    greeting.textContent = 'Good Afternoon'
  } else { //if its night
    document.body.style.backgroundImage = "url('milky-way-illustration-1169754.jpg')";

    greeting.textContent = 'Good Evening';

    document.body.style.color = 'white'
  }
}

//getting the name from local storage
function getName() {
  //if the local storage is empty
  if (localStorage.getItem('name') === null) {
    name.textContent = '{Enter Your Name}'
  } else { //if local storage is not empty
    name.textContent = localStorage.getItem('name')
  }
}
//setting the name in local storage
function setName(event) {
  if (event.type === 'keypress') {
    //make sure enter is pressed
    if (event.which == 13 || event.keyCode == 13) {
      localStorage.setItem('name', event.target.innerText);

      name.blur();
    }
  } else {
    localStorage.setItem('name', event.target.innerText);
  }
}

//getting the focus from localStorage
function getFocus() {
  //if local storage is empty
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '{Enter your aim}'
  } else { //if its not empty
    focus.textContent = localStorage.getItem('focus')
  }
}

//setting focus in local storage
function setFocus(event) {
  if (event.type === 'keypress') {
    if (event.which == 13 || event.keyCode == 13) {
      localStorage.setItem('focus', event.target.innerText);

      focus.blur();
    }
  } else {
    localStorage.setItem('focus', event.target.innerText)
  }
}

//event listener
name.addEventListener('keypress', setName);

name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);

focus.addEventListener('blur', setFocus);

//run
showTime()

setBgGreet();

getName();

getFocus();