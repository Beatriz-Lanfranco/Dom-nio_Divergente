// ==========================================
// SISTEMA ESPECIALISTA - DIVERGENTE
// ==========================================


// ------------------------------------------
// PERGUNTAS
// ------------------------------------------

const perguntas = [

    {
        pergunta: "Você encontra uma situação inesperada e complicada. O que faz primeiro?",
        alternativas: [
            {
                texto: "Tento entender todos os detalhes antes de decidir.",
                facao: "Erudição"
            },
            {
                texto: "Procuro alguém que possa estar precisando de ajuda.",
                facao: "Abnegação"
            },
            {
                texto: "Enfrento a situação e vejo o que acontece.",
                facao: "Audácia"
            },
            {
                texto: "Converso com as pessoas envolvidas para evitar conflitos.",
                facao: "Amizade"
            },
            {
                texto: "Procuro descobrir exatamente o que aconteceu.",
                facao: "Franqueza"
            }
        ]
    },

    {
        pergunta: "Qual característica você mais valoriza em uma pessoa?",
        alternativas: [
            {
                texto: "Coragem",
                facao: "Audácia"
            },
            {
                texto: "Honestidade",
                facao: "Franqueza"
            },
            {
                texto: "Inteligência",
                facao: "Erudição"
            },
            {
                texto: "Generosidade",
                facao: "Abnegação"
            },
            {
                texto: "Empatia",
                facao: "Amizade"
            }
        ]
    },

    {
        pergunta: "Você precisa tomar uma decisão importante. O que pesa mais?",
        alternativas: [
            {
                texto: "O que será melhor para as pessoas envolvidas.",
                facao: "Abnegação"
            },
            {
                texto: "As informações e evidências disponíveis.",
                facao: "Erudição"
            },
            {
                texto: "O que considero verdadeiro, mesmo que seja difícil dizer.",
                facao: "Franqueza"
            },
            {
                texto: "O quanto estou disposto(a) a enfrentar as consequências.",
                facao: "Audácia"
            },
            {
                texto: "O impacto que a decisão terá sobre a harmonia do grupo.",
                facao: "Amizade"
            }
        ]
    },

    {
        pergunta: "Em um trabalho em grupo, qual papel você tende a assumir?",
        alternativas: [
            {
                texto: "A pessoa que pesquisa e organiza as informações.",
                facao: "Erudição"
            },
            {
                texto: "A pessoa que ajuda quem está com dificuldades.",
                facao: "Abnegação"
            },
            {
                texto: "A pessoa que enfrenta os problemas mais difíceis.",
                facao: "Audácia"
            },
            {
                texto: "A pessoa que mantém todos unidos.",
                facao: "Amizade"
            },
            {
                texto: "A pessoa que fala quando percebe algo errado.",
                facao: "Franqueza"
            }
        ]
    },

    {
        pergunta: "Qual situação seria mais desconfortável para você?",
        alternativas: [
            {
                texto: "Ter que agir sem saber o que pode acontecer.",
                facao: "Audácia"
            },
            {
                texto: "Ver alguém sendo prejudicado e não poder ajudar.",
                facao: "Abnegação"
            },
            {
                texto: "Não poder expressar sua verdadeira opinião.",
                facao: "Franqueza"
            },
            {
                texto: "Ter que trabalhar sem entender o motivo das decisões.",
                facao: "Erudição"
            },
            {
                texto: "Estar em um ambiente cheio de conflitos.",
                facao: "Amizade"
            }
        ]
    },

    {
        pergunta: "Quando alguém pede sua opinião sobre um problema, você:",
        alternativas: [
            {
                texto: "Falo exatamente o que penso.",
                facao: "Franqueza"
            },
            {
                texto: "Tento encontrar uma solução que deixe todos bem.",
                facao: "Amizade"
            },
            {
                texto: "Analiso o problema antes de responder.",
                facao: "Erudição"
            },
            {
                texto: "Incentivo a pessoa a enfrentar a situação.",
                facao: "Audácia"
            },
            {
                texto: "Procuro entender como posso ajudá-la.",
                facao: "Abnegação"
            }
        ]
    },

    {
        pergunta: "Qual dessas situações mais combina com você?",
        alternativas: [
            {
                texto: "Resolver um problema usando lógica.",
                facao: "Erudição"
            },
            {
                texto: "Defender alguém que está sendo injustiçado.",
                facao: "Abnegação"
            },
            {
                texto: "Fazer algo que outras pessoas teriam medo de fazer.",
                facao: "Audácia"
            },
            {
                texto: "Reunir pessoas diferentes para trabalharem juntas.",
                facao: "Amizade"
            },
            {
                texto: "Dizer uma verdade que ninguém quer ouvir.",
                facao: "Franqueza"
            }
        ]
    },

    {
        pergunta: "Se você pudesse desenvolver uma habilidade, escolheria:",
        alternativas: [
            {
                texto: "Ter mais coragem diante de situações difíceis.",
                facao: "Audácia"
            },
            {
                texto: "Aprender rapidamente qualquer assunto.",
                facao: "Erudição"
            },
            {
                texto: "Conseguir compreender melhor as pessoas.",
                facao: "Abnegação"
            },
            {
                texto: "Resolver conflitos com facilidade.",
                facao: "Amizade"
            },
            {
                texto: "Nunca ter medo de falar a verdade.",
                facao: "Franqueza"
            }
        ]
    },

    {
        pergunta: "Você está em uma situação de conflito. Qual seria sua primeira atitude?",
        alternativas: [
            {
                texto: "Procurar uma solução que satisfaça os envolvidos.",
                facao: "Amizade"
            },
            {
                texto: "Descobrir os fatos antes de tomar partido.",
                facao: "Erudição"
            },
            {
                texto: "Defender aquilo que considero correto.",
                facao: "Franqueza"
            },
            {
                texto: "Tentar proteger quem está sendo prejudicado.",
                facao: "Abnegação"
            },
            {
                texto: "Não recuar diante da situação.",
                facao: "Audácia"
            }
        ]
    },

    {
        pergunta: "O que mais desperta sua curiosidade?",
        alternativas: [
            {
                texto: "Descobrir como as coisas funcionam.",
                facao: "Erudição"
            },
            {
                texto: "Conhecer histórias e experiências de outras pessoas.",
                facao: "Abnegação"
            },
            {
                texto: "Descobrir coisas que ainda não tenho coragem de experimentar.",
                facao: "Audácia"
            },
            {
                texto: "Entender diferentes pontos de vista.",
                facao: "Amizade"
            },
            {
                texto: "Descobrir a verdade por trás de uma situação.",
                facao: "Franqueza"
            }
        ]
    },

    {
        pergunta: "Quando você comete um erro, normalmente:",
        alternativas: [
            {
                texto: "Admito o erro e falo sobre ele.",
                facao: "Franqueza"
            },
            {
                texto: "Tento entender por que errei para não repetir.",
                facao: "Erudição"
            },
            {
                texto: "Penso em como meu erro afetou outras pessoas.",
                facao: "Abnegação"
            },
            {
                texto: "Enfrento as consequências e sigo em frente.",
                facao: "Audácia"
            },
            {
                texto: "Tento resolver a situação sem criar mais conflitos.",
                facao: "Amizade"
            }
        ]
    },

    {
        pergunta: "Qual ambiente você escolheria para passar seu tempo livre?",
        alternativas: [
            {
                texto: "Um lugar tranquilo com pessoas próximas.",
                facao: "Amizade"
            },
            {
                texto: "Um local onde pudesse aprender ou pesquisar.",
                facao: "Erudição"
            },
            {
                texto: "Um lugar cheio de atividades e desafios.",
                facao: "Audácia"
            },
            {
                texto: "Um ambiente onde todos pudessem se divertir juntos.",
                facao: "Abnegação"
            },
            {
                texto: "Um lugar onde pudesse conversar sobre assuntos importantes.",
                facao: "Franqueza"
            }
        ]
    },

    {
        pergunta: "Imagine que você precisa escolher entre duas opções. Você prefere:",
        alternativas: [
            {
                texto: "A opção que beneficia mais pessoas.",
                facao: "Abnegação"
            },
            {
                texto: "A opção baseada em dados e fatos.",
                facao: "Erudição"
            },
            {
                texto: "A opção que representa aquilo em que realmente acredita.",
                facao: "Franqueza"
            },
            {
                texto: "A opção que apresenta o maior desafio.",
                facao: "Audácia"
            },
            {
                texto: "A opção que evita maiores conflitos.",
                facao: "Amizade"
            }
        ]
    },

    {
        pergunta: "Qual frase mais representa sua maneira de pensar?",
        alternativas: [
            {
                texto: "Preciso entender antes de agir.",
                facao: "Erudição"
            },
            {
                texto: "Ninguém deve ser deixado para trás.",
                facao: "Abnegação"
            },
            {
                texto: "Prefiro enfrentar o medo do que fugir dele.",
                facao: "Audácia"
            },
            {
                texto: "As pessoas podem encontrar uma solução juntas.",
                facao: "Amizade"
            },
            {
                texto: "A verdade deve ser dita.",
                facao: "Franqueza"
            }
        ]
    },

    {
        pergunta: "Se você estivesse diante do teste de escolha das facções, o que mais gostaria de descobrir?",
        alternativas: [
            {
                texto: "Até onde consigo chegar quando sou colocado(a) à prova.",
                facao: "Audácia"
            },
            {
                texto: "Quais são minhas maiores capacidades intelectuais.",
                facao: "Erudição"
            },
            {
                texto: "Como minhas escolhas podem ajudar outras pessoas.",
                facao: "Abnegação"
            },
            {
                texto: "Como me relaciono com diferentes pessoas e situações.",
                facao: "Amizade"
            },
            {
                texto: "O quanto minhas respostas realmente revelam quem sou.",
                facao: "Franqueza"
            }
        ]
    }

];


