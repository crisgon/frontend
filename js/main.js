$('#contributors figure').hover(e => {
  e.target.classList.toggle('blur')
  e.target.nextElementSibling.classList.toggle('visible')
})
