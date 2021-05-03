
/* Header Element*/

var stickyNavbar = document.getElementById("stickyNavbar");
var sticky = document.getElementsByClassName('sticky');

            function fixNav() {
                if (window.pageYOffset >= topOfNav) {

                   stickyNavbar.classList.add('sticky')
                } else {
                    stickyNavbar.classList.remove('sticky')}
            };
            window.addEventListener('scroll', fixNav)
     .fixed-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%; }

/* City Dropdown Button*/

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

