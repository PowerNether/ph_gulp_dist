const menu = document.querySelector('.header')
const menu_toggler = document.querySelector('.header-toggle')
const menu_overlay = document.querySelector('.header-overlay')

function menu_toggle () {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        menu_overlay.classList.remove('active')
        document.body.style.overflow = 'auto'
    } else {
        menu.classList.add('active')
        menu_overlay.classList.add('active')
        document.body.style.overflow = 'hidden'
    }
}

menu_toggler.addEventListener('click', menu_toggle)
menu_overlay.addEventListener('click', menu_toggle)


const faq = document.querySelectorAll('.faq-answer-title')

window.addEventListener('load', function () {
    Array.from(faq).forEach((e) => {
        const faq_text = e.parentNode.querySelector('.faq-answer-text')
        const faq_text_height = faq_text.scrollHeight
        faq_text.style.height = faq_text_height + 16 + 'px'
    })

    Array.from(faq).forEach((e) => {
        const faq_parent = e.parentNode
        const faq_text = faq_parent.querySelector('.faq-answer-text')
        const faq_text_height = faq_text.scrollHeight
        e.addEventListener('click', function () {
            if (faq_parent.classList.contains('active')) {
                faq_text.style['max-height'] = 0 + 'px'
                faq_text.style['padding-top'] = 0 + 'px'
                faq_parent.classList.remove('active')
            } else {
                faq_text.style['max-height'] = faq_text_height + 16 + 'px'
                faq_text.style['padding-top'] = 16 + 'px'
                faq_parent.classList.add('active')
            }
        })
    })
})

const top10 = document.querySelector('.top10')

window.addEventListener('load', function() {
    if (top10 !== null) {
        const top10_slider = top10.querySelector('.swiper') || null
        const top10_all = top10.querySelector('.top10-all')
        const top10_current = top10.querySelector('.top10-current')
        const top10_images = top10.querySelectorAll('.swiper-slide')
        top10_all.innerHTML = top10_images.length - 1
        const top10_swiper = new Swiper(top10_slider, {
            grab: true,
            grabCursor: true,
            slidesPerView: 2.2,
            spaceBetween: 16,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            },
            navigation: {
                prevEl: ".top10-left",
                nextEl: ".top10-right",
            },
            // breakpoints: { 
            //     1264: { 
            //         slidesPerView: 2.2
            //     }
            // }
        })
        top10_swiper.on('slideChange', () => { top10_current.innerHTML = top10_swiper.realIndex + 1; })    
    }
})