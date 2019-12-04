# Project : Tic Tac Toe :

    A game of Tic Tac Toe with 2 players plays in the same device .

## My Project Deployment:
https://alsubi.github.io/project-1/

## I created Project by use :
* HTML
* CSS
    * responsive with mobile versions
* JS
* jQuery
* sounds affect


---

## lines in " js " :

* ### function reset()
To re-rounds the game .
 Reset game  .

```js
function reset(){
    array = ['', '', '', '', '', '','', '', ''];
    $(".container div").text("");
        $(".container div").off();
        $(".container div").on("click", game)
        counter = 0;
        $(".msg>.player,.winner").hide();
        $(".playerTurn").text("");
        $(".container div").css("background","rgb(0,0,0");
}
```

* ### function win()

compare between element in array to know who win in the game


```js
    if (array[0] == array[1] && array[0] == array[2] && Boolean(array[0])==true) {
         
         $(".player").text(array[0]);
         playValue()
         $(".container #0,#1,#2").css("background","rgba(0,0,0,0.7");
 
```

* ### function game() 
switch turns between X and O .
- by useing conditiono  (even and odd numbers) to switch in every event that occurs
```js  
function game(event) {
     
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
```
---

## Audio and image source :
* [button sound](http://soundbible.com/772-Button.html)
* [Fireworks sound](http://soundbible.com/712-Fireworks-And-Crowd.html)
* [tic tac toe image](https://www.seekclipart.com/clipng/big/128-1285954_tick-tack-toe-clipart-clipground-pot-of-gumbo.png)


## Challenges:
How to design and control the elements in CSS


## Unsolved problems which would be fixed in future iterations:
* play with pc 
* show win times for each player
* let player choose (O or X) to play 
 