// Get the button
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// count visits
// Retrieve visit count from local storage or set it to 0 if not available
var visitCount = localStorage.getItem("page_view") || 0;

// Increment the visit count
visitCount = Number(visitCount) + 1;

// Update local storage with the new visit count
localStorage.setItem("page_view", visitCount);

// Display the visit count in the counter container
document.querySelector(".website-counter").textContent = visitCount;


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});