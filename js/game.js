let currentPlayer = 1;

$(".damageP1").append(playerOne.getWeapon().getDamage());
$(".damageP2").append(playerTwo.getWeapon().getDamage());

$(".nameWeapon1").append(playerOne.getWeapon().getName2());
$(".nameWeapon2").append(playerTwo.getWeapon().getName2());

$(".healthOne").append(playerOne.getHealth());
$(".healthTwo").append(playerTwo.getHealth());

function exchangeWeapon(id, currentPlayer) {
    let w0 = $(".weapon0");
    let w1 = $(".weapon1").attr("id");
    let w2 = $(".weapon2").attr("id");
    let w3 = $(".weapon3").attr("id");
    let w4 = $(".weapon4").attr("id");

    if (w0.length > 0) {   
        for (let valeur of w0) {
            if (id === valeur.id) {
                weaponCell = $("#" + valeur.id);
                weaponCell.removeClass("weapon0").addClass("weapon" + tabPlayers[currentPlayer - 1].weapon.id);

                weaponCell.empty().append(tabPlayers[currentPlayer - 1].getWeapon().getImg());

                let img = document.createElement("img");
                img.src = "img/w" + tabPlayers[currentPlayer - 1].weapon.id + "small.png"
                img.setAttribute("id", "hidden" + currentPlayer);
                document.getElementById(id).append(img);

                let imgArme = document.createElement("img");
                imgArme.src = "img/w0.png";
                $("#imgWeaponP" + currentPlayer).empty().append(imgArme);

                tabPlayers[currentPlayer - 1].setWeapon(gun);

                $(".nameWeapon" + currentPlayer).empty();
                $(".nameWeapon" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getName2());

                $(".damageP" + currentPlayer).empty();
                $(".damageP" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getDamage());

                $("#historic").empty();
                let update = tabPlayers[currentPlayer - 1].getName() + " a ramassé " + tabPlayers[currentPlayer - 1].getWeapon().getName() + " qui inflige " + tabPlayers[currentPlayer - 1].getWeapon().getDamage() + " points de dégâts.";
                $("#historic").append(update);
            }
        }  
    }

    if (id === w1) {
        weaponCell = $("#" + w1);
        weaponCell.removeClass("weapon1").addClass("weapon" + tabPlayers[currentPlayer - 1].weapon.id);

        weaponCell.empty().append(tabPlayers[currentPlayer - 1].getWeapon().getImg());

        let img = document.createElement("img");
        img.src = "img/w" + tabPlayers[currentPlayer - 1].weapon.id + "small.png"
        img.setAttribute("id", "hidden" + currentPlayer);
        document.getElementById(id).append(img);

        $("#imgWeaponP" + currentPlayer).empty().append(pump.getBigImg());

        tabPlayers[currentPlayer - 1].setWeapon(pump);

        $(".nameWeapon" + currentPlayer).empty();
        $(".nameWeapon" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getName2());

        $(".damageP" + currentPlayer).empty();
        $(".damageP" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getDamage());

        $("#historic").empty();
        let update = tabPlayers[currentPlayer - 1].getName() + " a ramassé " + tabPlayers[currentPlayer - 1].getWeapon().getName() + " qui inflige " + tabPlayers[currentPlayer - 1].getWeapon().getDamage() + " points de dégâts.";
        $("#historic").append(update);
    }

    if (id === w2) {
        weaponCell = $("#" + w2);
        weaponCell.removeClass("weapon2").addClass("weapon" + tabPlayers[currentPlayer - 1].weapon.id);

        weaponCell.empty().append(tabPlayers[currentPlayer - 1].getWeapon().getImg());

        let img = document.createElement("img");
        img.src = "img/w" + tabPlayers[currentPlayer - 1].weapon.id + "small.png"
        img.setAttribute("id", "hidden" + currentPlayer);
        document.getElementById(id).append(img);

        $("#imgWeaponP" + currentPlayer).empty().append(smg.getBigImg());

        tabPlayers[currentPlayer - 1].setWeapon(smg);

        $(".nameWeapon" + currentPlayer).empty();
        $(".nameWeapon" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getName2());

        $(".damageP" + currentPlayer).empty();
        $(".damageP" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getDamage());

        $("#historic").empty();
        let update = tabPlayers[currentPlayer - 1].getName() + " a ramassé " + tabPlayers[currentPlayer - 1].getWeapon().getName() + " qui inflige " + tabPlayers[currentPlayer - 1].getWeapon().getDamage() + " points de dégâts.";
        $("#historic").append(update);
    }

    if (id === w3) {
        weaponCell = $("#" + w3);
        weaponCell.removeClass("weapon3").addClass("weapon" + tabPlayers[currentPlayer - 1].weapon.id);

        weaponCell.empty().append(tabPlayers[currentPlayer - 1].getWeapon().getImg());

        let img = document.createElement("img");
        img.src = "img/w" + tabPlayers[currentPlayer - 1].weapon.id + "small.png"
        img.setAttribute("id", "hidden" + currentPlayer);
        document.getElementById(id).append(img);

        $("#imgWeaponP" + currentPlayer).empty().append(scar.getBigImg());

        tabPlayers[currentPlayer - 1].setWeapon(scar);

        $(".nameWeapon" + currentPlayer).empty();
        $(".nameWeapon" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getName2());

        $(".damageP" + currentPlayer).empty();
        $(".damageP" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getDamage());

        $("#historic").empty();
        let update = tabPlayers[currentPlayer - 1].getName() + " a ramassé " + tabPlayers[currentPlayer - 1].getWeapon().getName() + " qui inflige " + tabPlayers[currentPlayer - 1].getWeapon().getDamage() + " points de dégâts.";
        $("#historic").append(update);
    }

    if (id === w4) {
        weaponCell = $("#" + w4);
        $(".weapon4").removeClass("weapon4").addClass("weapon" + tabPlayers[currentPlayer - 1].weapon.id);

        weaponCell.empty().append(tabPlayers[currentPlayer - 1].getWeapon().getImg());

        let img = document.createElement("img");
        img.src = "img/w" + tabPlayers[currentPlayer - 1].weapon.id + "small.png"
        img.setAttribute("id", "hidden" + currentPlayer);
        document.getElementById(id).append(img);

        $("#imgWeaponP" + currentPlayer).empty().append(minigun.getBigImg());

        tabPlayers[currentPlayer - 1].setWeapon(minigun);

        $(".nameWeapon" + currentPlayer).empty();
        $(".nameWeapon" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getName2());

        $(".damageP" + currentPlayer).empty();
        $(".damageP" + currentPlayer).append(tabPlayers[currentPlayer - 1].getWeapon().getDamage());

        $("#historic").empty();
        let update = tabPlayers[currentPlayer - 1].getName() + " a ramassé " + tabPlayers[currentPlayer - 1].getWeapon().getName() + " qui inflige " + tabPlayers[currentPlayer - 1].getWeapon().getDamage() + " points de dégâts.";
        $("#historic").append(update);
    }
};