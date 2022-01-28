const path = require('path')
const express = require('express')
const app = express()

const root = __dirname
const host = '127.0.0.1'
const port = 3000

const docs = [
	'en/astra',
	'en/book',
	'en/linux',
]

app.disable('x-powered-by')

app.use('/assets/', express.static(path.join(root, 'assets')))

for(const d of docs) {
	const index = path.join(root, d, 'index.html')
	const prefix = '/' + d + '/'
	app.use(prefix, express.static(path.join(root, d)))
	app.get(prefix + '*', function(req, res) {
		res.sendFile(index)
	})
}

app.listen(port, host, _ => {
	console.log(`listening on port http://${host}:${port}/`)
})
