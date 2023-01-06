
$(document).ready(function(){
    

    //aos
    AOS.init(); 

    // 헤더 스크롤 이벤트
    
    //스와이퍼 배너
    var swiper = new Swiper(".mySwiper", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true
          },
          effect: "fade",
          loop : true,
          speed : 2500,
          autoplay: { //오토플레이 설정
            delay: 1500, //딜레이 시간 설정
            }
      });
      
      // 스와이퍼 sec-1
      var swiper = new Swiper(".secondSwiper", {
        // effect: "fade",
        direction: 'vertical',
        loop : true,
        speed : 2500,
        autoplay: { //오토플레이 설정
          delay: 1500, //딜레이 시간 설정
          }
      });


      
      //서브메뉴
     
      media();
      function media(){
        const ww = $(window).width();
        if(ww >= 1000){
               //서브메뉴 연결     
          $('.main-menu li').mouseenter(function(){
            const result = $(this).attr('data-alt');
            $('.sub-menu').removeClass('active'); //서브메뉴제거
            $(`#${result}`).addClass('active');

            //서브메뉴박스 보이게 처리
            $('.sub-menu-box').addClass('active');
            $('.header-area').addClass('active');
            $('.header-area .logo svg').addClass('active');
          });

             // 서브메뉴박스 마우스엔터시 헤더 색상 변경
            $('.header-area .logo svg').addClass('active');
            $('.header-area').addClass('active');

            //서브메뉴박스 안보이게 처리
            $('.sub-menu-box').mouseleave(function(){
              $(this).removeClass('active');
              $('.header-area').removeClass('active');
              $('.header-area .logo svg').removeClass('active');
  
            });
          }else{
            $('#hamburger').click(function(){
              $(this).toggleClass('active');
              $('.main-menu').toggleClass('active');
            });
          }
         }
      
      

      //상단 이동 버튼
      const btn =$('.top-btn');
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
      });

      btn.on('click', function(e){
          e.preventDefault();
          $('html,body').animate({
            scrollTop:0
          }, 100);
      });
 
     
});//end