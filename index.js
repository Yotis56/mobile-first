//exchange carousel code

const rightBtn = document.querySelector(".carousel-control.arrow-rigth")
const leftBtn = document.querySelector(".carousel-control.arrow-left")
const carousel = document.querySelector(".exchange__carousel-container")

leftBtn.style.display = "none"

rightBtn.addEventListener("click", () => {
  let width = document.querySelector(
    ".exchange__carousel-container"
  ).clientWidth
  carousel.style.transition = " transform 0.4s ease-in-out"
  carousel.style.transform = `translateX(-${width}px)`
  rightBtn.style.display = "none"
  leftBtn.style.display = "block"
})

leftBtn.addEventListener("click", () => {
  carousel.style.transition = " transform 0.4s ease-in-out"
  carousel.style.transform = `translateX(0px)`
  rightBtn.style.display = "block"
  leftBtn.style.display = "none"
})

// planes' slider JS.

const planesRightBtn = document.querySelector(".slider__arrow-right")
const planesLeftBtn = document.querySelector(".slider__arrow-left")
const planesSlider = document.querySelector(".planes__slider")
const cards = document.querySelectorAll(".slider-card")

const initialTranslate = -136
const cardWidth = 194

function getPreviousCard() {
  let previousCard
  cards.forEach((card, index) => {
    if (card.classList.contains("selected")) previousCard = index
  })
  return previousCard
}

planesRightBtn.addEventListener("click", () => {
  let previousCard = getPreviousCard()
  let activeCard = previousCard + 1

  if (previousCard === 0) {
    planesSlider.style.transform = `translateX(${initialTranslate}px)`
    planesLeftBtn.style.display = "block"
  } else if (previousCard === 1) {
    planesRightBtn.style.display = "none"
    planesSlider.style.transform = `translateX(${initialTranslate - cardWidth
      }px)`
  }
  cards[activeCard].classList.toggle("selected")
  cards[previousCard].classList.toggle("selected")
})
planesLeftBtn.addEventListener("click", () => {
  let previousCard = getPreviousCard()
  let activeCard = previousCard - 1

  if (previousCard === 2) {
    planesSlider.style.transform = `translateX(${initialTranslate}px)`
    planesRightBtn.style.display = "block"
  } else if (previousCard === 1) {
    planesLeftBtn.style.display = "none"
    planesSlider.style.transform = `translateX(${initialTranslate + cardWidth
      }px)`
  }
  cards[activeCard].classList.toggle("selected")
  cards[previousCard].classList.toggle("selected")
})

// preguntas' section JS

const preguntas = document.querySelector(".preguntas")

preguntas.addEventListener("click", (event) => {
  if (event.target.classList.contains('preguntas') || event.target.classList.contains('preguntas__title')) return

  const selectedQuestion = event.path.find((element) => element.classList.contains("pregunta-container"))
  const respuesta = Array.from(selectedQuestion.children).find(element => element.classList.contains('respuesta'))
  const pregunta = Array.from(selectedQuestion.children).find(element => element.classList.contains('pregunta'))
  const preguntaButtons = Array.from(pregunta.children).find(element => element.classList.contains('pregunta__buttons'))

  Array.from(preguntaButtons.children).forEach(button => button.classList.toggle('arrow-active'))
  respuesta.classList.toggle('respuesta-active')

})
