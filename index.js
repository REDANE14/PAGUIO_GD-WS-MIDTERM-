var play = document.querySelector('button');


play.addEventListener('click', function() {

    number1 = Math.floor(Math.random() * 3) + 1;
    number2 = Math.floor(Math.random() * 3) + 1;

    var title = document.querySelector("h1")
    var para = document.querySelectorAll("p")

    var toPlayer1 = document.querySelector('.img1');
    var toPlayer2 = document.querySelector('.img2');

    toPlayer1.setAttribute('src', `rsp${number1}.jpg`);
    toPlayer2.setAttribute('src', `rsp${number2}.jpg`);

    if (number1 == 1 && number2 == 2) {
        title.innerHTML = "ROCK WINS!"
        para[0].innerHTML = "<h2>&#11093</h2><strong>Player 1 Wins!</strong>"
        para[1].innerHTML = "<strike>Player 2 Lost!</strike>";
    } else if (number1 == 1 && number2 == 3) {
        title.innerHTML = "PAPER WINS!"
        para[0].innerHTML = "<strike>Player 1 Lost!<s/trike>";
        para[1].innerHTML = "<strong>Player 2 Wins!</strong>"
    }

    //
    else if (number1 == 2 && number2 == 1) {
        title.innerHTML = "ROCK WINS!"
        para[0].innerHTML = "<strike>Player 1 Lost!</strike>";
        para[1].innerHTML = "<h2>&#11093</h2><strong>Player 2 Wins!</strong>"
    } else if (number1 == 2 && number2 == 3) {
        title.innerHTML = "SCISSORS WINS!"
        para[0].innerHTML = "<h2>&#11093</h2><strong>Player 1 Wins!</strong>"
        para[1].innerHTML = "<strike>Player 2 Lost!</strike>";
    }

    //
    else if (number1 == 3 && number2 == 1) {
        title.innerHTML = "PAPER WINS!"
        para[0].innerHTML = "<h2>&#11093</h2><strong>Player 1 Wins!</strong>"
        para[1].innerHTML = "<strike>Player 2 Lost!</strike>";
    } else if (number1 == 3 && number2 == 2) {
        title.innerHTML = "SCISSORS WINS!"
        para[0].innerHTML = "<strike>Player 1 Lost!</strike>";
        para[1].innerHTML = "<h2>&#11093</h2><strong>Player 2 Wins!</strong>"
    }

    //
    else if (number1 === number2) {
        title.innerHTML = "TRY AGAIN!"
        para[0].innerHTML = "<h2>&#11093</h2><strong>Draw!</strong>"
        para[1].innerHTML = "<h2>&#11093</h2><strong>Draw!</strong>"
    }

    console.log(`${number1}-${number2}`)
})