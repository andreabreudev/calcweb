export function calculator() {
    
    const inputNumbers = document.getElementById('inputNumbers')
    const inputResult = document.getElementById('inputResult')
    
    try {

        const result = eval(inputNumbers.value)
        inputResult.value = parseFloat(result)

    } catch {
        inputResult.value = 'Erro na operação'
        
    }
    
    }
