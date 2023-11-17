//  SLIDER CON BARRA DE CARGA 

const slider = document.querySelector(".imageSlider")
const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")
const captionH1 = document.querySelector(".caption h1")
const captionP = document.querySelector(".caption p")
const progressBar = document.querySelector('.progress');

const images = ["entry.jpg" , "hg.webp","mg.webp","rg.webp", "pg.jpg"]

const headings = ["Entry Grade",
                "High Grade",
                "Master Grade",
                "Real Grade",
                "Perfect Grade"]

const descriptions = ["The new entry line for gunpla enthusiast",
                    "Unlimited Possibilities",
                    "Everything you want of gunpla",
                    "The closest to the real thing",
                    "Gunpla Perfected"]

let pos = 0

function slide(){
    slider.style.backgroundImage = `url(./img/${images[pos]})`
    slider.classList.add("imageFade")

    setTimeout( () => {
        slider.classList.remove("imageFade")
    }, 500)
    captionH1.textContent = headings[pos]
    captionP.textContent = descriptions[pos]
    let progress = 100 / images.length * (pos + 1)  
    fillProgressBar(progress)
}

arrowLeft.addEventListener("click", prevSlide)

arrowRight.addEventListener("click", nextSlide
)

function nextSlide(){
    pos++
    if(pos> images.length - 1) pos = 0
    slide()
    restartAutoplay();
}
function prevSlide(){
    pos--
    if(pos<0) pos = images.length - 1
    slide()
    restartAutoplay();
}

let intervalId; // almacenar el id del intervalo

function autoplay(){
    intervalId = setInterval( () => {
        nextSlide()
    }, 5000)
    
}
function restartAutoplay() {
    clearInterval(intervalId); // detiene el intervalo 
    autoplay(); // Inicia nuevamente el intervalo 
}

function fillProgressBar(progress) {
    progressBar.style.width = `${progress}%`;
}
  
autoplay()



// CARD CON EFECTO MOUSEMOVE

const gundamPoster = document.querySelector(".gundamPoster")
const height = gundamPoster.clientHeight
const width = gundamPoster.clientWidth

gundamPoster.addEventListener("mousemove", (e) => {
    const {layerX, layerY} = e
    const {offsetX, offsetY} = e
    const yRotation = ( (layerX - width / 2) / width) * 20 
    const xRotation = ( (layerY - height / 2) / height) * 20
    
    const morphString = 
    `perspective(1000px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)`

    gundamPoster.style.transform = morphString



})

gundamPoster.addEventListener("mouseout", ()=>{
    gundamPoster.style.transform = 
    `perspective(1000px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})