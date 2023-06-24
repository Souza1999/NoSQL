// Seleciona-se o banco de dados a ser utilizado da seguinte maneira
	use BancoDeDados

// --------------------------------------------------

/*
Operações de criar ou inserir adicionam novos documentos a uma coleção.
Caso a coleção não exista, essas operações criarão a coleção.
*/
	BancoDeDados> db.minhanovacoleção.insertOne()
	BancoDeDados> db.minhanovacoleção.insertMany()

// O "insertOne" insere apenas um documento e o "insertMany" insere mais de um.

// insertOne
	db.minhanovacoleção.insertOne({nome:"João"})

	db.minhanovacoleção.insertOne({
		nome:"José",
		idade:25,
		hobbies:["danço","canto","músicas"],
		endereço:{rua:"AA", num:"35", apto:"101"}
	})

	db.minhanovacoleção.find( { nome: "José" } )

// insertMany
	db.minhanovacoleção.insertMany([
		{ nome: "Alana", idade: 33, hobbies: ["volley", "filmes"], endereço: { rua: "XX", num: 305, apto: 502 } },
		{ nome: "Alvaro", idade: 43, hobbies: ["volley", "squash"], endereço: { rua: "YY", num: 43 } }
	])

	db.minhanovacoleção.find()
	
// --------------------------------------------------

// Inserindo a partir de uma variável
	document1 = ({ 
		nome: "Anísio", 
		idade: 36, 
		hobbies: ["futebol", "rock"],
		endereço: { rua: "MM", num: 305, apto: 502 } 
	})

	db.minhanovacoleção.insert(document1)

// --------------------------------------------------

// countDocuments(): conta quantos documentos existem na coleção
	db.minhanovacoleção.countDocuments()

// find(): encontra algum documento que possui determinada seleção
	db.minhanovacoleção.find({nome:"João"})
	db.minhanovacoleção.find( {nome:{$in:["Anísio","Márcia"]}} ) // Vai retornar os documentos cujos nomes sejam Anísio ou Márcia.
	db.minhanovacoleção.find( {nome:/^A/} ) // Vai retornar os documentos cujos nomes começam com a letra A.

// --------------------------------------------------

// Alguns operadores de seleção (exemplos avulsos)
	db.minhanovacoleção.find( {likes:50} )		// likes equals 50
	db.minhanovacoleção.find( {likes:{$lt:50}} )	// likes less than 50
	db.minhanovacoleção.find( {likes:{$lte:50}} )	// likes less than equals 50
	db.minhanovacoleção.find( {likes:{$gt:50}} )	// likes greater than 50
	db.minhanovacoleção.find( {likes:{$gte:50}} )	// likes greater than equals 50
	db.minhanovacoleção.find( {likes:{$ne:50}} )	// likes not equals 50

// --------------------------------------------------

// Operadores OR e IN
	db.minhanovacoleção.find( {$or: [{"nome" : "Alvara"}, {"nome" : "Alvaro"}]} )
	db.minhanovacoleção.find( {nome: {$in:["Márcia", "Anísio"]}} )	// Para mim, esse é mais simples.

// --------------------------------------------------

/*
Para especificar quais campos serão retornados, usa-se o 1 ou o 0 (exemplos abaixo).
1 → Desejo que o campo seja retornado.
0 → Deseo que o campo NÃO seja retornado.
*/

	db.minhanovacoleção.find({
		nome: {$in: ["Anísio", "Márcia"]}}, {nome:1, idade:1}		// Desejo que retorne nome e idade.
	)

	db.minhanovacoleção.find({
		nome: {$in: ["Anísio", "Márcia"]}}, {nome:1, idade:1, _id:0}	// Desejo que retorne nome e idade, mas não o id.
	)

// --------------------------------------------------

// Comando find() para documentos embutidos ou incorporados
// Exemplos de um banco de dados meu:

// O campo "habilidades" é do tipo objeto. E eu quero acessar apenas a chave "armas" dele.
	db.personagensDeAção.find(
		{"habilidades.armas":"10"},
		{_id:0}
	)

// Ainda no campo "habilidades", eu quero os documentos cujas chaves "armas" e "luta" têm valores de 10.
	db.personagensDeAção.find(
		{"habilidades.armas":"10", "habilidades.luta":"10"},
		{_id:0}
	)
	
// --------------------------------------------------

// Acessando um elemento de um array, através do índice.
	db.minhanovacoleção.find(
		{"hobbies.0":"filmes"},
		{_id:0}
	)
	
// Considerando a ordem dos elementos
	db.minhanovacoleção.find(
		{"hobbies":["filmes","futebol"]},
		{_id:0}
	)

// Sem considerar a ordem dos elementos
	db.minhanovacoleção.find(
		{"hobbies": { $all:["futebol","filmes"] }},
		{_id:0}
	)

// --------------------------------------------------

// Update

// --------------------------------------------------

// Delete
	db.minhanovacoleção.deleteOne({nome:"João"})

// --------------------------------------------------

/* 
Comandos collection.update() e count() estão obsoletos.

Pelo visto não dá para mudar o tipo das chaves. Exemplo:
a idade estava em string e e queria mudar para inteiro
através de comandos no Mongosh, mas pelo visto isso não
é possível.

*/
