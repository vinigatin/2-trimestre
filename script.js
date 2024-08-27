
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "O que você acha do novo encino médio?",
    alternativas: [
        {
            texto:"Acho ruim",
            afirmacao: "afirmação 1"
        },
        {
        texto:"Acho bom",
        afirmacao: "afirmação 2"
        }
    ]
},

{
    enunciado: "você já sofreu bulinngui?",
    alternativas: [
        {

        texto: "Com certeza, todo os dias",
        afirmacao: "afirmação 3"
        },
        {
        texto:"Nunca na minha vida",
        afirmacao: "afirmação 4"
        }
    ]
},

{
    enunciado: "Já se ferrou por causa de amor",
    alternativas: [
        {
        texto:"Já, sofri muito",
        afirmacao: "afirmação 5"
        },
        {
        texto:"Nunca, acho burrice",
        afirmacao: "afirmação 6"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
