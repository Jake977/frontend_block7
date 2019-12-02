import '../scss/style.scss';

console.log('Works!');

let serviceReadmore = document.querySelector('.service__button');
let serviceText = document.querySelector('.service__text2');

serviceReadmore.addEventListener('click', function(){
  serviceText.classList.toggle('service__text--visibility');
});
