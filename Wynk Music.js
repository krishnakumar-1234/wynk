console.log("Hello world");


// This is  one song of js and ------------------
const player = document.getElementById('player');
const playcircle = document.getElementById('playcircle');
let audio1 = new Audio('Unstoppable Sia 128 Kbps.mp3')

player.addEventListener('click', () => {
    if (audio1.paused || audio1.currentTime <= 0) {
        audio1.play();
        player.classList.add('pauser');
        console.log("This is one audio");
        player.classList.remove('player');
        playcircle.style.display = 'block';
        playcirclePause.style.display = 'none'


    }
    else {
        audio1.pause();
        player.classList.add('player');
        player.classList.remove('pauser');
        console.log("This is one audio off");
        playcircle.style.display = 'none';
        playcirclePause.style.display = 'none'


    }
})
const playcirclePause = document.getElementById('playcirclePause');
playcircle.addEventListener('click', () => {
    audio1.pause();
    playcircle2.style.display = 'none'
    playcircle.style.display = 'none';
    playcirclePause2.style.display = 'none'
    document.getElementById('playcirclePause').style.display = 'block'


})
playcirclePause.addEventListener('click', () => {
    audio1.play();
    playcircle2.style.display = 'none'
    playcirclePause2.style.display = 'none'
    playcircle.style.display = 'block';
    document.getElementById('playcirclePause').style.display = 'none'
})
// This is  one song of js and ------------------ end;



// This is two songs of js and ----------------------;
const player2 = document.getElementById('player2');
const playcircle2 = document.getElementById('playcircle2');
const playcirclePause2 = document.getElementById('playcirclePause2');
let audio2 = new Audio('Shape-of-You-(Lofi)(PagalWorldl).mp3')
player2.addEventListener('click', () => {
    console.log("This is two song foe you")
    if (audio2.paused || audio2.currentTime <= 0) {
        audio2.play()
        player2.classList.remove('player2');
        player2.classList.add('pauser2');
        playcircle2.style.display = 'block';
        playcirclePause2.style.display = 'none';

    }
    else {
        audio2.pause()
        player2.classList.add('player2');
        player2.classList.remove('pauser2')
        playcircle2.style.display = 'none';
        playcirclePause2.style.display = 'none';

    }
})
playcircle2.addEventListener('click', () => {
    console.log("off")
    audio2.pause();
    playcircle.style.display = 'none';
    playcircle2.style.display = 'none';
    playcirclePause2.style.display = 'block'
})
playcirclePause2.addEventListener('click', () => {
    console.log("on")
    audio2.play();
    playcircle.style.display = 'none';
    playcircle2.style.display = 'block';
    playcirclePause2.style.display = 'none'
})
// The end two song o





const player3 = document.getElementById('player3');
const playcircle3 = document.getElementById('playcircle3');
const playcirclePause3 = document.getElementById('playcirclePause3');
let audio3 = new Audio('Let-Me-Down-Slowly(PagalWorldl).mp3');

player3.addEventListener('click', () => {
    console.log("This is three sonsg for you")
    if (audio3.paused || audio3.currentTime <= 0) {
        audio3.play()
        player3.classList.remove('player3');
        player3.classList.add('pauser3')
        playcircle3.style.display = 'flex'
        playcirclePause3.style.display = 'none';

    }
    else {
        audio3.pause()
        playcirclePause3.style.display = 'block'
        playcirclePause3.style.display = 'none';
        playcircle3.style.display = 'none'
        player3.classList.add('player3');
        player3.classList.remove('pauser3')
    }

})
playcircle3.addEventListener('click', () => {
    console.log("This is play right control");
    audio3.pause();
    playcircle3.style.display = 'none';
    playcirclePause3.style.display = 'block';



})
playcirclePause3.addEventListener('click', () => {
    console.log("This is play right control off");
    audio3.play();
    playcircle3.style.display = 'block';
    playcirclePause3.style.display = 'none';



})





const player4 = document.getElementById('player4');
const playcircle4 = document.getElementById('playcircle4');
const playcirclePause4 = document.getElementById('playcirclePause4');
let audio4 = new Audio('Unholy-(Slowed-and-Reverb)(PagalWorldl).mp3');

player4.addEventListener('click', () => {
    if (audio4.paused || audio4.currentTime <= 0) {
        console.log("This is four songs for you")
        playcircle4.style.display = 'block';
        playcirclePause4.style.display = 'none'
        player4.classList.remove('player4');
        player4.classList.add('pauser4');
        audio4.play();
    }
    else {
        playcircle4.style.display = 'none';
        playcirclePause4.style.display = 'none'
        player4.classList.add('player4');
        player4.classList.remove('pauser4');
        audio4.pause();
    }
})
playcircle4.addEventListener('click', () => {
    audio4.pause();
    playcircle4.style.display = 'none';
    playcirclePause4.style.display = 'block';
})
playcirclePause4.addEventListener('click', () => {
    audio4.play();
    playcircle4.style.display = 'block';
    playcirclePause4.style.display = 'none';
})






const player5 = document.getElementById('player5');
const playcircle5 = document.getElementById('playcircle5');
const playcirclePause5 = document.getElementById('playcirclePause5');
let audio5 = new Audio('Senorita---Camila-Cabello(PagalWorldl).mp3');

