const rileyEstado = document.querySelector('.estado')
const rileyIMG = document.querySelector('.imagem')

const rileyMedo = document.querySelector('.medo')
const rileyRaiva = document.querySelector('.raiva')
const rileyFeliz = document.querySelector('.feliz')
const rileyNojo = document.querySelector('.nojo')
const rileyTriste = document.querySelector('.triste')

rileyMedo.addEventListener('click', () => {
    rileyEstado.innerText = 'Medo'
    rileyIMG.src = './Assests/IMG/riley_medo.png'
})
rileyRaiva.addEventListener('click', () => {
    rileyEstado.innerText = 'Raiva'
    rileyIMG.src = './Assests/IMG/riley_sangada.jpg'
})
rileyFeliz.addEventListener('click', () => {
    rileyEstado.innerText = 'Feliz'
    rileyIMG.src = './Assests/IMG/riley_feliz.jpg'
})
rileyNojo.addEventListener('click', () => {
    rileyEstado.innerText = 'Nojo'
    rileyIMG.src = './Assests/IMG/riley_repudio.jpg'
})
rileyTriste.addEventListener('click', () => {
    rileyEstado.innerText = 'Triste'
    rileyIMG.src = './Assests/IMG/riley_triste.jpg'
})