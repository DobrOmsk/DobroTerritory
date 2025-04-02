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
      const block = this.closest('.module, .document-block, .brandbook-block');
      block.classList.toggle('active');
      
      // Закрываем другие блоки в том же контейнере
      const container = block.parentElement;
      container.querySelectorAll('.module, .document-block, .brandbook-block').forEach(otherBlock => {
        if (otherBlock !== block) {
          otherBlock.classList.remove('active');
        }
      });
    });
  });
});
