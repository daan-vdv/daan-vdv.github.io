const typedText = document.querySelector('.typed-text')
const cursor = document.querySelector('.cursor')

const date = new Date
const age = date.getFullYear() - 2006
const text = ['Daan', `${age} years old`, 'a Programmer']
const startDelay = 500
const typingDelay = 100
const erasingDelay = 100
const newTextDelay = 2000
let textIndex = 0
let charIndex = 0

const addClass = () => {
    cursor.classList.add('typing')
}

const removeClass = () => {
    cursor.classList.remove('typing')
}

const erase = () => {
    if (charIndex > 0) {
        addClass()
        typedText.textContent = text[textIndex].substring(0, charIndex - 1)
        charIndex--
        setTimeout(erase, erasingDelay)
    } else {
        removeClass()
        textIndex++
        if (textIndex >= text.length) textIndex = 0
        setTimeout(type, startDelay)
    }
}

const type = () => {
    if (charIndex < text[textIndex].length) {
        addClass()
        typedText.textContent += text[textIndex].charAt(charIndex)
        charIndex++
        setTimeout(type, typingDelay);
    } else {
        removeClass()
        setTimeout(erase, newTextDelay)
    }
}
document.addEventListener('DOMContentLoaded', () => setTimeout(type, startDelay))