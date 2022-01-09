/* abre e fecha o menu quando clicar no ícone: humburguer e x */
const nav = document.querySelector('.cabecalho-menu ');
const menu__icon = document.querySelectorAll('.menu__icon');

for(const element of menu__icon){
  element.addEventListener('click', function() {
    nav.classList.toggle('menu__show');
  })

}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('.menu__link');
for(const link of links){
  link.addEventListener('click', function() {
    nav.classList.remove('menu__show');
  })
}