let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let message = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let back_menu = document.querySelector("#back_menu");
let subtitle_2players = document.querySelector(".subtitle_2players");
let subtitle_iaplayer = document.querySelector(".subtitle_iaplayer");
let secondPlayer;

// APARECER E DESAPARECER SUBTÍTULO.
subtitle_2players.classList.add("hide");
subtitle_iaplayer.classList.add("hide");

// CONTADOR DE JOGADAS.
let player1 = 0;
let player2 = 0;

// ADICIONANDO O EVENTO DE CLICK AOS BOXES.
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2);

        // VERIFICA SE JÁ TEM X OU O.
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            // COMPUTAR JOGADA.
            if (player1 == player2) {
                player1++

                if (secondPlayer == "ai-player") {
                    // FUNÇÃO PARA EXECUTAR A JOGADA.
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }
            // CHECAR QUEM VENCEU.
            checkWinCondition();
        }
    });
}

// EVENTO PARA SABER SE É 2 PLAYERS OU IA.
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");

        if (secondPlayer == "2-players") {
            setTimeout(function () {
                subtitle_2players.classList.remove("hide");
                subtitle_iaplayer.classList.add("hide");
            }, 800);
        } else {
            setTimeout(function () {
                subtitle_iaplayer.classList.remove("hide");
                subtitle_2players.classList.add("hide");
            }, 800);
        }
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }
        setTimeout(() => {
            let container = document.querySelector("#container");

            container.classList.remove("hide");
            back_menu.classList.remove("hide");
        }, 500);
    })
}

// BOTÃO PARA VOLTAR AO MENU PRINCIPAL.
back_menu.addEventListener("click", function () {
    let container = document.querySelector("#container");
    container.classList.add("hide");
    back_menu.classList.add("hide");

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");

    scoreboardX.textContent = 0;
    scoreboardO.textContent = 0;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }

    subtitle_2players.classList.add("hide");
    subtitle_iaplayer.classList.add("hide");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "inline-block";
    }

});

// VÊ QUEM VAI JOGAR.
function checkEl(player1, player2) {
    if (player1 == player2) {  // X.
        el = x;
    } else {  // O.
        el = o;
    }
    return el;
}

// VÊ QUEM GANHOU.
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // PRIMEIRA LINHA - HORIZONTAL.
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
            // X
            declareWinner("x");
        } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
            // O
            declareWinner("o");
        }
    }

    // LINHA DO MEIO - HORIZONTAL.
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
            // X
            declareWinner("x");
        } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
            // O
            declareWinner("o");
        }
    }

    // ÚLTIMA LINHA - HORIZONTAL.
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
            // X
            declareWinner("x");
        } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
            // O
            declareWinner("o");
        }
    }

    // PRIMEIRA LINHA - VERTICAL.
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
            // X
            declareWinner("x");
        } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
            // O
            declareWinner("o");
        }
    }
    // LINHA DO MEIO - VERTICAL.
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
            // X
            declareWinner("x");
        } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
            // O
            declareWinner("o");
        }
    }
    // ÚLTIMA LINHA - VERTICAL.
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
            // X
            declareWinner("x");
        } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
            // O
            declareWinner("o");
        }
    }

    // 1° - DIAGONAL.
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
            // X
            declareWinner("x");
        } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
            // O
            declareWinner("o");
        }
    }

    // 2° - DIAGONAL.
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
            // X
            declareWinner("x");
        } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
            // O
            declareWinner("o");
        }
    }

    // DEU VELHA.
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }
    if (counter == 9) {
        declareWinner("Deu Velha!");
    }
}

// LIMPA O JOGO, DECLARA O VENCEDOR E ATUALIZA O PLACAR.
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = "";

    if (winner == "x") {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O Jogador 1 Venceu!"
    } else if (winner == "o") {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O Jogador 2 Venceu!"
    } else {
        msg = "Deu Velha!"
    }

    // EXIBIR MENSAGEM.
    messageText.innerHTML = msg;
    message.classList.remove("hide");

    // ESCONDER MENSAGEM.
    setTimeout(() => {
        message.classList.add("hide");
    }, 2500);

    // ZERAR AS JOGADAS.
    player1 = 0;
    player2 = 0;

    // REMOVER X E O.
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// EXECUTAR A LÓGICA DA JOGADA DA IA.
function computerPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 8);
        // PREENCHER SE ESTIVER VAZIO (FILHO).
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        // CHECAGEM DE PREENCHIMENTO (QUANTOS ESTÃO PREENCHIDOS).
        } else {
            filled++;
        }
    }

    if (counter == 0 && filled < 9) {
        computerPlay();
    }
}