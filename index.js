//exchange carousel code

const rightBtn = document.querySelector('.carousel-control.arrow-rigth')
const leftBtn = document.querySelector('.carousel-control.arrow-left')
const carousel = document.querySelector('.exchange__carousel-container')

leftBtn.style.display = 'none'

rightBtn.addEventListener('click', ()=> {
  let width = document.querySelector('.exchange__carousel-container').clientWidth
  carousel.style.transition = ' transform 0.4s ease-in-out'
  carousel.style.transform = `translateX(-${width}px)`
  rightBtn.style.display = 'none'
  leftBtn.style.display = 'block'
})

leftBtn.addEventListener('click', ()=> {
  carousel.style.transition = ' transform 0.4s ease-in-out'
  carousel.style.transform = `translateX(0px)`
  rightBtn.style.display = 'block'
  leftBtn.style.display = 'none'
})