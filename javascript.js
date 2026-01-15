document.addEventListener("DOMContentLoaded", () => {

  // MENU CATEGORY SWITCHING
  document.querySelectorAll('.menu-cat').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;

      document.querySelectorAll('.menu-cat')
        .forEach(btn => btn.classList.remove('active'));

      button.classList.add('active');

      document.querySelectorAll('.menu-category').forEach(section => {
        section.classList.toggle(
          'd-none',
          section.dataset.category !== category
        );
      });
    });
  });

});
