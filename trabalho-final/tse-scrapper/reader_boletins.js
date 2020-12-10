const path = require('path')

exports.readBoletinsByPleitoMunicipioZonaSecao = (pleito, municipio, zona, secao) => {
    return require(`./data/${pleito}/p000${pleito}-am-m${municipio}-z${zona}-s${secao}.json`)
}