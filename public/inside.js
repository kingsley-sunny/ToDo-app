const insideMenu = document.getElementById('insideMenu');
const insideburger = document.getElementById('insideBurger');

insideburger.addEventListener('click', () => {
    if(insideMenu.classList.contains('hidden')) {
      insideMenu.classList.remove('hidden')

    } else {
      insideMenu.classList.add('hidden')
    }
  }

)