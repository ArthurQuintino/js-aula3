/* CJAM - CURSO DE JAVASCRIPT ANDRÉ MAURÍCIO */


/*
01 - Comente o console.log acima, e,

- Após a const "harryPotterAuthor" (abaixo), exiba no console a parte "J.K." da string "harryPotterAuthor";
- Não digite a string "J.K." manualmente;
*/

const harryPotterAuthor = 'J.K. Rowling'
console.log(harryPotterAuthor.slice(0,1)+ harryPotterAuthor.slice(2,3))


/*
02 - Comente o console.log acima, e,

- Após a const "bestMovie" (abaixo), declare uma constante "realBestMovie";
- Atribua à "realBestMovie" a mesma string da "bestMovie", mas substituindo o nome do filme para "Moonlight";
- Exiba a "realBestMovie" no console.
*/

const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!'
const realBestMovie = bestMovie.replace("La la land","Moonlight") 
console.log(realBestMovie)

/*
03 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene o resto de 10 dividido por 3 em uma constante "reminder";
- Exiba a reminder no console. O resultado deve ser 1;
*/

const reminder = 10 % 3 
console.log(reminder)



/*
04 - Comente o console.log acima, e,

- Abaixo da let "episodes", incremente o valor dela em 1;
- Após o incremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 7.
*/

//let episodes = 6
//episodes = episodes + 1 
//console.log(episodes)


/*
05 - Comente o console.log acima, e,

- Decremente a let "episodes" em 1;
- Após o decremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 6.
*/

//let episodes = 1
//episodes = episodes + 5
//console.log(episodes)


/*
06 - Comente o console.log acima, e,

- Utilize o operador addition assignment para atualizar o valor da let "episodes" para 10;
- Após a atribuição, exiba a let "episodes" no console.
*/

let episodes = 6 
console.log(episodes += 4)

/*
07 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene a string 'O nº de episódios é: NUMERO_DE_EPISÓDIOS' em uma constante "allEpisodes";
- Insira a let "episodes" no lugar de "NUMERO_DE_EPISÓDIOS";
- Exiba a "allEpisodes" no console.
*/
const frase = 'O nº de episódios é: NUMERO_DE_EPISÓDIOS'
let allepisodes = frase.replace("NUMERO_DE_EPISÓDIOS", episodes)
console.log(allepisodes)
/*
08 - Comente o console.log acima, e,

- Descomente a const "bookMessage" e o console.log abaixo;
- Encontre uma forma de incluir as aspas simples do nome do livro na string;
- Não modifique nenhuma aspas da string para aspas duplas.
- Não use template strings.
*/

const bookMessage = '\'O Conto da Aia\' \'é um dos livros mais vendidos da década.'
console.log(bookMessage)



/*
09 - Comente o console.log acima (e a const bookMessage caso não tenha descoberto a resolução), e,

- Após a const "name" (abaixo), declare uma let "newName";
- A let "newName" deverá armazenar uma string ES5 com o mesmo valor que "name" armazena;
- Só que com as letras iniciais do nome e sobrenome maiúsculas;
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
*/

const name = 'walter white';
let newName = name
newName = newName[0,7].replace("w","W") + newName.slice(1,7) + newName[7].replace("w","W")+ newName.slice(8,12)
console.log(newName)
//console.log(newName[0].toUpperCase() + newName.slice(1,7) + newName[7].toUpperCase()+ newName.slice(8,12))



/*
10- Comente o console.log acima, e,

- Atribua à "newName" uma template string;
- A template string deverá resultar no mesmo valor que a "newName" tinha anteriormente (nome e sobrenome com letras iniciais maiúsculas);
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
*/


 newName = "O ator mais famoso de 2008 é: " + newName 
 console.log(newName)

