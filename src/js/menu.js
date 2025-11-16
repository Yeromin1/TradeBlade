// data-menu-open на кнопку открытия
document
  .querySelectorAll('[filter-menu-open], [data-menu-open]')
  .forEach(button => {
    button.addEventListener('click', () => {
      const targetMenu = button.hasAttribute('filter-menu-open')
        ? document.querySelector('[filter-menu]')
        : document.querySelector('[data-menu]');

      if (targetMenu) {
        targetMenu.classList.add('is-open');
        document.documentElement.classList.add('no-scroll');
      }
    });
  });

// data-menu-close на кнопку закрытия
document
  .querySelectorAll('[filter-menu-close], [data-menu-close]')
  .forEach(button => {
    button.addEventListener('click', () => {
      const targetMenu = button.hasAttribute('filter-menu-close')
        ? document.querySelector('[filter-menu]')
        : document.querySelector('[data-menu]');

      if (targetMenu) {
        targetMenu.classList.remove('is-open');
        document.documentElement.classList.remove('no-scroll');
      }
    });
  });

// Закрытие при клике на ссылку
document.querySelectorAll('[menu-mobal-link]').forEach(link => {
  link.addEventListener('click', e => {
    const targetMenu = document.querySelector('[data-menu]');
    if (targetMenu) {
      targetMenu.classList.remove('is-open');
      document.documentElement.classList.remove('no-scroll');
    }
  });
});
