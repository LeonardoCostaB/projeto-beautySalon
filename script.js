
const ModalOverlay = {
    open () {
        document.querySelector ('.modal-overlay')
                .classList.add ('active')
    },
    close () {
        document.querySelector ('.modal-overlay')
                .classList.remove ('active')
    }

}

const ModalAgends = {
    open () {
        document.querySelector ('.modal-agends')
                .classList.add ('active')
    },
    close () {
        document.querySelector ('.modal-agends')
                .classList.remove ('active')
    }
}

/* configurando os slides (carousel / swiper) */

const swiper = new Swiper(".mySwiper", {
    // Cada view que eu quero ver por slide
        slidesPerView: 1,

    // elemento da paginação
        pagination: {
        el: '.swiper-pagination'
        },

    //fazer o que a rodinha do mouse passe os slides
        mousewheel: true,

    // fazer o que as setas do teclado passe os slides
        keyboard: true,

    // Ajustando para telas maiores
        breakpoints: {
            767: {
                slidesPerView: 2,
                setWrapperSize: true
            }
        }
   });

/* Configurando os elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
// Direção que eu vou apresentar meu scroll
    origin: 'left',

// Distancia que ele vai vir
    distance: '40px',

// Duração da apresentação
    duration: 700,

// Se o scroll vai resetar ou vai aparecer somente uma vez
    reset:true,
})

// Como eu quero que o scroll se apresente
scrollReveal.reveal(
    `#home .image, #home .presentation-items, #about .image-about, #about .contents-about, #services .title-services, #services .apresentation-services,#depositions #title-depositions, #depositions .swiper, #contact .contents-contact, #contact .informations, #footer `
)

//Ajustando o scroll, quando minha pag for de acordo com o id no menu, ele vai ficar marcado
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) *4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

//ajustando o botão de voltar ao topo
const button = document.querySelector('.back-to-top')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 500) {
        button.classList.add('active')
    } else {
        button.classList.remove('active')
    }
    activateMenuAtCurrentSection()
})


