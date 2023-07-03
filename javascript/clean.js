export function clean()  {
    const inputNumbers = document.getElementById('inputNumbers')
    const inputResult = document.getElementById('inputResult')
    inputNumbers.value = ''
    inputResult.value = ''
    inputNumbers.focus()
}