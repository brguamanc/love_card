'use strict';

function rotatePhotos() {
  let cards = document.querySelectorAll('.app__card') || [];
  let angles = [-15, -10, -5, 5, 10, 15];
  cards.forEach(card => {
    let angle = angles[Math.floor((Math.random() * angles.length) + 1) - 1];
    let width = window.getComputedStyle(card.querySelector('.app__picture'), null).getPropertyValue('width');
    card.querySelector('.app__picture').style.height = width;
    card.style.transform = `rotate(${angle}deg)`;
  });
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    rotatePhotos();
    window.addEventListener('resize', () => {
      rotatePhotos();
    });
  }
}
