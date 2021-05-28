let link = document.querySelector('#link');
let link2 = document.querySelector('#link2');
let popup = document.querySelector('#pop');
let popup2 = document.querySelector('#pop2');

link.addEventListener('click',() => {
  // alert('click');
  popup.classList.toggle('active');
});

link2.addEventListener('click',() => {
  popup2.classList.toggle('active');
})