player5.addEventListener('click', () => {
    if (audio5.paused || audio5.currentTime <= 0) {
        console.log('This is five sonsg for you');
        player5.classList.remove('player5');
        player5.classList.add('pauser5');
        playcircle5.style.display = 'block';
        playcirclePause5.style.display = 'none';
        audio5.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player5.classList.add('player5');
        player5.classList.remove('pauser5');
        playcircle5.style.display = 'none';
        playcirclePause5.style.display = 'none';
        audio5.pause();
    }
})

playcircle5.addEventListener('click', () => {
    audio5.pause();
    playcircle5.style.display = 'none';
    playcirclePause5.style.display = 'block';
})
playcirclePause5.addEventListener('click', () => {
    audio5.play();
    playcircle5.style.display = 'block';
    playcirclePause5.style.display = 'none';
})


const player6 = document.getElementById('player6');
let audio6 = new Audio('baila conmingo.mp3')
const playcircle6 = document.getElementById('playcircle6');
const playcirclePause6 = document.getElementById('playcirclePause6');

player6.addEventListener('click', () => {
    if (audio6.paused || audio6.currentTime <= 0) {
        console.log('This is six sonsg for you');
        player6.classList.remove('player6');
        player6.classList.add('pauser6');
        playcircle6.style.display = 'block';
        playcirclePause6.style.display = 'none';
        audio6.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player6.classList.add('player6');
        player6.classList.remove('pauser6');
        playcircle6.style.display = 'none';
        playcirclePause6.style.display = 'none';
        audio6.pause();
    }
})
playcircle6.addEventListener('click', () => {
    audio6.pause();
    playcircle6.style.display = 'none';
    playcirclePause6.style.display = 'block';
})
playcirclePause6.addEventListener('click', () => {
    audio6.play();
    playcircle6.style.display = 'block';
    playcirclePause6.style.display = 'none';
})


const player7 = document.getElementById('player7');
let audio7 = new Audio('electric.mp3');
const playcircle7 = document.getElementById('playcircle7');
const playcirclePause7 = document.getElementById('playcirclePause7');

player7.addEventListener('click', () => {
    if (audio7.paused || audio7.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player7.classList.remove('player7');
        player7.classList.add('pauser7');
        playcircle7.style.display = 'block';
        playcirclePause7.style.display = 'none';
        audio7.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player7.classList.add('player7');
        player7.classList.remove('pauser7');
        playcircle7.style.display = 'none';
        playcirclePause7.style.display = 'none';
        audio7.pause();
    }
})
playcircle7.addEventListener('click', () => {
    audio7.pause();
    playcircle7.style.display = 'none';
    playcirclePause7.style.display = 'block';
})
playcirclePause7.addEventListener('click', () => {
    audio7.play();
    playcircle7.style.display = 'block';
    playcirclePause7.style.display = 'none';
})


const player8 = document.getElementById('player8');
let audio8 = new Audio('lil mama see.mp3')
const playcircle8 = document.getElementById('playcircle8');
const playcirclePause8 = document.getElementById('playcirclePause8');

player8.addEventListener('click', () => {
    if (audio8.paused || audio8.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player8.classList.remove('player8');
        player8.classList.add('pauser8');
        playcircle8.style.display = 'block';
        playcirclePause8.style.display = 'none';
        audio8.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player8.classList.add('player8');
        player8.classList.remove('pauser8');
        playcircle8.style.display = 'none';
        playcirclePause8.style.display = 'none';
        audio8.pause();
    }
})
playcircle8.addEventListener('click', () => {
    audio8.pause();
    playcircle8.style.display = 'none';
    playcirclePause8.style.display = 'block';
})
playcirclePause8.addEventListener('click', () => {
    audio8.play();
    playcircle8.style.display = 'block';
    playcirclePause8.style.display = 'none';
})



const player9 = document.getElementById('player9');
const playcircle9 = document.getElementById('playcircle9');
const playcirclePause9 = document.getElementById('playcirclePause9');
let audio9 = new Audio('Saree Ke Fall Sa R... Rajkumar 128 Kbps.mp3')

player9.addEventListener('click', () => {
    if (audio9.paused || audio9.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player9.classList.remove('player9');
        player9.classList.add('pauser9');
        playcircle9.style.display = 'block';
        playcirclePause9.style.display = 'none';
        audio9.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player9.classList.add('player9');
        player9.classList.remove('pauser9');
        playcircle9.style.display = 'none';
        playcirclePause9.style.display = 'none';
        audio9.pause();
    }
})
playcircle9.addEventListener('click', () => {
    audio9.pause();
    playcircle9.style.display = 'none';
    playcirclePause9.style.display = 'block';
})
playcirclePause9.addEventListener('click', () => {
    audio9.play();
    playcircle9.style.display = 'block';
    playcirclePause9.style.display = 'none';
})




const player10 = document.getElementById('player10');
const playcircle10 = document.getElementById('playcircle10');
const playcirclePause10 = document.getElementById('playcirclePause10');
let audio10 = new Audio('Tere Mast Mast Do Nain Dabangg 128 Kbps.mp3')

player10.addEventListener('click', () => {
    if (audio10.paused || audio10.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player10.classList.remove('player10');
        player10.classList.add('pauser10');
        playcircle10.style.display = 'block';
        playcirclePause10.style.display = 'none';
        audio10.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player10.classList.add('player10');
        player10.classList.remove('pauser10');
        playcircle10.style.display = 'none';
        playcirclePause10.style.display = 'none';
        audio10.pause();
    }
})
playcircle10.addEventListener('click', () => {
    audio10.pause();
    playcircle10.style.display = 'none';
    playcirclePause10.style.display = 'block';
})
playcirclePause10.addEventListener('click', () => {
    audio10.play();
    playcircle10.style.display = 'block';
    playcirclePause10.style.display = 'none';
})





