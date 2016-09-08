/**
 * Created by Nykolai on 05.09.2016.
 */
'use strict';

let elem = document.querySelector('.options');

let choises = document.getElementsByClassName('game_option');

elem.addEventListener('click', onClick);

var div = document.createElement("div");
var bingoImage = document.createElement('img');
bingoImage.src = "nichego.png";
div.id = 'nichego';
bingoImage.dataset.action = "bingo";
div.appendChild(bingoImage);

function onClick(event) {
    event.preventDefault();
    let item = event.target;

    switch (item.dataset.action) {
        case 'option':
            onOption(item);
            break;

        case 'bingo':
            elem.removeChild(div);
            break;
    }

}

function onOption(opt){
    opt.classList.toggle('chosen');
    if(bingoCheck(opt)){
        elem.insertBefore(div, choises[0]);
    }
}

function bingoCheck(target) {
    let x = target.dataset.x;
    let y = target.dataset.y;
    let arr = matrixGame();
    function checkX() {
        let num = 0;
        for(let i = 0; i < 5; i++){
            if(classCheck(arr[x][i].classList)){
                num++;
                }
            }
        if(num == 5){
            return true;
        }
    }
    function checkY(){
        let num = 0;
        for(let i = 0; i < 5; i++){
            if(classCheck(arr[i][y].classList)){
                num++;
                }
            }
        if(num == 5){
            return true;
        }

    }
    return (checkX() || checkY());

}

    function matrixGame(){
    var arr = [];
    var num = 0;
    for(var i=0; i<5; i++){
        arr[i] = [];
        for(var j=0; j<5; j++){
            arr[i][j] = choises[num];
            num++;
        }
    }
    return arr;
}

    function classCheck(arr){
    for(let i = 0; i < arr.length; i++){
       if(arr[i] == "chosen"){
           return true;
       }
    }
 }

    function bingo(){

    }