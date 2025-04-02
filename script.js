document.addEventListener('DOMContentLoaded', function() {
  // Мобильное меню
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // Закрытие меню при клике вне его
  document.addEventListener('click', function() {
    navMenu.classList.remove('active');
  });

  // Раскрывающиеся блоки
  document.querySelectorAll('.block-header').forEach(header => {
    header.addEventListener('click', function(e) {
      e.stopPropagation();
      const block = this.closest('.module, .document-block, .brandbook-block');
      const container = block.parentElement;
      
      // Закрываем другие блоки
      container.querySelectorAll('.module, .document-block, .brandbook-block').forEach(b => {
        if (b !== block) b.classList.remove('active');
      });
      
      // Переключаем текущий блок
      block.classList.toggle('active');
    });
  });
});
