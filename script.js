document.addEventListener('DOMContentLoaded', function() {
  // Мобильное меню
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // Закрытие меню при клике вне его
  document.addEventListener('click', function() {
    if (navMenu) navMenu.classList.remove('active');
  });

  // Для мобильных устройств - обработка кликов по блокам
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    document.querySelectorAll('.module, .document-block, .brandbook-block').forEach(block => {
      const header = block.querySelector('.block-header');
      if (header) {
        header.addEventListener('click', function(e) {
          e.stopPropagation();
          // Закрываем другие блоки
          document.querySelectorAll('.module, .document-block, .brandbook-block').forEach(b => {
            if (b !== block) b.classList.remove('active');
          });
          // Переключаем текущий
          block.classList.toggle('active');
        });
      }
    });
  }
});
