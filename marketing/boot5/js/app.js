window.onload = function(){
  AOS.init();
    var swiper = new Swiper("#mySwiper", {
        slidesPerView: 1,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },

        },
      });

}


 