const player11 = document.getElementById('player11');
const playcircle11 = document.getElementById('playcircle11');
const playcirclePause11 = document.getElementById('playcirclePause11');
let audio11 = new Audio('Deewane Hum Nahi Hote(Selfiee)(PagalWorld.com.pe).mp3')

player11.addEventListener('click', () => {
    if (audio11.paused || audio11.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player11.classList.remove('player11');
        player11.classList.add('pauser11');
        playcircle11.style.display = 'block';
        playcirclePause11.style.display = 'none';
        audio11.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player11.classList.add('player11');
        player11.classList.remove('pauser11');
        playcircle11.style.display = 'none';
        playcirclePause11.style.display = 'none';
        audio11.pause();
    }
})
playcircle11.addEventListener('click', () => {
    audio11.pause();
    playcircle11.style.display = 'none';
    playcirclePause11.style.display = 'block';
})
playcirclePause11.addEventListener('click', () => {
    audio11.play();
    playcircle11.style.display = 'block';
    playcirclePause11.style.display = 'none';
})




const player12 = document.getElementById('player12');
const playcircle12 = document.getElementById('playcircle12');
const playcirclePause12 = document.getElementById('playcirclePause12');
let audio12 = new Audio('Gotilo(PaglaSongs).mp3')

player12.addEventListener('click', () => {
    if (audio12.paused || audio12.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player12.classList.remove('player12');
        player12.classList.add('pauser12');
        playcircle12.style.display = 'block';
        playcirclePause12.style.display = 'none';
        audio12.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player12.classList.add('player12');
        player12.classList.remove('pauser12');
        playcircle12.style.display = 'none';
        playcirclePause12.style.display = 'none';
        audio12.pause();
    }
})
playcircle12.addEventListener('click', () => {
    audio12.pause();
    playcircle12.style.display = 'none';
    playcirclePause12.style.display = 'block';
})
playcirclePause12.addEventListener('click', () => {
    audio12.play();
    playcircle12.style.display = 'block';
    playcirclePause12.style.display = 'none';
})




const player13 = document.getElementById('player13');
const playcircle13 = document.getElementById('playcircle13');
const playcirclePause13 = document.getElementById('playcirclePause13');
let audio13 = new Audio('Tere Naam Alka Yagnik 128 Kbps.mp3')

player13.addEventListener('click', () => {
    if (audio13.paused || audio13.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player13.classList.remove('player13');
        player13.classList.add('pauser13');
        playcircle13.style.display = 'block';
        playcirclePause13.style.display = 'none';
        audio13.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player13.classList.add('player13');
        player13.classList.remove('pauser13');
        playcircle13.style.display = 'none';
        playcirclePause13.style.display = 'none';
        audio13.pause();
    }
})
playcircle13.addEventListener('click', () => {
    audio13.pause();
    playcircle13.style.display = 'none';
    playcirclePause13.style.display = 'block';
})
playcirclePause13.addEventListener('click', () => {
    audio13.play();
    playcircle13.style.display = 'block';
    playcirclePause13.style.display = 'none';
})



const player14 = document.getElementById('player14');
const playcircle14 = document.getElementById('playcircle14');
const playcirclePause14 = document.getElementById('playcirclePause14');
let audio14 = new Audio('Kyaa Dil Ne Kahaa Alka Yagnik 128 Kbps.mp3')

player14.addEventListener('click', () => {
    if (audio14.paused || audio14.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player14.classList.remove('player14');
        player14.classList.add('pauser14');
        playcircle14.style.display = 'block';
        playcirclePause14.style.display = 'none';
        audio14.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player14.classList.add('player14');
        player14.classList.remove('pauser14');
        playcircle14.style.display = 'none';
        playcirclePause14.style.display = 'none';
        audio14.pause();
    }
})
playcircle14.addEventListener('click', () => {
    audio14.pause();
    playcircle14.style.display = 'none';
    playcirclePause14.style.display = 'block';
})
playcirclePause14.addEventListener('click', () => {
    audio14.play();
    playcircle14.style.display = 'block';
    playcirclePause14.style.display = 'none';
})







const player15 = document.getElementById('player15');
const playcircle15 = document.getElementById('playcircle15');
const playcirclePause15 = document.getElementById('playcirclePause15');
let audio15 = new Audio('Milenge Milenge, Ver. 1 Alka Yagnik 128 Kbps.mp3')

player15.addEventListener('click', () => {
    if (audio15.paused || audio15.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player15.classList.remove('player15');
        player15.classList.add('pauser15');
        playcircle15.style.display = 'block';
        playcirclePause15.style.display = 'none';
        audio15.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player15.classList.add('player15');
        player15.classList.remove('pauser15');
        playcircle15.style.display = 'none';
        playcirclePause15.style.display = 'none';
        audio15.pause();
    }
})
playcircle15.addEventListener('click', () => {
    audio15.pause();
    playcircle15.style.display = 'none';
    playcirclePause15.style.display = 'block';
})
playcirclePause15.addEventListener('click', () => {
    audio15.play();
    playcircle15.style.display = 'block';
    playcirclePause15.style.display = 'none';
})





