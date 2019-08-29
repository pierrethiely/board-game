class Player {
    constructor (id, name, weapon, health, img) {
        this.id = id;
        this.name = name;
        this.weapon = weapon;
        this.health = health;
        this.img = img;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setWeapon(weapon) {
        this.weapon = weapon;
    }

    getWeapon() {
        return this.weapon;
    }

    setHealth(health) {
        this.health = health;
    }

    getHealth() {
        return this.health;
    }

    attackWithDefense() {
        if (currentPlayer === 1) {
            playerOne.weapon.sound.play();
            playerTwo.setHealth(playerTwo.getHealth() - Math.round(playerOne.getWeapon().getDamage() / 2));

            $("#historic").empty();
            $("#historic").html(playerOne.getName() + " inflige " + Math.round(playerOne.getWeapon().getDamage() / 2) + 
            " points de dégâts à " + playerTwo.getName() + ".");
            
            $(".healthTwo").empty();
            playerTwo.getHealth() < 0 ? playerTwo.setHealth(0): false;
            $(".healthTwo").append(playerTwo.getHealth());
            let value = $("#2").width();
            $("#2").width(value - 3*(Math.round(playerOne.getWeapon().getDamage() / 2)));
                
            if (playerTwo.getHealth() < 67) {
                $("#2").removeClass("bg-success").addClass("bg-warning");
            }

            if (playerTwo.getHealth() < 33) {
                $("#2").removeClass("bg-warning").addClass("bg-danger");
            }

            defenseP1 = false;
            defenseP2 = false; 
        }

        else {
            playerTwo.weapon.sound.play();
            playerOne.setHealth(playerOne.getHealth() - Math.round(playerTwo.getWeapon().getDamage() / 2));

            $("#historic").empty();
            $("#historic").html(playerTwo.getName() + " inflige " + Math.round(playerTwo.getWeapon().getDamage() / 2) + 
            " points de dégâts à " + playerOne.getName() + ".");

            $(".healthOne").empty();
            playerOne.getHealth() < 0 ? playerOne.setHealth(0) : false;
            $(".healthOne").append(playerOne.getHealth());
            let value = $("#1").width();
            $("#1").width(value - 3*(Math.round(playerTwo.getWeapon().getDamage() / 2)));

            if (playerOne.getHealth() < 67) {
                $("#1").removeClass("bg-success").addClass("bg-warning");
            }

            if (playerOne.getHealth() < 33) {
                $("#1").removeClass("bg-warning").addClass("bg-danger");
            }

            defenseP1 = false;
            defenseP2 = false;
        }

        $("button").off("click");
        $("#actionP" + currentPlayer).slideUp(2000);
        currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
        fight(currentPlayer);
    }

    attackWithoutDefense() {
        if (currentPlayer === 1) {
            playerOne.weapon.sound.play();
            playerTwo.setHealth(playerTwo.getHealth() - playerOne.getWeapon().getDamage());
            $(".healthTwo").empty();

            $("#historic").empty();
            $("#historic").html(playerOne.getName() + " inflige " + playerOne.getWeapon().getDamage() + 
            " points de dégâts à " + playerTwo.getName() + ".");

            playerTwo.getHealth() < 0 ? playerTwo.setHealth(0) : false;
            $(".healthTwo").append(playerTwo.getHealth());
            let value = $("#2").width();
            $("#2").width(value - 3*(playerOne.getWeapon().getDamage()));

            if (playerTwo.getHealth() < 67) {
                $("#2").removeClass("bg-success").addClass("bg-warning");
            }

            if (playerTwo.getHealth() < 33) {
                $("#2").removeClass("bg-warning").addClass("bg-danger");
            }

            defenseP1 = false;
            defenseP2 = false;
        }  
    
        else {
            playerTwo.weapon.sound.play();
            playerOne.setHealth(playerOne.getHealth() - playerTwo.getWeapon().getDamage());
            $(".healthOne").empty();

            $("#historic").empty();
            $("#historic").html(playerTwo.getName() + " inflige " + playerTwo.getWeapon().getDamage() + 
            " points de dégâts à " + playerOne.getName() + ".");

            playerOne.getHealth() < 0 ? playerOne.setHealth(0): false; 
            $(".healthOne").append(playerOne.getHealth());
            let value = $("#1").width();
            $("#1").width(value - 3*(playerTwo.getWeapon().getDamage()));

            if (playerOne.getHealth() < 67) {
                $("#1").removeClass("bg-success").addClass("bg-warning");
            }

            if (playerOne.getHealth() < 33) {
                $("#1").removeClass("bg-warning").addClass("bg-danger");
            }

            defenseP1 = false;
            defenseP2 = false;
        }

        $("button").off("click");
        $("#actionP" + currentPlayer).slideUp(2000);
        currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
        fight(currentPlayer);
    }

    onDefense() {
        if (currentPlayer === 1) {
            defenseP1 = true;
        }

        else {
            defenseP2 = true;
        }

        $("button").off("click");
        $("#actionP" + currentPlayer).slideUp(2000);
        currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
        fight(currentPlayer);
    }

    checkCells() {
        let i = 0;
        let position = $(".player" + currentPlayer).attr("id");

        while (i < 3) {            
            let firstId = position[0].toString();
            let secondId = (Number(position[1]) + (i + 1)).toString();
            let nextCases = firstId + secondId;

            if (!$("#" + nextCases)) {
                i = 3;
            }

            else {
                if (!nextCases.length > 2 || !$("#" + nextCases).hasClass("wall") && !$("#" + nextCases).hasClass("player")) {
                    $("#" + nextCases).addClass("access");
                    i++;
                }

                else {
                    i = 3;
                }
            }
        }

        let j = 0;

        while (j < 3) {
            let firstId = position[0].toString();
            let secondId = (Number(position[1]) - (j + 1)).toString();
            let nextCases = firstId + secondId;

            if (!$("#" + nextCases)) {
                j = 3;
            }

            else {
                if (!nextCases.length > 2 || !$("#" + nextCases).hasClass("wall") && !$("#" + nextCases).hasClass("player")) {
                    $("#" + nextCases).addClass("access");
                    j++;
                }

                else {
                    j = 3;
                }
            }
        }

        let k = 0;

        while (k < 3) {
            let firstId = (Number(position[0]) - (k + 1)).toString();
            let secondId = position[1].toString();
            let nextCases = firstId + secondId;

            if (!$("#" + nextCases)) {
                k = 3;
            }

            else {
                if (!nextCases.length > 2 || !$("#" + nextCases).hasClass("wall") && !$("#" + nextCases).hasClass("player")) {
                    $("#" + nextCases).addClass("access");
                    k++;
                }

               else {
                    k = 3;
                }
            }
        }

        let l = 0;

        while (l < 3) {
            let firstId = (Number(position[0]) + (l + 1)).toString();
            let secondId = position[1].toString();
            let nextCases = firstId + secondId;

            if (!$("#" + nextCases)) {
                l = 3;
            }

            else {
                if (!nextCases.length > 2 || !$("#" + nextCases).hasClass("wall") && !$("#" + nextCases).hasClass("player")) {
                    $("#" + nextCases).addClass("access");
                    l++;
                }

                else {
                    l = 3;
                }
            }
        }

        currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
    }

    checkPlayer() {
        let position = $(".player" + currentPlayer).attr("id");

        let firstIdLeft = position[0].toString();
        let firstIdRight = position[0].toString();
        let firstIdUp = (Number(position[0]) - 1).toString();
        let firstIdDown = (Number(position[0]) + 1).toString();

        let secondIdLeft = (Number(position[1]) - 1).toString();
        let secondIdRight = (Number(position[1]) + 1).toString();
        let secondIdUp = position[1].toString();
        let secondIdDown = position[1].toString();

        let nextCellLeft = firstIdLeft + secondIdLeft;
        let nextCellRight = firstIdRight + secondIdRight;
        let nextCellUp = firstIdUp + secondIdUp;
        let nextCellDown = firstIdDown + secondIdDown;

        if ($("#" + nextCellLeft) && $("#" + nextCellLeft).hasClass("player")) {
            return false;
        }

        if ($("#" + nextCellRight) && $("#" + nextCellRight).hasClass("player")) {
            return false;
        }

        if ($("#" + nextCellUp) && $("#" + nextCellUp).hasClass("player")) {
            return false;
        }

        if ($("#" + nextCellDown) && $("#" + nextCellDown).hasClass("player")) {
            return false;
        }

        return true;            
    };
}

const imgp1 = document.createElement("img");
imgp1.src = "img/p1small.png";
const imgp2 = document.createElement("img");
imgp2.src = "img/p2small.png";

const playerOne = new Player (0, null, gun, 100, imgp1); 
const playerTwo = new Player (1, null, gun, 100, imgp2);

const tabPlayers = [playerOne, playerTwo];
