const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 1.1
const peso4 = Number('2.1')

console.log(peso1, peso2, peso3, peso4)

console.log(Number.isInteger(peso1)) // true
console.log(Number.isInteger(peso2)) // true
console.log(Number.isInteger(peso3)) // false
console.log(Number.isInteger(peso4)) // false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / ( peso1 + peso2)

console.log(media)
/**
 *                   toFixed
 *   para ter controle de casas decimais que eu quero que imprima
 */
console.log(media.toFixed(2))

/**                  toString
 *    
 *   converte um valor numérico em ums string
 */
console.log(media.toString())
console.log(media.toString(2)) // converte o media em binário

/** ALGUNS CUIDADOS */

console.log(7/0) // infinito
console.log("10" / 2) // 5
console.log("10.2" / 2) // 5
console.log("10,2" / 2) // NaN
console.log("Show" * 2) // NaN
console.log(0.1 + 0.7) // Imprecisão devido à especificação 

//console.log(10.4525.toFixed(2)) Não pode chamar o literal direto com função
console.log((10.4525).toFixed(2)) // o certo é colocar o literal entre parênteses