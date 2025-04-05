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
    // Обработка кликов по Модулю 1
    document.querySelectorAll('.module-1').forEach(block => {
      const header = block.querySelector('.block-header');
      if (header) {
        header.addEventListener('click', function(e) {
          e.stopPropagation();
          // Закрываем другие блоки
          document.querySelectorAll('.module-1').forEach(b => {
            if (b !== block) b.classList.remove('active');
          });
          // Переключаем текущий
          block.classList.toggle('active');
        });
      }
    });

    // Обработка кликов по Модулю 2
    document.querySelectorAll('.module-2').forEach(block => {
      const header = block.querySelector('.block-header');
      if (header) {
        header.addEventListener('click', function(e) {
          e.stopPropagation();
          // Закрываем другие блоки
          document.querySelectorAll('.module-2').forEach(b => {
            if (b !== block) b.classList.remove('active');
          });
          // Переключаем текущий
          block.classList.toggle('active');
        });
      }
    });

    // Обработка кликов по Модулю 3
    document.querySelectorAll('.module-3').forEach(block => {
      const header = block.querySelector('.block-header');
      if (header) {
        header.addEventListener('click', function(e) {
          e.stopPropagation();
          // Закрываем другие блоки
          document.querySelectorAll('.module-3').forEach(b => {
            if (b !== block) b.classList.remove('active');
          });
          // Переключаем текущий
          block.classList.toggle('active');
        });
      }
    });

    // Обработка кликов по Документам
    document.querySelectorAll('.document-block').forEach(block => {
      const header = block.querySelector('.block-header');
      if (header) {
        header.addEventListener('click', function(e) {
          e.stopPropagation();
          // Закрываем другие блоки
          document.querySelectorAll('.document-block').forEach(b => {
            if (b !== block) b.classList.remove('active');
          });
          // Переключаем текущий
          block.classList.toggle('active');
        });
      }
    });

    // Обработка кликов по Брендбуку
    document.querySelectorAll('.brandbook-block').forEach(block => {
      const header = block.querySelector('.block-header');
      if (header) {
        header.addEventListener('click', function(e) {
          e.stopPropagation();
          // Закрываем другие блоки
          document.querySelectorAll('.brandbook-block').forEach(b => {
            if (b !== block) b.classList.remove('active');
          });
          // Переключаем текущий
          block.classList.toggle('active');
        });
      }
    });
  }
});
