const images = document.querySelectorAll('img');

function reveal(){
    const trigger = window.innerHeight * 0.85;

    images.forEach(img => {
        const top = img.getBoundingClientRect().top;

        if(top < trigger && top > 0){
            img.classList.add('show');
        }
        else{
            img.classList.remove('show');
        }
    }); 
}

window.addEventListener('scroll', reveal);

setInterval(() => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {x: Math.random(), y: 0 }
    });
}, 800);

const image = document.querySelectorAll('img, video');


function firework(){
    const count = 200;

    confetti({
        particleCount: count,
        spread: 160,
        origin: {x: 0.5, y: 0.5 }
    });
}

setInterval(() => {
    
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

seltTimeout(firework, 300);
}, 1500);