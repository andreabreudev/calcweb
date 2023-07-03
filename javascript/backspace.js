
export function backspace() {
    const inputNumbers = document.getElementById('inputNumbers')
    inputNumbers.value = inputNumbers.value.slice(0, -1)
}