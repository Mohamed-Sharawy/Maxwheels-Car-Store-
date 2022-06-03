let menu = document.querySelector('#menu-btn')
let navBar = document.querySelector('.nav')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navBar.classList.toggle('active')
}

document.querySelector('.log-in').onclick = () => {
    document.querySelector('.login-container').classList.toggle('active')
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-container').classList.remove('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navBar.classList.remove('active')
    
    if(window.screenY > 0) {
        document.querySelector('.header').classList.add('active')
    }else {
        document.querySelector('.header').classList.remove('active')
    }

}

window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active')
    }else {
        document.querySelector('.header').classList.remove('active')
    }
}

document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(ele => {
        let speed = ele.getAttribute('data-speed')

        let x = (window.innerWidth - e.pageX * speed) / 90
        let y = (window.innerHeight - e.pageY * speed) / 90

        ele.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
}

document.querySelector(".home").onmouseleav = () => {
    document.querySelectorAll('.home-parallax').forEach(ele => {
        ele.style.transform = `translateX(0px) translateY(0px)`
    })
}

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    991: {
        slidesPerView: 3,
    },
    },
});

var swiper = new Swiper(".featuerd-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    991: {
        slidesPerView: 3,
    },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    991: {
        slidesPerView: 3,
    },
    },
});