const tssrct = require("tesseract.js") // constando o tesseract

tssrct.recognize('./imagem.png', 'eng', { logger: e => console.log(e) }) // função recognize do tesseract.js
    .then(out => console.log(out))

// console.log do resultado
