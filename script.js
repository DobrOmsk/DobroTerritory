document.addEventListener('DOMContentLoaded', function() {
  // Мобильное меню
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Раскрывающиеся блоки
  document.querySelectorAll('.block-header').forEach(header => {
    header.addEventListener('click', function() {
      const block = this.parentElement;
      const isActive = block.classList.contains('active');
      
      // Закрываем все блоки в том же контейнере
      const container = block.parentElement;
      container.querySelectorAll('.active').forEach(activeBlock => {
        if (activeBlock !== block) {
          activeBlock.classList.remove('active');
        }
      });
      
      // Переключаем текущий блок
      block.classList.toggle('active', !isActive);
    });
  });
});
