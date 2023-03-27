"use strict";

const BD_LINHAS = [
    {
        cod_1val:"015",
        desc_1val: "ILHA DE SANTA MARIA / ROMÃO", 
        segundavalidacao: [
            { cod_2val: "500", 
              desc_2val: "T. VILA VELHA / T. ITACIBÁ VIA 3ª PONTE",
              tempo: "1 hora",
              locais: [ "AV. VITÓRIA" ]
            },
            {
                cod_2val: "573",
                desc_2val: "T. VILA VELHA / T. ITACIBÁ VIA 3ª PONTE",
                tempo: "45 minutos",
                locais: [ "AV. VITÓRIA", "RUA HENRIQUE NOVAES", "AV. JERÔNIMO MONTEIRO", "AV. CLETO NUNES", "AV. MARCOS DE AZEVEDO", "AV. DUARTE LEMOS" ]
            }
        ]     
    },
    { 
        cod_1val:"031A",
        desc_1val: "MORRO DO PINTO / SÃO BENEDITO VIA MARIO CYPRESTE",
        segundavalidacao: [
              {
                  cod_2val: "536",
                  desc_2val: "T. CAMPO GRANDE / T. VILA VELHA VIA MARUIPE - EXPRESSO",
                  tempo: "1 hora",
                  locais: [ "AV. ALEXANDRE BUAIZ", "AV. ELIAS MIGUEL", "AV. GETÚLIO VARGAS", "AV. MAL. MASCARENHAS DE MORAES" ]
              }
          ]     
      },
      { 
        cod_1val:"104",
        desc_1val: "SANTOS DUMONT / BELA VISTA",
        segundavalidacao: [
              {
                  cod_2val: "535",
                  desc_2val: "T. CARAPINA / T. CAMPO GRANDE VIA T. JARDIM AMÉRICA/SERAFIM DERENZI",
                  tempo: "1 hora e 30 minutos",
                  locais: [ "AV. SANTO ANTÔNIO", "RUA ENG. MANOEL PASSOS BARROS"]
              }
          ]     
      }
]

const SELECT1 = document.getElementById("primeiravalidacao");
for (let i = 0; i < BD_LINHAS.length; i++) {
    const OPTION = document.createElement("option");
    OPTION.setAttribute("value", i);
    OPTION.innerHTML = `${BD_LINHAS[i].cod_1val} - ${BD_LINHAS[i].desc_1val}`;
    SELECT1.appendChild(OPTION);
}

SELECT1.addEventListener("change", (event) => {
    console.log(SELECT1.value);
    
});









