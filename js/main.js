$('#contributors figure').hover(e => {
  e.target.classList.toggle('blur')
  e.target.nextElementSibling.classList.toggle('visible')
})
$('#section-left, #section-right').hover(e => {
  e.currentTarget.firstElementChild.classList.toggle('hover')
})
