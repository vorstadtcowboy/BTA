(function() {
  'use strict';
  const menuBtn = document.querySelector('button');
  const menu = document.querySelector('nav');
  if (!menuBtn || !menu) {
    return;
  }
  menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('overflow');
    menu.classList.toggle('show');
  });
})();
