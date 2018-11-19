const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'xyzzyy',
	database: 'tech'
})

connection.connect()

const app = express()

app.get('/', function (request, response) {
	const age = parseInt(request.query.age) || 0

	connection.query('select a.name user_name, age, b.id order_id, amount, b.name order_name from users a, orders b where a.id=user_id and age > ?', [age], function (error, results) {
		if (error) {
			console.log(error)
			response.sendStatus(500)
			return
		}

		response.send(results)
	})
})

app.listen(8080, function () {
	console.log('Server listening on port 8080')
})