const player16 = document.getElementById('player16');
const playcircle16 = document.getElementById('playcircle16');
const playcirclePause16 = document.getElementById('playcirclePause16');
let audio16 = new Audio('Ae-Dil-Hai-Mushkil-2.0---RCR(PagalWorldl).mp3')

player16.addEventListener('click', () => {
    if (audio16.paused || audio16.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player16.classList.remove('player16');
        player16.classList.add('pauser16');
        playcircle16.style.display = 'block';
        playcirclePause16.style.display = 'none';
        audio16.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player16.classList.add('player16');
        player16.classList.remove('pauser16');
        playcircle16.style.display = 'none';
        playcirclePause16.style.display = 'none';
        audio16.pause();
    }
})
playcircle16.addEventListener('click', () => {
    audio16.pause();
    playcircle16.style.display = 'none';
    playcirclePause16.style.display = 'block';
})
playcirclePause16.addEventListener('click', () => {
    audio16.play();
    playcircle16.style.display = 'block';
    playcirclePause16.style.display = 'none';
})







const player17 = document.getElementById('player17');
const playcircle17 = document.getElementById('playcircle17');
const playcirclePause17 = document.getElementById('playcirclePause17');
let audio17 = new Audio('Zaroori Tha.mp3')

player17.addEventListener('click', () => {
    if (audio17.paused || audio17.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player17.classList.remove('player17');
        player17.classList.add('pauser17');
        playcircle17.style.display = 'block';
        playcirclePause17.style.display = 'none';
        audio17.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player17.classList.add('player17');
        player17.classList.remove('pauser17');
        playcircle17.style.display = 'none';
        playcirclePause17.style.display = 'none';
        audio17.pause();
    }
})
playcircle17.addEventListener('click', () => {
    audio17.pause();
    playcircle17.style.display = 'none';
    playcirclePause17.style.display = 'block';
})
playcirclePause17.addEventListener('click', () => {
    audio17.play();
    playcircle17.style.display = 'block';
    playcirclePause17.style.display = 'none';
})





const player18 = document.getElementById('player18');
const playcircle18 = document.getElementById('playcircle18');
const playcirclePause18 = document.getElementById('playcirclePause18');
let audio18 = new Audio('Aap Ki Khatir Himesh Reshammiya 128 Kbps.mp3')

player18.addEventListener('click', () => {
    if (audio18.paused || audio18.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player18.classList.remove('player18');
        player18.classList.add('pauser18');
        playcircle18.style.display = 'block';
        playcirclePause18.style.display = 'none';
        audio18.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player18.classList.add('player18');
        player18.classList.remove('pauser18');
        playcircle18.style.display = 'none';
        playcirclePause18.style.display = 'none';
        audio18.pause();
    }
})
playcircle18.addEventListener('click', () => {
    audio18.pause();
    playcircle18.style.display = 'none';
    playcirclePause18.style.display = 'block';
})
playcirclePause18.addEventListener('click', () => {
    audio18.play();
    playcircle18.style.display = 'block';
    playcirclePause18.style.display = 'none';
})





const player19 = document.getElementById('player19');
const playcircle19 = document.getElementById('playcircle19');
const playcirclePause19 = document.getElementById('playcirclePause19');
let audio19 = new Audio('Banjaara(PaglaSongs).mp3')

player19.addEventListener('click', () => {
    if (audio19.paused || audio19.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player19.classList.remove('player19');
        player19.classList.add('pauser19');
        playcircle19.style.display = 'block';
        playcirclePause19.style.display = 'none';
        audio19.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player19.classList.add('player19');
        player19.classList.remove('pauser19');
        playcircle19.style.display = 'none';
        playcirclePause19.style.display = 'none';
        audio19.pause();
    }
})
playcircle19.addEventListener('click', () => {
    audio19.pause();
    playcircle19.style.display = 'none';
    playcirclePause19.style.display = 'block';
})
playcirclePause19.addEventListener('click', () => {
    audio19.play();
    playcircle19.style.display = 'block';
    playcirclePause19.style.display = 'none';
})





const player20 = document.getElementById('player20');
const playcircle20 = document.getElementById('playcircle20');
const playcirclePause20 = document.getElementById('playcirclePause20');
let audio20 = new Audio('Mohabbat Dil Ka Sakoon_192(Ghantalele.com).mp3')

player20.addEventListener('click', () => {
    if (audio20.paused || audio20.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player20.classList.remove('player20');
        player20.classList.add('pauser20');
        playcircle20.style.display = 'block';
        playcirclePause20.style.display = 'none';
        audio20.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player20.classList.add('player20');
        player20.classList.remove('pauser20');
        playcircle20.style.display = 'none';
        playcirclePause20.style.display = 'none';
        audio20.pause();
    }
})
playcircle20.addEventListener('click', () => {
    audio20.pause();
    playcircle20.style.display = 'none';
    playcirclePause20.style.display = 'block';
})
playcirclePause20.addEventListener('click', () => {
    audio20.play();
    playcircle20.style.display = 'block';
    playcirclePause20.style.display = 'none';
})



const player21 = document.getElementById('player21');
const playcircle21 = document.getElementById('playcircle21');
const playcirclePause21 = document.getElementById('playcirclePause21');
let audio21 = new Audio('Meri Ho Ja Sachet Tandon 128 Kbps.mp3')

