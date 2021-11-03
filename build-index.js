const lunr = require('./static/assets/js/lunr.min.js')
const fs = require('fs')

require('./static/assets/js/lunr.stemmer.support.js')(lunr)
require('./static/assets/js/lunr.ru.js')(lunr)

function buildIndex(lang) {
    const file = './public/' + lang + '/index.json'
    const data = JSON.parse(fs.readFileSync(file))
    const idx = lunr(function () {
        if(lang == 'ru') {
            this.use(lunr.ru)
        }

        this.ref('link')
        this.field('title')
        this.field('content')

        data.forEach((doc) => {
            this.add(doc)
        })
    })
    fs.writeFileSync(file, JSON.stringify(idx))
}

buildIndex('en')
buildIndex('ru')
