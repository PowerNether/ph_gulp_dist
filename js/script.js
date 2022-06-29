const menu = document.querySelector('.header')
const menu_toggler = document.querySelector('.header-toggle')
const menu_overlay = document.querySelector('.header-overlay')

window.onscroll = function () {
    const body = document.querySelector('body')
    if (body.classList.contains('front')) {
        const main_info = document.querySelector('.main').getBoundingClientRect()
        if (window.pageYOffset >= main_info.height) {
            menu.classList.add('fixed')
        } else {
            menu.classList.remove('fixed')
        }
    } else {
        if (window.pageYOffset >= menu.scrollHeight) {
            menu.classList.add('fixed')
        } else {
            menu.classList.remove('fixed')
        }
    }
};

function menu_toggle () {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        menu_overlay.classList.remove('active')
        document.body.style["overflow-y"] = 'auto'
    } else {
        menu.classList.add('active')
        menu_overlay.classList.add('active')
        document.body.style["overflow-y"] = 'hidden'
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
            slidesPerView: 1.1,
            spaceBetween: 16,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            },
            navigation: {
                prevEl: ".top10-left",
                nextEl: ".top10-right",
            },
            breakpoints: {
                568: {
                    slidesPerView: 1.5
                },
                768: {
                    slidesPerView: 2
                },
                968: { 
                    slidesPerView: 2.2
                }
            }
        })
        top10_swiper.on('slideChange', () => { top10_current.innerHTML = top10_swiper.realIndex + 1; })    
    }
})

const main_slider = document.querySelector('.main-right-block__slider')

window.addEventListener('load', function() {
    if (main_slider !== null) {
        const main_slider_swiper = new Swiper(main_slider, {
            grab: true,
            grabCursor: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: ".swiper-pagination",
            },
        })    
    }
})

const selects = document.querySelectorAll('.select')

window.addEventListener('load', function () {
    Array.from(selects).forEach((el) => {
        $(el).selectric({
            nativeOnMobile: false
        });
        const label = el.parentNode.parentNode.querySelector('.label')
        const placeholder = el.parentNode.parentNode.querySelector('.placeholder')
        const select = el.parentNode.parentNode.querySelector('.selectric')
        const parent = el.parentNode.parentNode.parentNode
        const amount = parent.querySelector('.amount') || null
        if (label.textContent === placeholder.textContent) {
            label.style['color'] = '#808080'
        }
        $(el).on('selectric-change', function () {
            if (label.textContent === placeholder.textContent) {
                label.style['color'] = '#808080'
                select.style['border'] = '1px solid #F0F0F0'
                select.style['background'] = '#FFFFFF'
                amount.style.opacity = 0
            } else {
                if (amount !== null) {
                    amount.innerHTML = parent.querySelectorAll('.selected').length
                    amount.style.opacity = 1
                }
                label.style['color'] = '#333333'
                select.style['border'] = '1px solid #00D26D'
                select.style['background'] = '#F0FAF5'
            }
        })
    })
})

$("#whatsapp").mask("+7(999) 999-9999", {
    autoclear: false
});

$('#phone').mask("+7(999) 999-9999", {
    autoclear: false
});

$('.jk-desc-link').on('click', function (e) {
    e.preventDefault();
    let href = $(this).attr('href')
    let id = href.slice(1, href.length)
    let scroll_postition = $('.jk-desc').find(`#${id}`).offset().top - $('header').outerHeight()
    $('html, body').stop().animate({
        scrollTop: scroll_postition
    }, 1000)
})

$(window).on('scroll', function () {
    let blocks = $('.block')
    let scroll_postion = $(this).scrollTop();
  
    blocks.each(function() {
        let top = $(this).offset().top - $('header').outerHeight() - 40;
        let bottom = top + $(this).outerHeight();
        
        if (scroll_postion >= top && scroll_postion <= bottom) {
            $('.jk-desc-link').removeClass('active');

            $('.jk-desc').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

let teaserSliders = document.querySelectorAll('.teaser-slider') || null

window.addEventListener('load', function() {
    if (teaserSliders !== null) {
        Array.from(teaserSliders).forEach((el) => {
            new Swiper(el, {
                grab: true,
                grabCursor: true,
                pagination: {
                    el: ".swiper-pagination",
                },
            })
        })
    }
})

let lotSlider = document.querySelector('.lot-slider') || null

window.addEventListener('load', function () {
    if (lotSlider !== null) {
        new Swiper(lotSlider, {
            grab: true,
            grabCursor: true,
            spaceBetween: 8,
            slidesPerView: 1.3,
            centeredSlides: true,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        })
    }
})

let filterToggler = document.querySelector('.filter-control-toggler') || null

if (filterToggler !== null) {
    filterToggler.addEventListener('click', function () {
        let filter = document.querySelector('.filter')
        if (filter.classList.contains('open')) {
            filter.classList.remove('open')
        } else {
            filter.classList.add('open')
        }
    })
}

let filterOpener = document.querySelector('.filter-mobile-toggler') || null
let filterCloser = document.querySelector('.filter-header-toggler') || null

if (filterOpener !== null) {
    filterOpener.addEventListener('click', function () {
        let filter = document.querySelector('.filter')
        if (filter.classList.contains('opened')) {
            filter.classList.remove('opened')
            document.body.classList.remove('body-overflow')
        } else {
            filter.classList.add('opened')
            document.body.classList.add('body-overflow')
        }
    })
}
if (filterCloser !== null) {
    filterCloser.addEventListener('click', function () {
        let filter = document.querySelector('.filter')
        if (filter.classList.contains('opened')) {
            filter.classList.remove('opened')
            document.body.classList.remove('body-overflow')
        } else {
            filter.classList.add('opened')
            document.body.classList.add('body-overflow')
        }
    })
}

let listingCompilation = document.querySelectorAll('.listing-compilation-header') || null

if (listingCompilation !== null) {
    Array.from(listingCompilation).forEach(el => {
        el.addEventListener('click', function () {
            let parent = el.parentNode
            if (parent.classList.contains('open')) {
                parent.classList.remove('open')
            } else {
                parent.classList.add('open')
            }
        })
    })
}