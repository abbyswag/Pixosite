const responsiveNavbar = document.querySelector('.responsiveNavbar')
const crossIcon = document.querySelector('.crossIcon')
const responsiveNavigation = document.querySelector('.responsiveNavigation')

responsiveNavbar.addEventListener('click',()=>{
  responsiveNavbar.style.display = 'none'
  crossIcon.style.display = 'block'
  responsiveNavigation.style.display = 'block'

})

crossIcon.addEventListener('click',()=>{
  responsiveNavbar.style.display = 'block'
  crossIcon.style.display = 'none'
  responsiveNavigation.style.display = 'none'
})