player21.addEventListener('click', () => {
    if (audio21.paused || audio21.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player21.classList.remove('player21');
        player21.classList.add('pauser21');
        playcircle21.style.display = 'block';
        playcirclePause21.style.display = 'none';
        audio21.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player21.classList.add('player21');
        player21.classList.remove('pauser21');
        playcircle21.style.display = 'none';
        playcirclePause21.style.display = 'none';
        audio21.pause();
    }
})
playcircle21.addEventListener('click', () => {
    audio21.pause();
    playcircle21.style.display = 'none';
    playcirclePause21.style.display = 'block';
})
playcirclePause21.addEventListener('click', () => {
    audio21.play();
    playcircle21.style.display = 'block';
    playcirclePause21.style.display = 'none';
})



const player22 = document.getElementById('player22');
const playcircle22 = document.getElementById('playcircle22');
const playcirclePause22 = document.getElementById('playcirclePause22');
let audio22 = new Audio('Dahi-Shakkar(PaglaSongs).mp3')

player22.addEventListener('click', () => {
    if (audio22.paused || audio22.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player22.classList.remove('player22');
        player22.classList.add('pauser22');
        playcircle22.style.display = 'block';
        playcirclePause22.style.display = 'none';
        audio22.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player22.classList.add('player22');
        player22.classList.remove('pauser22');
        playcircle22.style.display = 'none';
        playcirclePause22.style.display = 'none';
        audio22.pause();
    }
})
playcircle22.addEventListener('click', () => {
    audio22.pause();
    playcircle22.style.display = 'none';
    playcirclePause22.style.display = 'block';
})
playcirclePause22.addEventListener('click', () => {
    audio22.play();
    playcircle22.style.display = 'block';
    playcirclePause22.style.display = 'none';
})



const player23 = document.getElementById('player23');
const playcircle23 = document.getElementById('playcircle23');
const playcirclePause23 = document.getElementById('playcirclePause23');
let audio23 = new Audio('Tu Hi Mera Dil Hai Soumajit Biswas 128 Kbps.mp3')

player23.addEventListener('click', () => {
    if (audio23.paused || audio23.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player23.classList.remove('player23');
        player23.classList.add('pauser23');
        playcircle23.style.display = 'block';
        playcirclePause23.style.display = 'none';
        audio23.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player23.classList.add('player23');
        player23.classList.remove('pauser23');
        playcircle23.style.display = 'none';
        playcirclePause23.style.display = 'none';
        audio23.pause();
    }
})
playcircle23.addEventListener('click', () => {
    audio23.pause();
    playcircle23.style.display = 'none';
    playcirclePause23.style.display = 'block';
})
playcirclePause23.addEventListener('click', () => {
    audio23.play();
    playcircle23.style.display = 'block';
    playcirclePause23.style.display = 'none';
})



const player24 = document.getElementById('player24');
const playcircle24 = document.getElementById('playcircle24');
const playcirclePause24 = document.getElementById('playcirclePause24');
let audio24 = new Audio('Saure Ghar Yaariyan 2 128 Kbps.mp3')

player24.addEventListener('click', () => {
    if (audio24.paused || audio24.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player24.classList.remove('player24');
        player24.classList.add('pauser24');
        playcircle24.style.display = 'block';
        playcirclePause24.style.display = 'none';
        audio24.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player24.classList.add('player24');
        player24.classList.remove('pauser24');
        playcircle24.style.display = 'none';
        playcirclePause24.style.display = 'none';
        audio24.pause();
    }
})
playcircle24.addEventListener('click', () => {
    audio24.pause();
    playcircle24.style.display = 'none';
    playcirclePause24.style.display = 'block';
})
playcirclePause24.addEventListener('click', () => {
    audio24.play();
    playcircle24.style.display = 'block';
    playcirclePause24.style.display = 'none';
})






const player25 = document.getElementById('player25');
const playcircle25 = document.getElementById('playcircle25');
const playcirclePause25 = document.getElementById('playcirclePause25');
let audio25 = new Audio('Teri-Yaadon-Se---Salman-Ali(PaglaSongs).mp3')

player25.addEventListener('click', () => {
    if (audio25.paused || audio25.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player25.classList.remove('player25');
        player25.classList.add('pauser25');
        playcircle25.style.display = 'block';
        playcirclePause25.style.display = 'none';
        audio25.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player25.classList.add('player25');
        player25.classList.remove('pauser25');
        playcircle25.style.display = 'none';
        playcirclePause25.style.display = 'none';
        audio25.pause();
    }
})
playcircle25.addEventListener('click', () => {
    audio25.pause();
    playcircle25.style.display = 'none';
    playcirclePause25.style.display = 'block';
})
playcirclePause25.addEventListener('click', () => {
    audio25.play();
    playcircle25.style.display = 'block';
    playcirclePause25.style.display = 'none';
})



const player26 = document.getElementById('player26');
const playcircle26 = document.getElementById('playcircle26');
const playcirclePause26 = document.getElementById('playcirclePause26');
let audio26 = new Audio('Main-Dil-Ko-Samjha-Lunga(PaglaSongs).mp3')

player26.addEventListener('click', () => {
    if (audio26.paused || audio26.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player26.classList.remove('player26');
        player26.classList.add('pauser26');
        playcircle26.style.display = 'block';
        playcirclePause26.style.display = 'none';
        audio26.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player26.classList.add('player26');
        player26.classList.remove('pauser26');
        playcircle26.style.display = 'none';
        playcirclePause26.style.display = 'none';
        audio26.pause();
    }
})
playcircle26.addEventListener('click', () => {
    audio26.pause();
    playcircle26.style.display = 'none';
    playcirclePause26.style.display = 'block';
})
playcirclePause26.addEventListener('click', () => {
    audio26.play();
    playcircle26.style.display = 'block';
    playcirclePause26.style.display = 'none';
})



