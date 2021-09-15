window.onload = function(){
    const toggleButton = document.getElementsByClassName('nav-toggle')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
  
    toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  })
  }

function openProfile() {    
  const profileLinks = document.getElementsByClassName('profile-links')[0];
//    profileLinks.style.display === 'none' ? 'block' : 'none';
profileLinks.classList.toggle('hidden');
}