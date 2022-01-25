const express = require('express')
const app = express()

const path = __dirname

const host = '127.0.0.1';
const port = 3000

const docs = ['/en/astra/', '/en/book/', '/en/linux/']

app.use(express.static(path))
app.get('*', function(req, res) {
	for(const d of docs) {
		if(req.url.startsWith(d)) {
			res.sendFile(path + d + 'index.html')
			return
		}
	}
	res.sendStatus(404)
})
app.listen(port, host, _ => {
	console.log(`listening on port http://${host}:${port}/`)
})
