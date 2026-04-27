// const keyElement = document.getElementById('DO');

// function playSound() {
    // const audioElement = new Audio(); Audio è un costrutto che permette di creare una variabile audio in maniera programmatica, cioè script sa gia che è un audio
    // audioElement.src = 'sounds/01-do.mp3';   risorsa audio
    // audioElement.play(); comando di r iproduzione
// }

// keyElement.addEventListener('touchend', function(){      touchend è il nome dell'evento che accade su keyElement, touch end perchè si riferisce al momento in cui stacco il dito dallo schermo
    // playSound();     richiamo la funzione appena dichiarata
// });

// logica applicata a un solo tasto

// const keyElements = document.querySelectorAll('.key');   seleziona più elementi html definiti da una query CSS

// function playSound() {
    // const audioElement = new Audio(); 
    // audioElement.src = 'sounds/01-do.mp3';
    // audioElement.play();
// }

// keyElements.forEach(function(keyElement) {               rende quello che viene dopo definito per ogni elemento della query
    // keyElement.addEventListener('touchend', function(){
    // playSound();
    // });
// });

// logica applicata a tutti i tasti ma riproduce sempre la stessa nota

const keyElements = document.querySelectorAll('.key');

const notes = {
    do: '01-do.mp3',
    dodiesis: '02-dodiesis.mp3',
    re: '03-re.mp3',
    rediesis: '04-rediesis.mp3',
    mi: '05-mi.mp3',
    fa: '06-fa.mp3',
    fadiesis: '07-fadiesis.mp3',
    sol: '08-sol.mp3',
    soldiesis: '09-soldiesis.mp3',
    la: '10-la.mp3',
    ladiesis: '11-ladiesis.mp3',
    si: '12-si.mp3'
}                                       // ho creato un oggetto a cui a ogni chiave (nota) associo un valore (in questo caso la stringa tra virgolette)

function playSound(key) {
    const audioElement = new Audio(); 
    const note = notes[key];              // dichiaro la variabile note e e richiamo il valore associato alla chiave do dell'oggetto tramite la dot notation, quando voglio accedere a un elemento su base della sua chiave usa la brakets notation
    audioElement.src = 'sounds/' + note;
    audioElement.play();
}

keyElements.forEach(function(keyElement) {       
    keyElement.addEventListener('click', function(){
    const key = keyElement.id;          // keyElement è definito  da addEventListener per cui è il tasto che viene premuto, definisco una costante a cui è associato l'id del keyElement
    playSound(key);
    });
});