// ------------------------------------------
// INFORMAÇÕES DAS FACÇÕES
// ------------------------------------------

const faccoes = {

    "Audácia": {
        simbolo: "▲",
        descricao:
            "A Audácia valoriza coragem, determinação e disposição para enfrentar desafios. Pessoas associadas a essa facção tendem a agir diante das dificuldades e encarar seus medos."
    },

    "Erudição": {
        simbolo: "◆",
        descricao:
            "A Erudição valoriza conhecimento, inteligência, lógica e busca por informações. Pessoas associadas a essa facção tendem a analisar situações e procurar compreender como as coisas funcionam."
    },

    "Abnegação": {
        simbolo: "✦",
        descricao:
            "A Abnegação valoriza altruísmo, generosidade e preocupação com os outros. Pessoas associadas a essa facção tendem a colocar as necessidades coletivas acima dos interesses individuais."
    },

    "Amizade": {
        simbolo: "●",
        descricao:
            "A Amizade valoriza paz, harmonia, cooperação e relações positivas. Pessoas associadas a essa facção tendem a buscar soluções que promovam união e reduzam conflitos."
    },

    "Franqueza": {
        simbolo: "◇",
        descricao:
            "A Franqueza valoriza honestidade, sinceridade e transparência. Pessoas associadas a essa facção tendem a valorizar a verdade e a comunicação direta."
    }

};


