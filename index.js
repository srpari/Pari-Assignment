
window.onload = function(){
  const toggleButton = document.getElementById('nav-toggle');
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];
  const navprofileLinks = document.getElementsByClassName('navbar-profile')[0];
 
  toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      navprofileLinks.classList.toggle('active');
  }) // toggle button acction ends here

  navbarLinks.addEventListener('focusin', function(event) {    
    reset();
    let target = event.target;
    let hasPopup = target.getAttribute('aria-haspopup') === 'true';
    if (hasPopup) {
        open(event.target.nextElementSibling);
        return;
    }
    let popupAnchor = target.parentNode.parentNode.previousElementSibling;
    let isSubMenuAnchor = popupAnchor && popupAnchor.getAttribute('aria-haspopup') === 'true';
    if (isSubMenuAnchor) {
        open(popupAnchor.nextElementSibling);
        return;
    }
  })

  navprofileLinks.addEventListener('focusin', function(event) {    
    reset();
    let target = event.target;
    let hasPopup = target.getAttribute('aria-haspopup') === 'false';
    if (hasPopup) {
        open(event.target.nextElementSibling);
        return;
    }
    let popupAnchor = target.parentNode.parentNode.previousElementSibling;
    let isSubMenuAnchor = popupAnchor && popupAnchor.getAttribute('aria-haspopup') === 'true';
    if (isSubMenuAnchor) {
        open(popupAnchor.nextElementSibling);
        return;
    }
  })

  let opened;
  // resets currently opened list style to CSS based value
  function reset() {
      if (opened) {
          opened.style.display = '';
          opened.setAttribute('aria-hidden', 'true');
          opened.setAttribute('aria-expanded', 'false');
      }
  }

  function open(el) {
    el.style.display = 'flex';
    el.setAttribute('aria-hidden', 'false');
    el.setAttribute('aria-expanded', 'true');
    opened = el;
  }
}

//Click to Open Profile 
function openProfile() {   
  const profileLinks = document.getElementsByClassName('profile-links')[0];
  profileLinks.classList.toggle('active');  
}

