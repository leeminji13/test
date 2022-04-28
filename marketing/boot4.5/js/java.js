window.onload = function(){
    AOS.init();
    var swiper = new Swiper("#mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          }
        },
          // autoplay: {
          //   delay: 3000,
          //   disableOnInteraction: false,
          // },
          loop : true, 
          spaceBetween: 30,
          slidesPerView: 1,
      });
}
