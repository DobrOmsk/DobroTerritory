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

  // Проверка типа устройства (для мобильных оставляем клик)
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  };

  // Обработка блоков только для мобильных устройств
  if (isTouchDevice()) {
    document.querySelectorAll('.module, .document-block, .brandbook-block').forEach(block => {
      // Закрываем все блоки при загрузке
      block.classList.remove('active');
      
      // Назначаем обработчик клика
      const header = block.querySelector('.block-header');
      if (header) {
        header.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          // Закрываем все другие блоки
          document.querySelectorAll('.module, .document-block, .brandbook-block').forEach(b => {
            if (b !== block) b.classList.remove('active');
          });
          
          // Переключаем текущий блок
          block.classList.toggle('active');
        });
      }
    });
  }
});
