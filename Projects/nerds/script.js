const open = document.querySelector('.btn-map'),
  modal = document.querySelector('.modal-form'),
  close = document.querySelector('.modal-close'),
  overlay = document.querySelector('.modal-overlay'),

  chek = document.querySelectorAll('input[type="radio"]'),
  slide = document.querySelectorAll('.slider-item');


open.addEventListener("click", (e) => {
  if (e.target) {
    e.preventDefault();
  }
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
close.addEventListener("click", (e) => {
  if (e.target) {
    e.preventDefault();
  }
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

chek.forEach(item => {
  item.addEventListener('click', (e) => {
    const target = e.target;
    chek.forEach((item, i) => {
      if (target == item ) {
        chek[i].checked = true;
      }
    });
    slide.forEach((item, i) => {
      slide[i].classList.add('hidden');
      if (chek[i].checked == true) {
        slide[i].classList.remove('hidden');
      }
    });
  });
});

let index = 0;

function chekShow () {
  chek[index].checked = true;
  ++index;
  if (index > 2) { index = 0}

  slide.forEach((item, i) => {
    slide[i].classList.add('hidden');
    if (chek[i].checked == true) {
      slide[i].classList.remove('hidden');
    }
  });
}

let timerId = setInterval(chekShow, 3000);