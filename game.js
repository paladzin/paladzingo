/**
 * Created by Nykolai on 05.09.2016.
 */
'use strict';

let elem = document.querySelector('.options');

let choises = document.getElementsByClassName('game_option');

elem.addEventListener('click', onClick);

let div = document.createElement("div");
let bingoImage = document.createElement('img');

bingoImage.src = "nichego.png";
bingoImage.dataset.action = "bingo";

div.id = 'nichego';
div.appendChild(bingoImage);

let optLod = [];
for(let i = 0; i < 25; i++){optLod.push(i)};


function compareRandom(a, b) {
    return Math.random() - 0.5;
}

optLod.sort(compareRandom);

function optionLoader(){
        let image = 0;
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                let img = document.createElement("img");
                img.src = "images/" + optLod[image] + ".png";
                img.classList.add("game_option");
                img.dataset.x = i;
                img.dataset.y = j;
                img.dataset.action = "option";
                elem.appendChild(img);
                image++
            }
        }
}

optionLoader();

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

    function checkY() {
        let num = 0;
        for (let i = 0; i < 5; i++) {
            if (classCheck(arr[i][y].classList)) {
                num++;
            }
        }
        if (num == 5) {
            return true;
        }
    }

    function checkL() {
        let num = 0;
        for(let i = 0; i < 5; i++){
            if(classCheck(arr[i][i].classList)){
                num++;
            }
        }
        if (num == 5) {
            return true;
        }
    }

    function checkR() {
        let num = 0;
        let k = 4;
        for(let i = 0; i < 5; i++){
            if(classCheck(arr[i][k--].classList)){
                num++;
            }
        }
        if (num == 5) {
            return true;
        }
    }

    return (checkX() || checkY()/* || checkL() || checkR*/);
}

function matrixGame(){
    let arr = [];
    let num = 0;
    for(let i=0; i<5; i++){
        arr[i] = [];
        for(let j=0; j<5; j++){
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

