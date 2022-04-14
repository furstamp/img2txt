const T = require("tesseract.js") // constando o tesseract

T.recognize('./imagem.png', 'eng', { logger: e => console.log(e) })
    .then(out => console.log(out))

// console.log do resultado
