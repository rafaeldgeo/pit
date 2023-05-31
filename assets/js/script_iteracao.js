"use strict";

const BD_LINHAS = [
    {
        cod_1val:"015",
        desc_1val: "ILHA DE SANTA MARIA / ROMÃO", 
        segundavalidacao: [
            { 
              cod_2val: "500", 
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

const SELECT_1VAL = document.getElementById("primeiravalidacao");
const SELECT_2VAL = document.getElementById("segundavalidacao");
const BTN_BUSCAR = document.querySelector(".section-busca__btn-buscar");

// cria options com as linhas no PRIMEIRO SELECT
for (let i = 0; i < BD_LINHAS.length; i++) {
    const OPTION = document.createElement("option");
    OPTION.setAttribute("value", i);
    OPTION.innerHTML = `${BD_LINHAS[i].cod_1val} - ${BD_LINHAS[i].desc_1val}`;
    SELECT_1VAL.appendChild(OPTION);
}

// cria options com as linhas no SEGUNDO SELECT
SELECT_1VAL.addEventListener("change", (evento) => {
    const LINHA_SELECIONADA = SELECT_1VAL.value;
    const LISTA_LINHAS_2VAL = BD_LINHAS[LINHA_SELECIONADA].segundavalidacao;
    const OPTION_NOSELECT = document.getElementById("option_noselect");
    
    SELECT_2VAL.removeAttribute("disabled");

    while (SELECT_2VAL.hasChildNodes()) {
        SELECT_2VAL.removeChild(SELECT_2VAL.firstChild);
    }

    SELECT_2VAL.appendChild(OPTION_NOSELECT);
    
    for (let i = 0; i < LISTA_LINHAS_2VAL.length; i++) {
        const OPTION = document.createElement("option");
        OPTION.setAttribute("value", i);
        OPTION.innerHTML = `${LISTA_LINHAS_2VAL[i].cod_2val} - ${LISTA_LINHAS_2VAL[i].desc_2val}`;
        SELECT_2VAL.appendChild(OPTION);
    }

});


BTN_BUSCAR.addEventListener("click", (evento) => {
    
    const SECTION_RESULTADO = document.getElementById("resultado");
    const PRIMEIRA_VALIDACAO = SELECT_1VAL.value;
    const SEGUNDA_VALIDACAO = SELECT_2VAL.value;

    construirResultado(PRIMEIRA_VALIDACAO, SEGUNDA_VALIDACAO);
    
    if (SECTION_RESULTADO.classList !== "section-resultado--nohidden") {
        SECTION_RESULTADO.classList.add("section-resultado--nohidden");
    }
    SECTION_RESULTADO.scrollIntoView();
});

// constroi a section resultado 
function construirResultado(primeira_validacao, segunda_validacao) {

    const DADOS_1VAL = BD_LINHAS[primeira_validacao];
    const {cod_1val} = DADOS_1VAL;
    const DADOS_2VAL = BD_LINHAS[primeira_validacao].segundavalidacao[segunda_validacao];
    const {cod_2val, tempo, locais} = DADOS_2VAL;
    const UL_LOCAIS = document.querySelector(".section-resultado__lista");
    let class_item = ""
    
    document.querySelector(".section-resultado__cod-linha--1").innerText = cod_1val;;
    document.querySelector(".section-resultado__cod-linha--2").innerText = cod_2val;
    document.querySelector(".section-resultado__duracao").innerText = tempo;

    UL_LOCAIS.innerHTML = "";
   
    // constroi a barra com os locais
    for (let i = 0; i < locais.length; i++) {
        if (i === 0) {
            class_item = "section-resultado__lista-item--top";
        } else if (i === locais.length - 1) {
            class_item = "section-resultado__lista-item--end";
        } else {
            class_item = "section-resultado__lista-item--center";
        }
        UL_LOCAIS.innerHTML += `<li class="${class_item}">
    <div><img src="assets/img/circle-fill.svg" alt="" class="section-resultado__marcador"></div>
    <span>${locais[i]}</span></li>`
    }    
}
