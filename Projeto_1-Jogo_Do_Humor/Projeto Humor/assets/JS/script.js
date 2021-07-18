const elemntoNome = document.getElementById('nome');
const elemntoSituacao = document.querySelector('#situacao');
const elementoImg = document.querySelector('#imagem');
let elementoBtn = document.querySelector('#alterar');


elementoBtn.addEventListener('click', () =>{
    if(elementoBtn.value =='primeiro'){
        elementoImg.src = './assets/IMG/neymar_triste.jpg'
        elemntoNome.innerText ='Menino Ney triste'
        elemntoSituacao.innerText = 'Triste'
        elementoBtn.value = 'segundo'
    } else if(elementoBtn.value == 'segundo'){
        elementoImg.src = './assets/IMG/Machucado.jpg'
        elemntoNome.innerText ='Você apertou tão forte que machucou o menino Ney.'
        elemntoSituacao.innerText = 'Machucado'
        elemtntoBtn.value ='terceiro'
    } else{
        elementoImg.src ='./assets/IMG/neymar_Feliz.jpg'
        elementoNome.innerText = 'Neymar Feliz'
        elemntoSituacao.innerText = 'Feliz'
        elementoBtn.value = 'primeiro'
    }
})