const player27 = document.getElementById('player27');
const playcircle27 = document.getElementById('playcircle27');
const playcirclePause27 = document.getElementById('playcirclePause27');
let audio27 = new Audio('Piya Dream Girl 2 128 Kbps.mp3')

player27.addEventListener('click', () => {
    if (audio27.paused || audio27.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player27.classList.remove('player27');
        player27.classList.add('pauser27');
        playcircle27.style.display = 'block';
        playcirclePause27.style.display = 'none';
        audio27.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player27.classList.add('player27');
        player27.classList.remove('pauser27');
        playcircle27.style.display = 'none';
        playcirclePause27.style.display = 'none';
        audio27.pause();
    }
})
playcircle27.addEventListener('click', () => {
    audio27.pause();
    playcircle27.style.display = 'none';
    playcirclePause27.style.display = 'block';
})
playcirclePause27.addEventListener('click', () => {
    audio27.play();
    playcircle27.style.display = 'block';
    playcirclePause27.style.display = 'none';
})




const player28 = document.getElementById('player28');
const playcircle28 = document.getElementById('playcircle28');
const playcirclePause28 = document.getElementById('playcirclePause28');
let audio28 = new Audio('Paagla_1.mp3')

player28.addEventListener('click', () => {
    if (audio28.paused || audio28.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player28.classList.remove('player28');
        player28.classList.add('pauser28');
        playcircle28.style.display = 'block';
        playcirclePause28.style.display = 'none';
        audio28.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player28.classList.add('player28');
        player28.classList.remove('pauser28');
        playcircle28.style.display = 'none';
        playcirclePause28.style.display = 'none';
        audio28.pause();
    }
})
playcircle28.addEventListener('click', () => {
    audio28.pause();
    playcircle28.style.display = 'none';
    playcirclePause28.style.display = 'block';
})
playcirclePause28.addEventListener('click', () => {
    audio28.play();
    playcircle28.style.display = 'block';
    playcirclePause28.style.display = 'none';
})



const player29 = document.getElementById('player29');
const playcircle29 = document.getElementById('playcircle29');
const playcirclePause29 = document.getElementById('playcirclePause29');
let audio29 = new Audio('Jiyaa-Laage-Naa(PaglaSongs).mp3')

player29.addEventListener('click', () => {
    if (audio29.paused || audio29.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player29.classList.remove('player29');
        player29.classList.add('pauser29');
        playcircle29.style.display = 'block';
        playcirclePause29.style.display = 'none';
        audio29.play();
    }
    else {
        console.log('This is five sonsg for you off');
        player29.classList.add('player29');
        player29.classList.remove('pauser29');
        playcircle29.style.display = 'none';
        playcirclePause29.style.display = 'none';
        audio29.pause();
    }
})
playcircle29.addEventListener('click', () => {
    audio29.pause();
    playcircle29.style.display = 'none';
    playcirclePause29.style.display = 'block';
})
playcirclePause29.addEventListener('click', () => {
    audio29.play();
    playcircle29.style.display = 'block';
    playcirclePause29.style.display = 'none';
})


const player30 = document.getElementById('player30');
const playcircle30 = document.getElementById('playcircle30');
const playcirclePause30 = document.getElementById('playcirclePause30');
let audio30 = new Audio('Dil Hai Tumhaara Alka Yagnik 128 Kbps.mp3')

player30.addEventListener('click', () => {
    if (audio30.paused || audio30.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player30.classList.remove('player30');
        player30.classList.add('pauser30');
        playcircle30.style.display = 'block';
        playcirclePause30.style.display = 'none';
        audio30.play();
    }

    else {
        console.log('This is five sonsg for you off');
        player30.classList.add('player30');
        player30.classList.remove('pauser30');
        playcircle30.style.display = 'none';
        playcirclePause30.style.display = 'none';
        audio30.pause();
    }
})
playcircle30.addEventListener('click', () => {
    audio30.pause();
    playcircle30.style.display = 'none';
    playcirclePause30.style.display = 'block';
})
playcirclePause30.addEventListener('click', () => {
    audio30.play();
    playcircle30.style.display = 'block';
    playcirclePause30.style.display = 'none';
})

const player31 = document.getElementById('player31');
const playcircle31 = document.getElementById('playcircle31');
const playcirclePause31 = document.getElementById('playcirclePause31');
let audio31 = new Audio('Kisise Tum Pyar Karo Andaaz 2003 128 Kbps.mp3')

player31.addEventListener('click', () => {
    if (audio31.paused || audio31.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player31.classList.remove('player31');
        player31.classList.add('pauser31');
        playcircle31.style.display = 'block';
        playcirclePause31.style.display = 'none';
        audio31.play();
    }

    else {
        console.log('This is five sonsg for you off');
        player31.classList.add('player31');
        player31.classList.remove('pauser31');
        playcircle31.style.display = 'none';
        playcirclePause31.style.display = 'none';
        audio31.pause();
    }
})
playcircle31.addEventListener('click', () => {
    audio31.pause();
    playcircle31.style.display = 'none';
    playcirclePause31.style.display = 'block';
})
playcirclePause31.addEventListener('click', () => {
    audio31.play();
    playcircle31.style.display = 'block';
    playcirclePause31.style.display = 'none';
})

