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

  // Клики по модулям (для всех устройств)
  document.querySelectorAll('.module, .document-block, .brandbook-block').forEach(block => {
    const header = block.querySelector('.block-header');
    if (header) {
      header.addEventListener('click', function(e) {
        e.stopPropagation();
        // Закрываем другие
        document.querySelectorAll('.module, .document-block, .brandbook-block').forEach(b => {
          if (b !== block) b.classList.remove('active');
        });
        // Открываем/закрываем текущий
        block.classList.toggle('active');
      });
    }
  });
});
