const request = require('request')
const fs = require('fs')
const sleep = require('system-sleep')

const timeToWait = 1111
const options = { json: true }

exports.fetchSecoesByPleito = (pleito) => {
    let filename = `am-p000${pleito}-cs.json`
    try {
        require(`./data/${filename}`)
        console.log(`Ignoring... ${filename}`)
    } catch (e) {
        console.log(`Fetching in ${Math.floor(timeToWait/1000)}s... ${filename}`)
        let url = `https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/boletim-urna/${pleito}/config/am/${filename}`
        request(url, options).pipe(fs.createWriteStream(`./data/${filename}`))
        sleep(timeToWait)  //aguarda um tempo para evitar ser bloqueado
    }
}

// let pleitos = ['304', '305']
// pleitos.forEach(pleito => {
// 	fetchSecoesByPleito(pleito)
// })