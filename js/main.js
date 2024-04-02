$(document).ready(function(){


    SmoothScroll({
        animationTime    : 700,
        stepSize         : 75,
        accelerationDelta : 20,  
        accelerationMax   : 2,   
        keyboardSupport   : true,  
        arrowScroll       : 70,
        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,
        touchpadSupport   : true,
    })


    var scene = document.getElementById('parallax_scene');
    var parallax = new Parallax(scene);


    $(function() {
      var last_id;
      var $top_menu = $('.side_bar__menu');
      var menu_height = $top_menu.outerHeight(true);
      var $menu_items = $top_menu.find('a');
      var $scroll_items = $menu_items.map(function() {
        var item = $($(this).attr('href'));
        if (item.length) {
          return item;
        }
      });

      $(window).scroll(function() {
        var from_top = $(this).scrollTop() + menu_height;
        var mar = parseInt($top_menu.css('margin-bottom'));
        var cur = $scroll_items.map(function() {
          if ($(this).offset().top < from_top + mar) {
            return this;
          }
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : '';
        if (last_id !== id) {
          last_id = id;
          $menu_items.parent()
            .removeClass('side_bar__menu_active_link')
            .end()
            .filter("[href='#" + id + "']")
            .parent()
            .addClass('side_bar__menu_active_link');
        }
      });
    });


    $(function() {
        $('.check').click(function(){
           $('.side_bar').toggleClass("active");
        });
        $("#menu").on("click","a", function(){
            if($(window).width() <= 1310) {
                $('.side_bar').toggleClass("active");
                $('[name^="menu"]').prop({'checked': false});
            }
        });
    });


    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });

    $("#offer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });


    $(function() {
      function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
      }
     
      $(".header__server").on("click", function() {
        copyToClipboard("#server_ip");
        $(".header__server_ip_copy_alert").animate({opacity: 1},'slow');
        $(".header__server_ip_copy_alert").animate({opacity: 0},'slow');
      });
    });


    var target = $('.about__content_title');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function(){
      var winScrollTop = $(this).scrollTop();
      if(winScrollTop > scrollToElem){
        $(".side_bar__logo").css("transform", "translateX(0%)");
        $(".side_bar__logo").css("opacity", "1");
      }
      else {
       $(".side_bar__logo").css("transform", "translateX(-160%)");
       $(".side_bar__logo").css("opacity", "0");
      }
    });


    var xhr = new XMLHttpRequest();
    var url = "https://api.minetools.eu/ping/mc.riotcraft.fun";
                  
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonData = JSON.parse(xhr.responseText); 
            showOnline(jsonData);
        }
    };

    xhr.open("GET", url, true);
    xhr.send();

    function showOnline(data) {
        var output = "Онлайн: " + data.players.online + "/" + data.players.max; 
                  
        document.getElementById("server_online").innerHTML = output;
    }


    $(function () {
      $('.bottom_alert_button').click(function() {
        document.getElementById("bottom_alert").style.display = 'none';
      })
    })
    $(window).scroll(function() {
    if ($(this).scrollTop()>900) {
      document.getElementById("bottom_alert").style.bottom = '2%';
    }
    });


    $(document).ready(function(){
            $(".faq__content_question_spoiler .block").show();
            $(".close .block").hide();
            $(".faq__content_question_spoiler h2").click(function(){  
                $(this).toggleClass("icon").next().slideToggle(400);
        });         
    });


    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);


    var modal = document.getElementById('modal_window');
    var survival = document.getElementById('survival_modal_button');
    var economy = document.getElementById('economy_modal_button');
    var dungeons = document.getElementById('dungeons_modal_button');
    var battlepass = document.getElementById('events_modal_button');
    var agreement = document.getElementById('agreement_modal_button')
    var close = document.getElementsByClassName("close_modal")[0];
    const prevent = ev => ev.preventDefault();

    survival.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Сундук пандоры");
        $(".funs__content_overlay_info_box p").html("Каждый 1 час появляеться на пвп арене интересный сундук.<br><br> из которого вы можете выловить интересный лут, но будьте осторожны, все остальные тоже хотят его заполучить! (Время до ивента: /evdelay)");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    economy.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Цытадель");
        $(".funs__content_overlay_info_box p").html("Каждый 1 час и 45 минут на сервере в рандомной области мира появляеться строение. <br><br> Система похожа на сундук пандоры, но это совсем не так, в нём находиться 2 шалкера и каждые 10-15 секунд возле вас появляються хранители! (Время до ивента: /evdelay)");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    dungeons.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Данжи");
        $(".funs__content_overlay_info_box p").html("Данжи схожи с метеоритом, они всегда находяться в мире, их 100-110 на карте. <br><br> Для их открытия вам пондобиться <b>Космическая отмычка</b>, после чего вы заполучите очень сочный лут.<br><br> * Отмычки можно получить из ванильных данжей!");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    battlepass.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Алхимик");
        $(".funs__content_overlay_info_box p").html("В алхимике можно смешать 2 зелья и с шансом указанным в пузырьке опыта смешать их!<br><br>После смешивания вы получите: 'ЗМС' (Зелья Мощи Стихий), после  чего вы можете его выпить и получить 2 эффекта которые вы смешали!");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    agreement.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Соглашение");
        $(".funs__content_overlay_info_box p").html("Покупка доната это лишь ваша инициатива, мы не вымагаем из вас покупки доната!<br><br>После покупки вы получите все права указанные в соглашение, деньги за купленный товар мы <b>НЕ ВОЗВРАЩАЕМ!</b>");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    close.onclick = function() {
        $('.funs__content_overlay').fadeOut('fast');
        $(".funs__content_overlay_info").removeClass("modal-show-animation");
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            $('.funs__content_overlay').fadeOut('fast');
            $(".funs__content_overlay_info").removeClass("modal-show-animation");
        }
    }


});