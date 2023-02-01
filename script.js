'use strict';

const modal = $('.modal');
const overlay = $('.overlay');
const btncloseModal = $('.close-modal');
const btnsOpenModal = $('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  $(btnsOpenModal[i]).on('click', function () {
    showModal('modal');
  });
}

btncloseModal.on('click', function () {
  removeModal('modal');
});

$('body').on('keydown', function (event) {
  if (event.which === 27) {
    console.log('escaped');
    removeModal('modal');
  }
});

function showModal(name) {
  $('.' + name).removeClass('hidden');
}

function removeModal(name) {
  $('.' + name).addClass('hidden');
}
