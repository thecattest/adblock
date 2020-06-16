const parent = document.querySelector('.sg-layout__box')
const elements = document.querySelectorAll('.sg-text.js-answer-content.brn-rich-content')
elements.forEach( element => {
  element.style.border = '3px dashed black'
  element.style.padding = '20px'
  element.style.margin = '15px'
  parent.append(element)
})
