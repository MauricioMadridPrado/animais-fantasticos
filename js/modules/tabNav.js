export function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    tabContent[0].classList.add('ativo');
  
    if (tabContent.length && tabMenu.length) {
      function activeTag(index) {
        tabContent.forEach((section) => {
          section.classList.remove('ativo');
        });
        const direcao = tabContent[index].dataset.anime;
        tabContent[index].classList.add('ativo', direcao);

      }
  
      tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
          activeTag(index);
        });
      });
    }
  }
