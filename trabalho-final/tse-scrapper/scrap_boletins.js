const request = require('request')
const fs = require('fs')
const sleep = require('system-sleep')

const options = { json: true }

exports.fetchBoletinsByPleitoMunicipioZonaSecao = (pleito, municipio, zona, secao) => {
    let filename = `p000${pleito}-am-m${municipio}-z${zona}-s${secao}.json`
    try { //verifica se o arquivo já existe e é válido
        require(`./data/${pleito}/${filename}`)
        console.log(`Ignoring... ${filename}`)
    } catch (e) { //caso contrário, faz o download do json
        console.log(`Fetching in ${Math.floor(timeToWait/1000)}s... ${filename}`)
        let url = `https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/boletim-urna/${pleito}/dados/am/${filename}`
        request(url, options).pipe(fs.createWriteStream(`./data/${pleito}/${filename}`))
        sleep(timeToWait)  //aguarda um tempo para evitar ser bloqueado
    }
}