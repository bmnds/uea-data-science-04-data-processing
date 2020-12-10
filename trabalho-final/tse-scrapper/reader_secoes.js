const path = require('path')

exports.readSecoesByPleito = (pleito) => {
    let f = require(`./data/am-p000${pleito}-cs.json`)
    let a = []
    for (i in f.abr) {
        let e = f.abr[i]
        for (j in e.mu) {
            let m = e.mu[j]
            for (k in m.zon) {
                let z = m.zon[k]
                for (l in z.sec) {
                    let s = z.sec[l]
                    a.push({
                        secao: s.nsp,
                        zona: z.cd,
                        municipio: m.cd,
                        nomeMunicipio: m.nm,
                        uf: e.cd,
                        estado: e.ds,
                        pleito: pleito
                    })
                }
            }
        }
    }
    return a
}