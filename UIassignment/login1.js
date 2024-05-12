function LoginPage()  {
    window.location.href = "login.html";
}
function EventPage() {
  window.location.href = "event.html";
}


function LoginPage()  {
  window.location.href = "login.html";
}

function Favourites() {
  window.location.href ="favourites.html";
}


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if(section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function toggleNav() {
  var buttons = document.querySelectorAll('.navigation .btn:not(.nav-toggle)');
  buttons.forEach(button => {
      button.style.display = button.style.display === 'block' ? 'none' : 'block';
  });
}

