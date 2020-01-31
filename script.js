// Écrivez ici votre script
const btn = document.getElementById('button');
const divAge = document.getElementById('age');

const result = document.getElementById('result');
let radios = document.forms["formA"].elements["choix"];


const jrs = 365;
const hrs = 24;
const min = 1140;
const sec = 144000;


let age = '';

for (radio in radios) {
    radios[radio].onclick = function () {
        theSwitch(this.value);   
    }
}
function theSwitch(option){
    switch (option) {
        case 'option1':
            secondes(age);
            break;
        case 'option2':
            minutes(age);
            break;
        case 'option3':
            heures(age);
            break;
        case 'option4':
            jours(age);
            break;
    }
}
function secondes(age) {
    age = (age * jrs) * min;
    age = age * sec;
    result.innerHTML = age;

};

function minutes(age) {
    age = (age * jrs ) * min;
    result.innerHTML = age;

};

function heures(age) {
    age = (age * jrs) * hrs;
    result.innerHTML = age;

};

function jours(age) {
    age = age * jrs;
    result.innerHTML = age;
};

btn.addEventListener('click', function () {
    event.preventDefault();
    age = divAge.value;
    let option = radios.value;
    theSwitch(option);
});





















/*
btn.addEventListener('click', function () {
    event.preventDefault();
    age = divAge.value;
});
divJours.addEventListener('click', function (age) {

    console.log(age);

});

btn.addEventListener('click', e => {
});
btn.addEventListener('click', e => {
});
btn.addEventListener('click', e => {
});
*/



