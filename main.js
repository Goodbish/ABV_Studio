// SWIPER SLIDER

const swiper1 = new Swiper('.slider__swiper', {

  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper2 = new Swiper('.cards__swiper', {

  slidesPerView: 3,
	spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// === / SWIPER SLIDER ===

// === LIST ===

let list_block = document.querySelectorAll(".list__item"),
    list_button = document.querySelectorAll(".list__header__button");

for (let i = 0; i < list_button.length; i++) {
    list_button[i].addEventListener('click', function() {
        list_block[i].classList.toggle("active")
    })
}

// === / LIST ===

// === MODAL WINDOW ===

// Get the modal
const modal = document.querySelector(".modal");

// Get the button that opens the modal
const modal_btn = document.querySelectorAll(".modal__button");

// Get the <span> element that closes the modal
const modal_close = document.querySelector(".modal__close");

// When the user clicks the button, open the modal 
modal_btn.forEach(element => {
  element.onclick = function() {
    modal.style.display = "block"
  }
})

// When the user clicks on <span> (x), close the modal
modal_close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// === / MODAL WINDOW ===

// === SEND FORM ===

const form = document.querySelector('.form__contact');
form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  let formData = new FormData(form);
  
  let responce = await fetch('sendmail.php', {
    method: 'POST',
    body: formData
  })

  if (responce.ok) {
    let result = await Response.json();
    alert(result.message);
    form.reset();
  } else {
    alert("Ошибка")
  }

}
    
