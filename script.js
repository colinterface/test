function random(max) {
  return Math.floor(Math.random() * max);
}
function randomColor() {
  return `rgba(${random(255)}, ${random(255)}, ${random(255)}, 1)`;
}

document.addEventListener('DOMContentLoaded', () => {
  var rotation = 0;
  const body = document.getElementsByTagName('body')[0];
  const header = document.getElementsByTagName('h1')[0];
  const images = document.getElementsByTagName('img');
  setInterval(() => {

    body.setAttribute('style', `background-color: ${randomColor()}`);
    header.setAttribute('style', `color: ${randomColor()}`);
    for (var i = 0; i < images.length; i++) {
      images[i].setAttribute('style', `transform: rotate3d(1, 3, 5, ${rotation}deg)`);
      // images[i].setAttribute('style', `transform: matrix(${Math.random() - .5}, ${Math.random() - .5}, ${Math.random() - .5}, ${Math.random() - .5}, ${Math.random() - .5}, ${Math.random() - .5}`);
    }
    rotation++;
  }, 20);
});
