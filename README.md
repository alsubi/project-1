# Project : Tic Tac Toe 

   The project is a game of Tic Tac Toe with 2 players and show the winner in game .

## My Project Deployment

## I created Project by use
* HTML
* CSS
    * responsive with mobile versions
* JS
* jQuery




### Describe lines in the code " js "
### array 
```js
```
#### function reset()
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
#### function win()

```js
    if (array[0] == array[1] && array[0] == array[2] && Boolean(array[0])==true) {
         
         $(".player").text(array[0]);
         playValue()
         $(".container #0,#1,#2").css("background","rgba(0,0,0,0.7");
 
```
#### function game() 

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