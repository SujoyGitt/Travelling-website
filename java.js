document.querySelector(".main .nav .menu .menuber").addEventListener('click', () => {
    document.querySelector('.main .nav .menu ul').classList.toggle('active');
    document.querySelector('.main .nav .menu .menuber .one').classList.toggle('oneadd');
    document.querySelector('.main .nav .menu .menuber .two').classList.toggle('twoadd');
    document.querySelector('.main .nav .menu .menuber .three').classList.toggle('threeadd');
});
window.addEventListener('scroll', function () {
    let y = window.scrollY;
    let Nav = document.querySelector(".main .nav");
    let CardOne = document.querySelector(".cardone");
    let CardTwo = document.querySelector(".cardtwo");
    let CardThree = document.querySelector(".cardthree");
    if (y > 500) {
        Nav.classList.add("navadd");
        CardOne.classList.add('cardoneAdd');
        CardTwo.classList.add('cardTwoAdd');
        CardThree.classList.add('cardThreeAdd');
    }
    else {
        Nav.classList.remove("navadd");
        CardOne.classList.remove('cardoneAdd');
        CardTwo.classList.remove('cardTwoAdd');
        CardThree.classList.remove('cardThreeAdd');
    };
    let disOne = document.querySelector(".disone");
    let disTwo = document.querySelector(".distwo");
    if (y > 900) {
        disOne.classList.add('disOneAdd');
        disTwo.classList.add('disTwoAdd');
    }
    else {
        disOne.classList.remove('disOneAdd');
        disTwo.classList.remove('disTwoAdd');
    };
    let OurService = document.querySelector('.our-services');
    if (y > 1300) {
        OurService.classList.add('ourserviceAdd')
    }
    else {
        OurService.classList.remove('ourserviceAdd')
    };
    let footerChildOne = document.querySelector('.footerChildOne');
    let footerChildFour = document.querySelector('.footerChildFour');

    if (y > 1550) {
        footerChildOne.classList.add('footerChildOneAdd')
        footerChildFour.classList.add('footerChildFourAdd')
    }
    else {
        footerChildOne.classList.remove('footerChildOneAdd');
        footerChildFour.classList.remove('footerChildFourAdd')
    };
   
});
let count = window.innerHeight-100;
window.addEventListener("scroll",()=>{
    let k = window.scrollY / count;
    console.log(k)
    document.querySelector("video").style.opacity = 1 - k;
})