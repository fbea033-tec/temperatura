// Solicita ao usuário a temperatura em Celsius
let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

// Fórmula de conversão: °F = (°C × 9/5) + 32
let fahrenheit = (celsius * 9/5) + 32;

// Exibe o resultado
alert(`${celsius} °C equivalem a ${fahrenheit.toFixed(2)} °F`);
