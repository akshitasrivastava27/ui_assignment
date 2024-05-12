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

function changeReadMore() { 
  const mycontent = 
      document.getElementById('item1id'); 
  const mybutton = 
      document.getElementById('mybuttonid'); 
  const span1 = document.getElementById("span1") 

  if (mycontent.style.display === 'none'
      || mycontent.style.display === '') { 
      mycontent.style.display = 'inline'; 
      span1.style.display = "none"; 
      mybutton.textContent = 'Read Less'; 
  } else { 
      mycontent.style.display = 'none'; 
      mybutton.textContent = 'Read More'; 
      span1.style.display = "inline"; 
  } 
} 