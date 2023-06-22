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
