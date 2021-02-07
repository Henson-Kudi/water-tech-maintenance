var faBars = document.querySelector('.fa-bars');

var times = document.querySelector('.fa-times');

var navItems = document.querySelector('.nav-items');

var body = document.querySelector('body');

faBars.addEventListener('click', function(){
    faBars.style.zIndex = -1;
    navItems.classList.add('items');
    body.style.opacity = '80%';
});

times.addEventListener('click', function(){
    faBars.style.zIndex = 1;
    navItems.classList.remove('items');
    body.style.opacity = "100%";
});

