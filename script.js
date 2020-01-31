// Écrivez ici votre script
const btn = document.getElementById('button');
const divAge = document.getElementById('age');
const result = document.getElementById('result');
let radios = document.forms["formA"].elements["choix"];
let age = '';

for (radio in radios) {radios[radio].onclick = function () { theSwitch(this.value);}}

function theSwitch(option) {
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
function lisibilite_nombre(num) {
    let result = num.toLocaleString();
    return result;
}
function secondes(age) {
    result.innerHTML = lisibilite_nombre((age * 365) * 24 * 60 * 60);
};
function minutes(age) {
    result.innerHTML = lisibilite_nombre(((age * 365) * 24) * 60);
};
function heures(age) {
    result.innerHTML = lisibilite_nombre((age * 365) * 24);

};
function jours(age) {
    result.innerHTML = lisibilite_nombre(age * 365);
};
btn.addEventListener('click', function () {
    event.preventDefault();
    age = divAge.value;
    if (age === '') {
        result.setAttribute("style", "red");
        result.innerHTML = "Veuillez indiquer votre âge SVP";
    } else {
        theSwitch(radios.value);
    }
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



