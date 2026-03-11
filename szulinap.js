window.onload = function() {
    startParty();
}


const images = document.querySelectorAll('img');

function reveal(){
    const trigger = window.innerHeight * 0.85;

    images.forEach(img => {
        const top = img.getBoundingClientRect().top;

        if(top < trigger && top > 0){
            img.classList.add('show');
        } else {
            img.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', reveal);


let confettiInterval;
let fireworkInterval;


function startParty(){

    confettiInterval = setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {x: Math.random(), y: 0 }
        });
    }, 800);


    fireworkInterval = setInterval(() => {

        confetti({
            particleCount: 50,
            spread: 60,
            origin: {x: 0}
        });

        confetti({
            particleCount: 50,
            spread: 120,
            origin: {x: 1}
        });

        setTimeout(firework, 300);

    }, 1500);
}


function firework(){
    confetti({
        particleCount: 200,
        spread: 160,
        origin: {x: 0.5, y: 0.5 }
    });
}


function stopParty(){
    clearInterval(confettiInterval);
    clearInterval(fireworkInterval);
}


function showImages(){
    const div = document.getElementById('images');

    if(div.style.display === 'none' || div.style.display === ''){
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}