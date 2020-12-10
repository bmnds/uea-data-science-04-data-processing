
const SecoesScrapper = require('./scrap_secoes')
const SecoesReader = require('./reader_secoes')

const BoletimScrapper = require('./scrap_boletins')

let pleitos = ['304', '305']
pleitos.forEach(pleito => {
    SecoesScrapper.fetchSecoesByPleito(pleito)
    
    let secoes = SecoesReader.readSecoesByPleito(pleito)
    secoes.filter(s => s.nomeMunicipio=='MANAUS').forEach(s => {
	    BoletimScrapper.fetchBoletinsByPleitoMunicipioZonaSecao(s.pleito, s.municipio, s.zona, s.secao)
	})
})