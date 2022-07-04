function typeWriter(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = ' ';
    textoArray.forEach((letra, index) => {
        setTimeout(() => element.innerHTML += letra, 90 * index);
    });
}

const frase = document.querySelector('p');
typeWriter(frase);

function typeWriterT(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = ' ';
    textoArray.forEach((letra, index) => {
        setTimeout(() => element.innerHTML += letra, 90 * index);
    });
}

const fraseT = document.querySelector('#two');
typeWriterT(fraseT);