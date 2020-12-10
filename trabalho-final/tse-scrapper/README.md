# TSE Scrapper 2020
Projeto para tornar abertos os dados referentes ao Resultado das Eleições Municipais Ordinárias de 2020 do Brasil.

## Contexto
Os resultados da eleição são atualmente publicados pelo Tribunal Superior Eleitoral (TSE) no portal de resultados (https://resultados.tse.jus.br/oficial), porém, não é possível baixá-los e utilizá-los em análises.

## Objetivo
O presente trabalho objetiva extrair e transformar os dados do portal de resultados do TSE para um formato aberto e disponibilizá-los numa plataforma para que cientistas de dados possam conduzir análises sobre os dados de resultado das eleições municipais ordinárias de 2020.

## Tecnologias
* O projeto foi desenvolvido com Node.js v14.15.1

## Como executar?
* Para baixar todos os boletins de urna do 1o e 2o turnos:
```
$ npm install
$ node .\scrapper.js
```
* Os arquivos serão gravados em formato JSON na seguinte estrutura:
```
+ data/
    + ${pleito}/
        - am-p000${pleito}-am-m${municipio}-z${zona}-s${secao}.json
```

## Baixando o Dataset
* Inicialmente, os dados foram compartilhados em formato JSON e podem ser baixados a partir do seguinte link: https://drive.google.com/uc?export=download&id=1cnYcMzRWRj1pFiRkZ7yFjpoiG_Kw54b4

## Conversão de JSON para CSV
* Falta documentar!


## Endereço das seções
* Extração feita de forma manual

1. Acessar a página https://www.tre-am.jus.br/eleicoes/eleicoes-2020/painel-de-secoes-eleicoes-2020
2. Escolher `Ver por Local de Votação`
3. Filtrar pelo município `MANAUS`
4. Aguardar o carregamento da página 
5. Extrair o conteúdo da tabela
```JavaScript
var selector = "#pvExplorationHost > div > div > exploration > div > explore-canvas-modern > div > div.canvasFlexBox > div > div.displayArea.disableAnimations.fitToPage > div.visualContainerHost > visual-container-repeat > visual-container-modern:nth-child(1) > transform > div > div:nth-child(3) > div > visual-modern > div > div > div.tableEx";
var data = $(selector).html()
// write data to html file
```

### Limpeza dos dados
* Excluir atributo de estilo e de classe
```RegEx
\ style="[^"]*"\
\ class="[^"]*"\
```