$("#play").click(function() {
    let playerOneName = $("#p1").val().toUpperCase();
    let playerTwoName = $("#p2").val().toUpperCase();

    if ((playerOneName.length > 15 || playerTwoName.length > 15) || (playerOneName.length < 3 || playerTwoName.length < 3)) {
        alert("Le nom de chaque joueur doit être compris en 3 et 15 caractères.");
        throw new Error ("Le nom de chaque joueur doit être compris en 3 et 15 caractères.");
    }

    if (playerOneName === playerTwoName) {
        alert("Le nom des joueurs doivent être différents.");
        throw new Error ("Le nom des joueurs doivent être différents.");
    }

    tabPlayers[0].setName(playerOneName);
    tabPlayers[1].setName(playerTwoName);

    $("#p1-name").append(tabPlayers[0].getName());
    $("#p2-name").append(tabPlayers[1].getName());

    $("#hide").empty();

    $("#game").removeAttr("id");
});