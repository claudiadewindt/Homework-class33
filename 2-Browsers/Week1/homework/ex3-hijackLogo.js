'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const logo = document.getElementsByClassName('hplogo');
  logo.width = 400;
  logo.src =
    'https://blog.hackyourfuture.net/content/images/size/w1000/2019/06/logohyf-1-1.png';
  logo.srcset =
    'https://blog.hackyourfuture.net/content/images/size/w1000/2019/06/logohyf-1-1.png';
}

hijackGoogleLogo();
