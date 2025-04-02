document.addEventListener('DOMContentLoaded', function() {
  const modules = document.querySelectorAll('.module');
  let isMobile = window.innerWidth <= 768;

  // Функция для закрытия всех модулей
  function closeAllModules() {
    modules.forEach(module => {
      module.classList.remove('active');
      const content = module.querySelector('.module-content');
      content.style.maxHeight = '0';
    });
  }

  // Функция для установки правильной высоты контента
  function setContentHeight(module) {
    const content = module.querySelector('.module-content');
    if (module.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  }

  // Инициализация модулей
  function initModules() {
    modules.forEach(module => {
      const header = module.querySelector('.module-header');
      const content = module.querySelector('.module-content');
      
      // Установка начальной высоты
      setContentHeight(module);
      
      // Обработчик клика/наведения
      if (isMobile) {
        header.addEventListener('click', function() {
          if (module.classList.contains('active')) {
            module.classList.remove('active');
          } else {
            closeAllModules();
            module.classList.add('active');
          }
          setContentHeight(module);
        });
      } else {
        module.addEventListener('mouseenter', function() {
          closeAllModules();
          module.classList.add('active');
          setContentHeight(module);
        });
        
        module.addEventListener('mouseleave', function() {
          module.classList.remove('active');
          setContentHeight(module);
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
