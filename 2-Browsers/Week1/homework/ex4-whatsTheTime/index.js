'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const span = document.createElement('p');
document.body.appendChild(span);
span.style.textAlign = 'center';
span.style.padding = '20px';
span.style.fontSize = '20px';

function addCurrentTime() {
  span.textContent = new Date().toLocaleTimeString();
}

setInterval(addCurrentTime, 1000);
window.addEventListener('load', addCurrentTime);
// TODO execute `addCurrentTime` when the browser has completed loading the page
