
const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '%' , '*', '.']


const inputNumbers = document.getElementById('inputNumbers')
const inputResult = document.getElementById('inputResult')
const copy = document.getElementById('copy')
const check = document.getElementById('check')

import { calculator } from "./calculator.js"
import { backspace } from "./backspace.js"
import { clean } from "./clean.js"


inputNumbers.addEventListener('keydown', (ev) => {
    ev.preventDefault()
    if (characters.includes(ev.key)) {
        inputNumbers.value += ev.key
        return

    } else if (ev.key === 'Backspace') {
        backspace()
    } else if (ev.key === 'Enter') {
        calculator()
    }
    
})


// Função limpar input's
document.getElementById('clean').addEventListener('click', clean)


// Função backspace(apagar)
document.getElementById('backspace').addEventListener('click', backspace)

// Função igual(resultado)
document.getElementById('resultEqual').addEventListener('click', calculator)




copy.addEventListener('click', () => {
    navigator.clipboard.writeText(inputResult.value)
    if (copy.style.display !== 'none') {
        copy.style.display = 'none'
        check.style.display =  'inline-block'
    } else {
        copy.style.display = 'inline-block'
        check.style.display = 'none'
    }
})


check.addEventListener('click', () => {
    if (check.style.display !== 'none') {
        check.style.display = 'none'
        copy.style.display =  'inline-block'
    } else {
        check.style.display = 'inline-block'
        copy.style.display = 'none'
    }
})


document.querySelectorAll('.key').forEach((item) => {
    item.addEventListener('click', (ev) => {
        ev.preventDefault()
        inputNumbers.value += item.dataset.value
    })
})









