let menu = document.querySelector('.imgmenu');
let main = document.querySelector('.main');
let btn = document.querySelectorAll('.b');
let pivot = false;
menu.addEventListener('click', e => {
    if (pivot == false) {
        pivot = true;
        main.style.display='block';
        
    }else {
        pivot = false;
        main.style.display='none';
    }
});

btn.forEach(e => {
    e.addEventListener('click', eject => {
        main.style.display='none';
    });    
});



let titleCoffe = document.getElementById('titleCoffe')
let titleCake = document.getElementById('titleCake')
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let left2 = document.querySelector('.left2');
let right2 = document.querySelector('.right2');
let counter = 0;
let coffes = ['images/frape.png','images/espresso.png', 'images/moka.jpg'];
let title = ['Frapé','Espresso','Moka'];
let cakes = ['images/cake.jpg','images/hotcake.jpg', 'images/pay.jpg'];
let title2 = ['Cake','Hotcake','Pay'];

let coffeArray = ()=> {
    left.addEventListener("click", ()=> {
        counter--;
        counter == -1 ? counter = coffes.length-1 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
    });
    right.addEventListener("click", ()=> {
        counter++;
        counter == coffes.length ? counter = 0 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
    }); 
}
let cakeArray = ()=> {
    left2.addEventListener("click", ()=> {
        counter--;
        counter == -1 ? counter = cakes.length-1 : counter;
        titleCake.innerHTML = `${title2[counter]}`
        changeImage(`${cakes[counter]}`, 'pancake');
    });
    right2.addEventListener("click", ()=> {
        counter++;
        counter == cakes.length ? counter = 0 : counter;
        titleCake.innerHTML = `${title2[counter]}`
        changeImage(`${cakes[counter]}`, 'pancake');
    });
}

function changeImage(a, imgid) {
    document.getElementById(imgid).src=a;
}

coffeArray()
cakeArray()

const inicio = document.querySelector('.intro');
const before = document.querySelector('.history');
const second = document.querySelector('.package');
const third = document.querySelector('.info');
const nav1 = document.getElementById('pestaña1');
const nav2 = document.getElementById('pestaña2');
const nav3 = document.getElementById('pestaña3');
const nav4 = document.getElementById('pestaña4');

const options = {
    threshold: .5
}

let nav = (panel, nav) => {
    const verifyVisibility = (entries) => {
        const entry = entries[0];
        entry.isIntersecting ? nav.style.color = '#612500' : nav.style.color = '#fff';
    }
    
    const observer = new IntersectionObserver(verifyVisibility, options);
    
    observer.observe(panel);
}

nav(inicio, nav1)
nav(before, nav2)
nav(second, nav3)
nav(third, nav4)