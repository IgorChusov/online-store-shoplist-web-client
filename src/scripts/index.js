(() => {
  const swiperHero = new Swiper('.section-hero__swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.section-hero__swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 3000,
    },
  });

  const swiperSpecial = new Swiper('.section-specials__swipper', {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      398: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      651: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      973: {
        slidesPerView: 5,
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: '.section-specials__button-next',
      prevEl: '.section-specials__button-prev',
    },
  });

  const swiperBottomSpecial = new Swiper('.section-specials__bottom-swipper', {
    direction: 'horizontal',
    slidesPerView: 6,
    loop: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      398: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      973: {
        slidesPerView: 6,
      }
    },
    navigation: {
      nextEl: '.section-specials__bottom-button-next',
      prevEl: '.section-specials__bottom-button-prev',
    },
  });

  const swiperBlog = new Swiper('.section-blog__swipper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      943: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },
    autoplay: {
      delay: 3000,
    },
  });

  function initSwiper() {
    const swiperSectionProduct = new Swiper('.section-product__swipper_active', {

      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        398: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        651: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        973: {
          slidesPerView: 5,
          spaceBetween: 30,
        }
      },
      direction: 'horizontal',
      navigation: {
        nextEl: '.section-product__button-next',
        prevEl: '.section-product__button-prev',
      },
    });
  }
  initSwiper();

  function tabsBtn() {
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.section-product__btn-tab').forEach(function(btnClicked) {
        btnClicked.addEventListener('click', (event) => {
          event.preventDefault();
          let path = event.currentTarget.dataset.path;
          document.querySelectorAll('.section-product__btn-tab').forEach((element) => { element.classList.remove('section-product__btn-tab_active') })
          btnClicked.classList.add('section-product__btn-tab_active');
          document.querySelectorAll('.section-product__swipper').forEach(function(tabContent) {
            tabContent.classList.remove('section-product__swipper_active');
          });
          document.querySelector(`[data-target="${path}"]`).classList.add('section-product__swipper_active');
          initSwiper()
        })
      })
    })
  }

  tabsBtn()
    // раскрывашки
  $(document).ready(function() {
    $('.header__list-btn').click(function() {
      if ($(this).next('.header__prop-menu').is(":hidden")) {
        $('.header__prop-menu').slideUp('fast');
        $('.header__list-btn').removeClass('is-active')
        $(this).next('.header__prop-menu').slideDown('fast');
        $(this).next('.header__prop-menu').addClass('header__prop-menu_is-active');
        $(this).addClass('is-active');
      } else {
        $(this).next('.header__prop-menu').slideUp('fast');
        $(this).removeClass('is-active');
        $(this).next('.header__prop-menu').removeClass('header__prop-menu_is-active');
      }
    });
  })

  $(document).ready(function() {

    $(".header__list-btn").mouseenter(function() {
      $('.header__list-btn').removeClass('is-active');
      $('.header__prop-menu').removeClass('header__prop-menu_is-active');
      $(this).next('.header__prop-menu').slideDown('fast');
      $(this).next('.header__prop-menu').addClass('header__prop-menu_is-active');
      $(this).addClass('is-active');
      let $parent = $(this).parent('.header__list-item');
      $($parent).mouseleave(function() {
        $(this).children('.header__prop-menu').slideUp('fast');
        $(this).children('.header__list-btn').removeClass('is-active');
        $(this).children('.header__prop-menu').removeClass('header__prop-menu_is-active');
      });
    });
  });;

  $(document).ready(function() {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content",
      active: false
    });
    $(".header-accordion").accordion({
      collapsible: true,
      heightStyle: "content",
      active: false,
      header: "> h3"
    });
  })

  window.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector(".header__burger-menu");
    TweenMax.set(menu, { autoAlpha: 0, display: "none" });
    let tlMenu = gsap.timeline({ paused: true });
    tlMenu.to(menu, { autoAlpha: 1, display: "block" })
      .from(".header__burger-menu", {
        y: -50,
        duration: 0.5,
      })
      .from("#accordion-burger-menu", {
        opacity: 0,
        y: -50,
        duration: 1,
      })


    const btnOpenBurger = document.querySelector(".header__btn-burger");
    btnOpenBurger.addEventListener("click", (e) => {
      e.preventDefault();
      if (menu.style.display === 'none') {
        tlMenu.play();
      } else {
        tlMenu.reverse();
      }
    });
  })

})();