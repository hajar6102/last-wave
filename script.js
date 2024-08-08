
$(document).ready(function() {
  $('#mission-title').click(function() {
      $('#vision-content').slideUp();
      $('#mission-content').slideDown();
  });

  $('#vision-title').click(function() {
      $('#mission-content').slideUp();
      $('#vision-content').slideDown();
  });
});


function scrollToActivity() {
  const activity = document.querySelectorAll("#title")[index];
  if (activity) {
    activity.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

const d =new Date();
const year =d.getFullYear();
const month = d.getMonth();
const day= d.getDay();
document.querySelector(".card-date").innerHTML=`${month}/${day}/${year}`;
/*change it to querySelectorAll when adding new cards*/

// window.addEventListener('scroll', function() {
//   const header = document.querySelector('header');
//   const conatainer = document.querySelector('conatainer');
//   const mainHeight = conatainer.offsetHeight;
//   const windowHeight = window.innerHeight;
//   const scrollY = window.scrollY;

//   // Check if user has scrolled to the bottom
//   if (scrollY + windowHeight >= mainHeight) {
//     header.style.position = 'fixed';
//     header.style.bottom = '0';
//     header.style.top = 'auto';
//   }
// });












// SOOOOOOOOO NICE 





