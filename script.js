let url = "https://i.ibb.co/kBjTZGt/bg.png";
let image = new Image();
image.id = "image";
image.src = url;

let message = document.createElement("P");
message.innerText = "aguarde";
message.id = "text-transform";
message.className = "img-text";
let frId = setInterval(onLoadImage, 400);

function onLoadImage() {
  document.getElementById("img-container").appendChild(image);
  let m = document.getElementById("img-container").appendChild(message);
  m.style.textTransform = "uppercase";
  clearInterval(frId);
}
