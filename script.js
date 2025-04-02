document.addEventListener('DOMContentLoaded', function() {
  const modules = document.querySelectorAll('.module');
  const isMobile = window.innerWidth <= 768;

  // Функция для закрытия всех модулей
  function closeAllModules() {
    modules.forEach(module => {
      module.classList.remove('active');
    });
  }

  // Функция для установки правильной высоты
  function setContentHeight(module, open) {
    const content = module.querySelector('.module-content');
    if (open) {
      const contentHeight = content.scrollHeight + 30; // + отступы
      content.style.maxHeight = contentHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  }

  // Инициализация модулей
  function initModules() {
    modules.forEach(module => {
      const header = module.querySelector('.module-header');
      const content = module.querySelector('.module-content');
      
      // Начальное состояние
      setContentHeight(module, false);
      
      // Обработчики событий
      if (isMobile) {
        // Мобильная версия - по клику
        header.addEventListener('click', function() {
          const wasActive = module.classList.contains('active');
          closeAllModules();
          if (!wasActive) {
            module.classList.add('active');
            setContentHeight(module, true);
          }
        });
      } else {
        // Десктоп версия - по наведению
        module.addEventListener('mouseenter', function() {
          closeAllModules();
          module.classList.add('active');
          setContentHeight(module, true);
        });
        
        module.addEventListener('mouseleave', function() {
          module.classList.remove('active');
          setContentHeight(module, false);
        });
      }
    });
  }

  // Обработчик клика вне модуля (для мобильных)
  if (isMobile) {
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.module')) {
        closeAllModules();
      }
    });
  }

  // Обработчик изменения размера окна
  window.addEventListener('resize', function() {
    const newIsMobile = window.innerWidth <= 768;
    if (isMobile !== newIsMobile) {
      isMobile = newIsMobile;
      closeAllModules();
    }
  });

  // Инициализация
  initModules();
});
