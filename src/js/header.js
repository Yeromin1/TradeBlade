const btnLogin = document.querySelector('.btn-login');
const btnRegister = document.querySelector('.btn-register');

//  изменяем стиль
btnLogin.addEventListener('mouseenter', () => {
  btnRegister.style.backgroundColor = '#000';
  btnRegister.style.color = 'var(--q)';
});

// восстанавливаем стиль
btnLogin.addEventListener('mouseleave', () => {
  btnRegister.style.backgroundColor = 'var(--q)';
  btnRegister.style.color = '#000';
});
