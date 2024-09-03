
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
            texto:"Acho ruim, pelo fato de nõa ter profissionais especializados na área de atuação e as aulas serem esinteresantes.",
            afirmacao: "infelizmente as aulas ainda não estão 100%"
        },
        {
        texto:"Acho bom, as aulas prendem minha atenção e eu consigo aprender bem",
        afirmacao: "o governo já investiu muito na mudança nos estudos aqui no Brasil"
        }
    ]
},

{
    enunciado: "você já sofreu bulinngui?",
    alternativas: [
        {

        texto: "Com certeza, todo os dias e eu sofro muito com isso",
        afirmacao: "A proxima vez espanca quem te zoou"
        },
        {
        texto:"Nunca na minha vida e se eu sofrer eu espanco quem mezou",
        afirmacao: "se você sofre com iso tente manter a calma e chamar um responsavel para resolver"
        }
    ]
},

{
    enunciado: "Já se ferrou por causa de amor",
    alternativas: [
        {
        texto:"Já, sofri muito",
        afirmacao: "na proxima vai dar certo, eu confio em você
        },
        {
        texto:"Nunca, acho burrice",
        afirmacao: "continue assim, não se apixone"
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