const player32 = document.getElementById('player32');
const playcircle32 = document.getElementById('playcircle32');
const playcirclePause32 = document.getElementById('playcirclePause32');
let audio32 = new Audio('Ae Dil Hai Mushkil Title Track Pritam 128 Kbps.mp3')

player32.addEventListener('click', () => {
    if (audio32.paused || audio32.currentTime <= 0) {
        console.log('This is seven sonsg for you');
        player32.classList.remove('player32');
        player32.classList.add('pauser32');
        playcircle32.style.display = 'block';
        playcirclePause32.style.display = 'none';
        audio32.play();
    }

    else {
        console.log('This is five sonsg for you off');
        player32.classList.add('player32');
        player32.classList.remove('pauser32');
        playcircle32.style.display = 'none';
        playcirclePause32.style.display = 'none';
        audio32.pause();
    }
})
playcircle32.addEventListener('click', () => {
    audio32.pause();
    playcircle32.style.display = 'none';
    playcirclePause32.style.display = 'block';
})
playcirclePause32.addEventListener('click', () => {
    audio32.play();
    playcircle32.style.display = 'block';
    playcirclePause32.style.display = 'none';
})






const rightbar = document.getElementById('rightbar');
const sidebar = document.getElementById('sidebar');
const over = document.getElementById('over');

rightbar.addEventListener('click', () => {
    console.log('This is sidebar');
    sidebar.style.display = 'flex'
    over.style.display = 'flex'


})
over.addEventListener('click', () => {
    over.style.display = 'none';
    sidebar.style.display = 'none'


})


const Search = document.getElementById('Search');
const back = document.getElementById('back');
const searchhome = document.getElementById('searchhome');
const whole = document.getElementById('const')
Search.addEventListener('click', () => {
    console.log("This is serchbar")

    searchhome.style.display = 'block';
    whole.style.display = 'none'
})
back.addEventListener('click', () => {
    console.log("This is serchbar off")
    searchhome.style.display = 'none';
    whole.style.display = 'block'

})
const iconSearch = document.getElementById('iconSearch');
iconSearch.addEventListener('click', () => {
    searchhome.style.display = 'block';
    whole.style.display = 'none'

    // searchhome.style.display = 'none';
})

// This is listdelelting
const listDelelte = document.getElementById('listDelelte');
const itemin_one = document.getElementById('itemin_one');
listDelelte.addEventListener('click', () => {
    itemin_one.style.display = 'none'
})

const listDelelte1 = document.getElementById('listDelelte1');
const itemin_two = document.getElementById('itemin_two');
listDelelte1.addEventListener('click', () => {
    itemin_two.style.display = 'none'
})

const listDelelte3 = document.getElementById('listDelelte3');
const itemin_three = document.getElementById('itemin_three');
listDelelte3.addEventListener('click', () => {
    itemin_three.style.display = 'none'
})
const listDelelte4 = document.getElementById('listDelelte4');
const itemin_four = document.getElementById('itemin_four');
listDelelte4.addEventListener('click', () => {
    itemin_four.style.display = 'none'
})

const listDelelte5 = document.getElementById('listDelelte5');
const itemin_five = document.getElementById('itemin_five');
listDelelte5.addEventListener('click', () => {
    itemin_five.style.display = 'none'
})

const listDelelte6 = document.getElementById('listDelelte6');
const itemin_six = document.getElementById('itemin_six');
listDelelte6.addEventListener('click', () => {
    itemin_six.style.display = 'none'
})

const listDelelte7 = document.getElementById('listDelelte7');
const itemin_seven = document.getElementById('itemin_seven');
listDelelte7.addEventListener('click', () => {
    itemin_seven.style.display = 'none'
})

const listDelelte8 = document.getElementById('listDelelte8');
const itemin_eight = document.getElementById('itemin_eight');
listDelelte8.addEventListener('click', () => {
    itemin_eight.style.display = 'none'
})
const listDelelte9 = document.getElementById('listDelelte9');
const itemin_nine = document.getElementById('itemin_nine');
listDelelte9.addEventListener('click', () => {
    itemin_nine.style.display = 'none'
    empty.style.display = 'block'
})






// This is logoin section of javascript and programing 

// This is login fisrt page javascript
const Login = document.getElementById('Login');
const fisrtrange = document.getElementById('fisrtrange')
Login.addEventListener('click', () => {
    console.log('Hey i am login page open');
    logoinInner.style.display = 'block'

})

const submit_reset = document.getElementById('submit_reset');
submit_reset.addEventListener('click', () => {
    logoinInner.style.display = 'none'
    fisrtrange.style.animationName = 'rangeback'
    logoinInnersecond.style.display = 'block'

})

const remove_login = document.getElementById('remove_login');
remove_login.addEventListener('click', () => {
    console.log('Hey i am off login page');
    logoinInner.style.display = 'none'
    logoinInnersecond.style.display = 'none'

})
// ================================= ================================= =================================

// This is second login page javascript here
const back_section = document.getElementById('back_section');
back_section.addEventListener('click', () => {
    logoinInner.style.display = 'block'
    logoinInnersecond.style.display = 'none'
    console.log("THIS IS BACK SECTION OF BUTTON CLICKED")
})

const range_js = document.getElementById('range_js');
range_js.style.width = '50%'

