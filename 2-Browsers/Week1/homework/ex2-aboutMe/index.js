'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').textContent = 'Cau';
document.getElementById('fav-food').textContent = 'Brazilian';
document.getElementById('hometown').textContent = 'Montes Claros';
const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = 'list-item';
}
