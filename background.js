const images = ["cat.png", "kirin.png"];

const random = Math.floor(Math.random() * images.length);
const selectImage = images[random];

const bgImage = document.createElement("img");
bgImage.src = `img/${selectImage}`;

document.body.appendChild(bgImage);