// ------------------------------------------
// VARIÁVEIS DO SISTEMA
// ------------------------------------------

let perguntaAtual = 0;

let respostas = [];

let pontuacoes = {
    "Audácia": 0,
    "Erudição": 0,
    "Abnegação": 0,
    "Amizade": 0,
    "Franqueza": 0
};


// ------------------------------------------
// INICIAR
// ------------------------------------------

function iniciarQuiz() {

    perguntaAtual = 0;

    respostas = [];

    pontuacoes = {
        "Audácia": 0,
        "Erudição": 0,
        "Abnegação": 0,
        "Amizade": 0,
        "Franqueza": 0
    };

    mostrarTela("quiz");

    mostrarPergunta();
}


// ------------------------------------------
// MOSTRAR PERGUNTA
// ------------------------------------------

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("numeroPergunta").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    const porcentagem =
        Math.round(((perguntaAtual + 1) / perguntas.length) * 100);

    document.getElementById("porcentagem").textContent =
        `${porcentagem}%`;

    document.getElementById("barraProgresso").style.width =
        `${porcentagem}%`;

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const container =
        document.getElementById("alternativas");

    container.innerHTML = "";

    document.getElementById("botaoProxima").disabled = true;

    pergunta.alternativas.forEach((alternativa, index) => {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        botao.textContent = alternativa.texto;

        botao.onclick = function () {

            selecionarResposta(index);

        };

        container.appendChild(botao);

    });

}


// ------------------------------------------
// SELECIONAR RESPOSTA
// ------------------------------------------

function selecionarResposta(index) {

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(botao => {

        botao.classList.remove("selecionada");

    });

    botoes[index].classList.add("selecionada");

    respostas[perguntaAtual] = index;

    document.getElementById("botaoProxima").disabled = false;

}


// ------------------------------------------
// PRÓXIMA PERGUNTA
// ------------------------------------------

function proximaPergunta() {

    if (respostas[perguntaAtual] === undefined) {
        return;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        calcularResultado();

    }

}


// ------------------------------------------
// MOTOR DE INFERÊNCIA
// ------------------------------------------

function calcularResultado() {

    // Percorre todas as respostas dadas pelo usuário
    // e adiciona pontos à facção correspondente.

    respostas.forEach((resposta, indicePergunta) => {

        const alternativa =
            perguntas[indicePergunta].alternativas[resposta];

        const facao =
            alternativa.facao;

        pontuacoes[facao]++;

    });


    // Descobre a maior pontuação

    let maiorPontuacao = 0;

    let facaoResultado = "";

    for (const facao in pontuacoes) {

        if (pontuacoes[facao] > maiorPontuacao) {

            maiorPontuacao = pontuacoes[facao];

            facaoResultado = facao;

        }

    }


    mostrarResultado(facaoResultado);

}


// ------------------------------------------
// MOSTRAR RESULTADO
// ------------------------------------------

function mostrarResultado(facao) {

    const dados = faccoes[facao];

    document.getElementById("simboloResultado").textContent =
        dados.simbolo;

    document.getElementById("nomeFacao").textContent =
        facao.toUpperCase();

    document.getElementById("descricaoFacao").textContent =
        dados.descricao;


    const container =
        document.getElementById("pontuacoes");

    container.innerHTML = "";


    for (const nome in pontuacoes) {

        const linha =
            document.createElement("div");

        linha.classList.add("linha-pontuacao");

        linha.innerHTML = `
            <span>${nome}</span>
            <strong>${pontuacoes[nome]} ponto(s)</strong>
        `;

        container.appendChild(linha);

    }


    mostrarTela("resultado");

}


// ------------------------------------------
// TROCAR TELA
// ------------------------------------------

function mostrarTela(id) {

    document.querySelectorAll(".tela").forEach(tela => {

        tela.classList.remove("ativa");

    });

    document.getElementById(id).classList.add("ativa");

}


// ------------------------------------------
// REINICIAR
// ------------------------------------------

function reiniciarQuiz() {

    iniciarQuiz();

}
