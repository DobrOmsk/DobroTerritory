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
    const isMobile = window.innerWidth <= 991;

    blocks.forEach(block => {
      const header = block.querySelector('.block-header');
      const content = block.querySelector('.block-content');
      
      header.addEventListener('click', function() {
        if (isMobile) {
          const wasActive = block.classList.contains('active');
          closeAllBlocks(containerClass);
          if (!wasActive) {
            block.classList.add('active');
          }
        }
      });

      if (!isMobile) {
        block.addEventListener('mouseenter', function() {
          closeAllBlocks(containerClass);
          block.classList.add('active');
        });
        
        block.addEventListener('mouseleave', function() {
          block.classList.remove('active');
        });
      }
    });

    function closeAllBlocks(container) {
      document.querySelectorAll(`${container} .active`).forEach(activeBlock => {
        activeBlock.classList.remove('active');
      });
    }
  }

  // Инициализация всех блоков
  setupBlocks('.modules-container');
  setupBlocks('.documents-container');
  setupBlocks('.brandbook-container');

  // Обработчик изменения размера окна
  window.addEventListener('resize', function() {
    if (window.innerWidth > 991) {
      document.querySelectorAll('.nav-menu').forEach(menu => {
        menu.classList.remove('active');
      });
    }
  });
});
