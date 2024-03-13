const accordion1 = document.querySelector('.accordion1 .btn-accordion')
const accordionText1 = document.querySelector('.accordion1 .text')
const caret1 = document.querySelector('.accordion1 .caret')
const accordion2 = document.querySelector('.accordion2 .btn-accordion')
const accordionText2 = document.querySelector('.accordion2 .text')
const caret2 = document.querySelector('.accordion2 .caret')
const accordion3 = document.querySelector('.accordion3 .btn-accordion')
const accordionText3 = document.querySelector('.accordion3 .text')
const caret3 = document.querySelector('.accordion3 .caret')

const toggleAccordion1 = function() {
    accordionText1.classList.toggle('show')
    caret1.classList.toggle('selected')
    accordionText2.classList.remove('show')
    caret2.classList.remove('selected')
    accordionText3.classList.remove('show')
    caret3.classList.remove('selected')
}

const toggleAccordion2 = function() {
    accordionText2.classList.toggle('show')
    caret2.classList.toggle('selected')
    accordionText1.classList.remove('show')
    caret1.classList.remove('selected')
    accordionText3.classList.remove('show')
    caret3.classList.remove('selected')
}

const toggleAccordion3 = function() {
    accordionText3.classList.toggle('show')
    caret3.classList.toggle('selected')
    accordionText1.classList.remove('show')
    caret1.classList.remove('selected')
    accordionText2.classList.remove('show')
    caret2.classList.remove('selected')
}

accordion1.addEventListener('click', toggleAccordion1)
accordion2.addEventListener('click', toggleAccordion2)
accordion3.addEventListener('click', toggleAccordion3)