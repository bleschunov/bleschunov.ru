let arr = [
  "ocean.jpg",
  "sky.jpg",
  "waterfall.jpg",
];

let x = getRandomNumber(arr.length);

let image = document.querySelector('.page__image');
image.src = `images/${arr[x]}`;

function getRandomNumber(max=0) {
  return Math.floor(Math.random()*max);
}
