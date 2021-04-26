/** STRING */

/**
 *  cadeia de caractéres
 */

const escola = "Cod3r"

/** charAt
 * retorna a letra com o índice indicado
 * 
*/

console.log(escola.charAt(4)) // 4
console.log(escola.charAt(5)) // retorna vazio, pois não existe esse índice

/**  indexOf
 * localiza o índice do digito  
*/

console.log(escola.indexOf(3)) // 3

/** substring
 * retorna a parte da string entre os índices iniciais e final, ou até o final da string
 */

console.log(escola.substring(3)) //3r
// vai do índice 2 até o 4 sem incluir o índice 4
console.log(escola.substring(2,4)) // d3

console.log("Escola ".concat(escola))
console.log("Escola " + escola + '!')

/** replace()
 *  o método replace retorna uma nova string com algumas ou todas as corresp. de um padrão substituídas por um determinado caractere.
 *  o padrão pode ser uma string ou regexp
 *  e a subst. pode ser uma string ou uma função a ser chamada para cada correspondência.
*/

// sintaxe
//      str.replace(regexp | substr, newSubStr | function)

console.log(escola.replace(3, 'e')) // Coder

/**      split 
 *   converte ums string em array
*/

console.log('Ana, Maria, Pedro'.split(','))