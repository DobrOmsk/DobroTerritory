document.addEventListener('DOMContentLoaded', function() {
  // Мобильное меню
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Функция для работы раскрывающихся блоков
  function setupBlocks(containerClass) {
    const blocks = document.querySelectorAll(`${containerClass} .module, 
                                         ${containerClass} .document-block, 
                                         ${containerClass} .brandbook-block`);
    
    blocks.forEach(block => {
      const header = block.querySelector('.block-header');
      const content = block.querySelector('.block-content');
      
      header.addEventListener('click', function() {
        // Закрываем все блоки в этом контейнере
        document.querySelectorAll(`${containerClass} .active`).forEach(activeBlock => {
          if (activeBlock !== block) {
            activeBlock.classList.remove('active');
          }
        });
        
        // Переключаем текущий блок
        block.classList.toggle('active');
      });
    });
  }

  // Инициализация всех блоков
  setupBlocks('.modules-container');
  setupBlocks('.documents-container');
  setupBlocks('.brandbook-container');
});
