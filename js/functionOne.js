
// banner header - principal
var imagens = ["img/b_principal3.png", "img/b_principal2.png", "img/b_principal1.png"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 3;
document.querySelector('.gif img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 2500);