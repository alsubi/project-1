let array = ['', '', '', '', '', '','', '', ''];  //مصفوفه تخزن قيمة ما تم تحديده في الحدث
function win() {  //checking winner   
    
    if (array[0] == array[1] && array[0] == array[2] && Boolean(array[0])==true) {
        alert("the winner is " + array[0]);
    }else if(array[3] == array[4] && array[3] == array[5] && Boolean(array[3])==true) {
        alert("the winner is " + array[3]);
    }else if(array[6] == array[7] && array[6] == array[8] && Boolean(array[6])==true) {
        alert("the winner is " + array[6]);
    }else if(array[0] == array[3] && array[0] == array[6] && Boolean(array[0])==true) {
        alert("the winner is " + array[0]);
    }else if(array[1] == array[4] && array[1] == array[7] && Boolean(array[1])==true) {
        alert("the winner is " + array[1]);
    }else if(array[2] == array[5] && array[2] == array[8] && Boolean(array[2])==true) {
        alert("the winner is " + array[2]);
    }else if(array[6] == array[4] && array[6] == array[2] && Boolean(array[6])==true) {
        alert("the winner is " + array[6]);
    }else if(array[0] == array[4] && array[0] == array[8] && Boolean(array[0])==true) {
        alert("the winner is " + array[0]);
    }else if(array[6] == array[4] && array[6] == array[2] && Boolean(array[6])==true) {
        alert("the winner is " + array[6]);
    }


}
$(function () {



    

    let counter = 0;
    $(".container div").click(function (event) {


        if (counter % 2 === 0) {
            $(event.target).text("x");
            $(event.target).off();
            let value = event.target.id; // value / الذي تم تحديده في الحدث / للمتغير /(id)/ اعطاء قيمة   
            //id is number in html child of ".container" from 0 to 8 as array index that will save text 
            array[value] = "x";// index / في المصفوفه بحسب   /"x"/ تخزين
            win()
        } else if (counter % 2 !== 0) {
            $(event.target).text("o");
            $(event.target).off();
            let value = event.target.id;
            array[value] = "o";
            win()
        }
        if(counter==8){ alert("draw")}// if game is draw 
        counter += 1; //click counter for if-condetion 
        console.log(array)

    })



})