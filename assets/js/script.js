document.addEventListener('DOMContentLoaded', function() {
  const modules = document.querySelectorAll('.module');
  const isMobile = window.innerWidth <= 768;

  // Функция для закрытия всех модулей
  function closeAllModules() {
    modules.forEach(module => {
      module.classList.remove('active');
    });
  }

  // Обработчик для модулей
  function setupModule(module) {
    const header = module.querySelector('.module-header');
    
    header.addEventListener('click', function(e) {
      if (isMobile) {
        // На мобильных: toggle текущего модуля
        module.classList.toggle('active');
      } else {
        // На десктопах: закрыть все, открыть текущий
        if (!module.classList.contains('active')) {
          closeAllModules();
          module.classList.add('active');
        }
      }
    });

    // Для десктопов добавляем обработчик hover
    if (!isMobile) {
      module.addEventListener('mouseenter', function() {
        closeAllModules();
        module.classList.add('active');
      });
    }
  }

  // Инициализация всех модулей
  modules.forEach(setupModule);

  // Закрытие модулей при клике вне их области (для мобильных)
  if (isMobile) {
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.module')) {
        closeAllModules();
      }
    });
  }

  // Обновление при изменении размера окна
  window.addEventListener('resize', function() {
    const newIsMobile = window.innerWidth <= 768;
    if (isMobile !== newIsMobile) {
      closeAllModules();
    }
  });
});
