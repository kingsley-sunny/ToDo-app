const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
      menu.classList.remove('hidden')

    } else {
      menu.classList.add('hidden')
    }
  }

)