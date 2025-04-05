document.querySelectorAll('[data-block]').forEach(block => {
  block.querySelector('.block-header').addEventListener('click', () => {
    document.querySelectorAll('[data-block]').forEach(other => {
      if (other !== block) {
        other.classList.remove('active');
      }
    });
    block.classList.toggle('active');
  });
});

// Мобильное меню (если понадобится)
document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});