const remove_login_second = document.getElementById('remove_login_second');
remove_login_second.addEventListener('click', () => {
    console.log('This is second close bitton cliked')
    logoinInnersecond.style.display = 'none'

})
// ================================= ================================= =================================

// This is third section javascript
const submit_reset_third = document.getElementById('submit_reset_third');
const range_js_third = document.getElementById('range_js_third');
const remove_login_Third = document.getElementById('remove_login_Third');
const logoinInnertthird = document.getElementById('logoinInnertthird');
const back_section_Third = document.getElementById('back_section_Third');
range_js_third.style.width = '75%';
range_js_third.style.animationName = 'rangeThird';
submit_reset_third.addEventListener('click', () => {
    logoinInnersecond.style.display = 'none'
    logoinInnertthird.style.display = 'block'


})
remove_login_Third.addEventListener('click', () => {
    console.log('This is third section close button cliked')
    logoinInnertthird.style.display = 'none'


})
back_section_Third.addEventListener('click', () => {
    console.log('This is backsectioThird clocked');
    logoinInnersecond.style.display = 'block'
    logoinInnertthird.style.display = 'none'
    range_js.style.animationName = 'rangeThirdback'
})

// ================================= ================================= =================================


// This is four section of javascript
const submit_reset_four = document.getElementById('submit_reset_four');
const logoinInnertfour = document.getElementById('logoinInnertfour');
const back_section_four = document.getElementById('back_section_four');
const remove_login_four = document.getElementById('remove_login_four');
const range_js_four = document.getElementById('range_js_four')
const complete = document.getElementById('complete');
range_js_four.style.width = '100%';
range_js_four.style.animationName = 'rangefour';
submit_reset_four.addEventListener('click', () => {
    console.log('This is four section page ling open or cliked')
    logoinInnertthird.style.display = 'none'
    logoinInnertfour.style.display = 'block'

})
remove_login_four.addEventListener('click', () => {
    console.log('This is four section close buttton cliked')
    logoinInnertfour.style.display = 'none'

})
back_section_four.addEventListener('click', () => {
    console.log('This is backsection button clicked')
    logoinInnertthird.style.display = 'block'
    logoinInnertfour.style.display = 'none'
    range_js_third.style.animationName = 'rangefourback'

})
complete.addEventListener('click', () => {
    console.log('This is complet button clicked')
    logoinInnertfour.style.display = 'none'


})

setInterval(() => {
    logoinInnertfour.style.display = 'none'

}, 9000);
// ================================= ================================= =================================


// This is my input in to user last paeg in fiil but how
const fullName = document.getElementById('name');
const username = document.getElementById('username');



// The end login section of javascript and programing




const imgHiro1 = document.getElementById('imgHiro1');
const imgHiro2 = document.getElementById('imgHiro2');
const imgHiro3 = document.getElementById('imgHiro3');
const imgHiro4 = document.getElementById('imgHiro4');
imgHiro1.style.display = 'none'
imgHiro2.style.display = 'none'
imgHiro3.style.display = 'none'
imgHiro4.style.display = 'none'
setTimeout(() => {
    imgHiro1.style.display = 'block'

}, 0);
setTimeout(() => {
    imgHiro1.style.animationName = 'AnimationHiro2'

}, 4000);
setTimeout(() => {
    imgHiro1.style.animationName = 'AnimationHiro2'
    imgHiro1.style.display = 'none'
    imgHiro2.style.display = 'block'

}, 5010);
setTimeout(() => {
    imgHiro2.style.animationName = 'AnimationHiro2'


}, 14000);
setTimeout(() => {
    imgHiro2.style.display = 'none'
    imgHiro3.style.display = 'block'

}, 15010);
setTimeout(() => {
    imgHiro3.style.animationName = 'AnimationHiro2'


}, 28000);
setTimeout(() => {
    imgHiro3.style.display = 'none'
    imgHiro4.style.display = 'block'
}, 29010);


// This is moreItmebtn of javscript here 
const moreItmebtn = document.getElementById('moreItmebtn');
const displayHome = document.getElementById('const');
const MorePage = document.getElementById('MorePage');
const nameOfSongs = document.getElementById('nameOfSongs')
const AboutImages = document.getElementById('AboutImages');
let images = new Image('imgaes/Unstoppable Sia 128 Kbps.png')



moreItmebtn.addEventListener('click', (e) => {
    console.log('This is moreItmebtn of active now', e);
    displayHome.style.display = 'none';
    MorePage.style.display = 'block';




})

const Mannameadd = document.getElementById('username');
let Manname = prompt('Please enter You Name')
console.log(Manname)
Mannameadd.innerHTML = Manname;


document.getElementById('tool').addEventListener('click', function () {
    console.log("This is opne tab of tool");
    document.getElementById('tool').style.display = 'none';
    document.getElementById('tools').style.display = 'flex';
    document.getElementById('flag').style.display = 'none';
    document.getElementById('five').style.display = 'flex';

})
document.getElementById('tools').addEventListener('click', () => {
    console.log("This is opne tab of tool off");
    document.getElementById('five').style.display = 'none';
    document.getElementById('tool').style.display = 'flex';
    document.getElementById('flag').style.display = 'block';
    document.getElementById('tools').style.display = 'none';

})








// let p = fetch('https://goweather.herokuapp.com/weather/Ny')
// p.then((response)=> {
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
// } ).then((value2) => {
//     console.log(value2);
// })
// console.log(p)






