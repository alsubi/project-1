const clickSound = new Audio("scripts/souc.mp3")
const winSound = new Audio("scripts/Fireworks.mp3")

let array = ['', '', '', '', '', '', '', '', ''];
let counter = 0;
$(".msg>.player,.winner").hide();

function reset() {
    array = ['', '', '', '', '', '', '', '', ''];
    $(".container div").text("");
    $(".container div").off();
    $(".container div").on("click", game)
    counter = 0;
    $(".msg>.player,.winner").hide();
    $(".playerTurn").text("");
    $(".container div").css("background", "rgb(0,0,0");
}

function playValue() {
    $(".playerTurn").text("")
    $(".container div").off();
    $(".msg>.player,.winner").show();
    winSound.play()
}


function win() {

    if (array[0] == array[1] && array[0] == array[2] && Boolean(array[0]) == true) {

        $(".player").text(array[0]);
        playValue()
        $(".container #0,#1,#2").css("background", "rgba(0,0,0,0.7");
    } else if (array[3] == array[4] && array[3] == array[5] && Boolean(array[3]) == true) {

        $(".player").text(array[3]);
        playValue()
        $(".container #3,#4,#5").css("background", "rgba(0,0,0,0.7")
    } else if (array[6] == array[7] && array[6] == array[8] && Boolean(array[6]) == true) {

        $(".player").text(array[6]);
        playValue()
        $(".container #6,#7,#8").css("background", "rgba(0,0,0,0.7")
    } else if (array[0] == array[3] && array[0] == array[6] && Boolean(array[0]) == true) {

        $(".player").text(array[0]);
        playValue()
        $(".container #0,#3,#6").css("background", "rgba(0,0,0,0.7")
    } else if (array[1] == array[4] && array[1] == array[7] && Boolean(array[1]) == true) {
        $(".player").text(array[1]);
        playValue()
        $(".container #1,#4,#7").css("background", "rgba(0,0,0,0.7")
    } else if (array[2] == array[5] && array[2] == array[8] && Boolean(array[2]) == true) {
        $(".player").text(array[2]);
        playValue()
        $(".container #2,#5,#8").css("background", "rgba(0,0,0,0.7")
    } else if (array[6] == array[4] && array[6] == array[2] && Boolean(array[6]) == true) {
        $(".player").text(array[6]);
        playValue()
        $(".container #6,#4,#2").css("background", "rgba(0,0,0,0.7")
    } else if (array[0] == array[4] && array[0] == array[8] && Boolean(array[0]) == true) {
        $(".player").text(array[0]);
        $(".container div").off()
        playValue()
        $(".container #0,#4,#8").css("background", "rgba(0,0,0,0.7")
    } else if (array[6] == array[4] && array[6] == array[2] && Boolean(array[6]) == true) {
        $(".player").text(array[6]);
        playValue()
        $(".container #6,#4,#2").css("background", "rgba(0,0,0,0.7")

    } else if (counter === 8) {
        $(".playerTurn").text("draw")
    }



}

function game(event) {
    clickSound.play()
    if (counter % 2 === 0) {
        $(event.target).text("x");
        $(event.target).off();
        $(".playerTurn").text("o")
        let value = event.target.id;

        array[value] = "x";
        win()
    } else if (counter % 2 !== 0) {
        $(event.target).text("o");
        $(event.target).off();
        $(".playerTurn").text("x")
        let value = event.target.id;
        array[value] = "o";
        win()
    }


    counter += 1;



}

$(".container div").click(game)
$(".reset").click(reset)