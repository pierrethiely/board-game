function play(currentPlayer) {
    if (tabPlayers[currentPlayer - 1].checkPlayer() === false) {
        let fightAudio = new Audio ("fx/fight_fx.mp3");
        let fightImg = document.createElement("img");
        fightImg.src = "img/fight.png";
        $("#board").empty();
        $("#board").append(fightImg);
        fightAudio.play();
        $("#historic").empty();
        fight(currentPlayer);            
        return;
    }
    
    tabPlayers[currentPlayer - 1].checkCells();
    $(".access").click(function () {
        let position1 = $(".player" + currentPlayer).attr("id");
        
        let id = this.id;
        
        $("#hidden" + currentPlayer).removeAttr("id");
        
        exchangeWeapon(id, currentPlayer);
        
        $(".player" + currentPlayer).addClass("free");        
        $(".player" + currentPlayer).removeClass("player");
        $(".player" + currentPlayer).removeClass("player" + currentPlayer)
        
        let nextCell = document.getElementById(id);
        
        if (nextCell.firstChild) {
            nextCell.removeChild(nextCell.firstChild);
        }
        
        nextCell.classList.remove("free");
        nextCell.classList.add("player" + currentPlayer);
        nextCell.classList.add("player");
        nextCell.append(tabPlayers[currentPlayer - 1].img);

        let position2 = $(".player" + currentPlayer).attr("id");

        if (position1 !== position2) {
            $(".access").off("click").removeClass("access");
            currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
            play(currentPlayer);
            return true;
        }
    }); 
    
    return false;
}

play(currentPlayer);

let defenseP1 = false;
let defenseP2 = false;

function fight(currentPlayer) {
    if (playerOne.health > 0 && playerTwo.health > 0) {
        $("#actionP" + currentPlayer).slideDown(2000);
        $(".attackP" + currentPlayer + ", .defenseP" + currentPlayer).click(function () {
            if (this.classList.contains("attackP" + currentPlayer)) {
                if (defenseP1 || defenseP2) {
                    tabPlayers[currentPlayer - 1].attackWithDefense();
                }

                else {
                    tabPlayers[currentPlayer - 1].attackWithoutDefense();
                }
            }

            else {
                tabPlayers[currentPlayer - 1].onDefense();
            }
        })
    }

    else {
        endGame(currentPlayer);
    }
}

function endGame(currentPlayer) {
    if (tabPlayers[currentPlayer - 1].health <= 0 ) {
        $("body").fadeOut(1000);
        setTimeout(displayWinner, 1000);        
    }
    setTimeout(playSoundWinner, 1700);
}

function playSoundWinner() {
    let tada = new Audio ("fx/winner_fx.mp3");
    tada.play();
}

function displayWinner() {
    $("body").delay(500).fadeIn(500);
    if (currentPlayer === 1) {            
        $(".playerNo1, .playerNo2").empty();
        $("#historic").empty();
        $("#board").empty();
        $(".game").html(playerTwo.getName() + "</br>" + "REMPORTE LA PARTIE !" + "</br>");
        let imgWinner = document.createElement("img");
        imgWinner.classList.add("medal");
        imgWinner.src = "img/winner2.png";
        $(".game").append(imgWinner);
        $("#replay").css("display", "inline").click(function () {
            location.reload(true);
        });
    }

    else {
        $(".playerNo1, .playerNo2").empty();
        $("#historic").empty();
        $("#board").empty();
        $(".game").html(playerOne.getName() + "</br>" + "REMPORTE LA PARTIE !" + "</br>");
        let imgWinner = document.createElement("img");
        imgWinner.classList.add("medal");
        imgWinner.src = "img/winner1.png";
        $(".game").append(imgWinner);
        $("#replay").css("display", "inline").click(function () {
            location.reload(true);
        });
    }
}