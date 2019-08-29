const board = $("#board");
const tbl = $(document.createElement("table"));
const tblBody = $(document.createElement("tbody"));

function generateBoard() {
    for (let i = 0; i < 10; i++) {
        let row = $(document.createElement("tr"));

        for (let j = 0; j < 10; j++) {
            let cell = $(document.createElement("td"));
            cell.attr("id", i.toString() + j.toString());
            
            if (pair(i)) {
                if (!pair(j)) {
                    cell.attr("class", "gris free");
                }

                else {
                    cell.attr("class", "free");
                }
            }

            else {
                if (pair(j)) {
                    cell.attr("class", "gris free");
                } 
                
                else {
                    cell.attr("class", "free");
                }
            }
            row.append(cell);
        }
        tblBody.append(row);
    } 
    tbl.append(tblBody);
    board.append(tbl);
}

function pair(number) {
    return number/2 === Math.round(number/2) ? true : false;
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateWalls() {
    let numberWalls = randomNumber(17, 22);
    
    for (let i = 0; i < numberWalls; i++) {
        let cells = $("td");
        let index = randomNumber(0, 99);

        while (cells[index].classList.contains("wall")) {
            index = randomNumber(0, 99);
        }

        cells[index].className = "wall";
    }
}

function generateWeapons() {
    for (let i = 0; i < tabWeapons.length; i++) {
        let cells = $("td");
        let index = randomNumber(0, 99);
        
        while (!cells[index].classList.contains("free")) {
            index = randomNumber(0, 99);
        }

        let icon = tabWeapons[i].img;
        cells[index].append(icon);
        cells[index].classList.replace("free", "weapon" + (i + 1));
    }
}

function generatePlayers() {
    let cells = $("td");
    let index = randomNumber(0, 99);

    while (!cells[index].classList.contains("free")) {
        index = randomNumber(0, 99);
    }  

    let icon = tabPlayers[0].img;
    cells[index].append(icon);
    cells[index].classList.replace("free", "player1");
    cells[index].classList.add("player");
    
    let placement = $(".player1").attr("id");
    checkLeft(placement);
    checkRight(placement);
    checkUp(placement);
    checkDown(placement);

    let cellP2 = $("td");
    index = randomNumber(0, 99);

    while (!cellP2[index].classList.contains("free")) {
        index = randomNumber(0, 99);
    }  

    let iconP2 = tabPlayers[1].img;
    cellP2[index].append(iconP2);
    cellP2[index].classList.replace("free", "player2");
    cells[index].classList.add("player");

    $(".noplayer").addClass("free").removeClass("noplayer");
}

function checkLeft(placement) {
    let firstId = placement[0].toString();
    let secondId = (Number(placement[1]) - 1).toString();
    let nextCellLeft = firstId + secondId;
    if ($("#" + nextCellLeft) && !$("#" + nextCellLeft).hasClass("wall", "weapon")) {
        $("#" + nextCellLeft).removeClass(("free")).addClass("noplayer");
    }
}

function checkRight(placement) {
    let firstId = placement[0].toString();
    let secondId = (Number(placement[1]) + 1).toString();
    let nextCellRight = firstId + secondId;
    if ($("#" + nextCellRight) && !$("#" + nextCellRight).hasClass("wall", "weapon")) {
        $("#" + nextCellRight).removeClass(("free")).addClass("noplayer");
    }
}

function checkUp(placement) {
    let firstId = (Number(placement[0]) - 1).toString();
    let secondId = placement[1].toString();
    let nextCellUp = firstId + secondId;
    if ($("#" + nextCellUp) && !$("#" + nextCellUp).hasClass("wall", "weapon")) {
        $("#" + nextCellUp).removeClass(("free")).addClass("noplayer");
    }
}

function checkDown(placement) {
    let firstId = (Number(placement[0]) + 1).toString();
    let secondId = placement[1].toString();
    let nextCellDown = firstId + secondId;
    if ($("#" + nextCellDown) && !$("#" + nextCellDown).hasClass("wall", "weapon")) {
        $("#" + nextCellDown).removeClass(("free")).addClass("noplayer");
    }
}

generateBoard();
generateWalls();
generateWeapons();
generatePlayers();