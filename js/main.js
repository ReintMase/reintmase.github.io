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
    var url = "https://api.minetools.eu/ping/your_ip";
                  
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
        $(".funs__content_overlay_info_box h2").html("Виживання");
        $(".funs__content_overlay_info_box p").html("На нашому сервері ви можете чудово провести час на захоплюючому виживанні.<br><br> Оптимізований ігровий процес, цікаві ігрові механіки, жодних креативок, та іншого поголів'я, що спотворює початковий сенс виживання");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    economy.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Тваринки");
        $(".funs__content_overlay_info_box p").html("На сервері є різні тваринки які допоможуть вам в грі!<br>В кожної тваринки свої унікальні здібності!");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    dungeons.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Данжі");
        $(".funs__content_overlay_info_box p").html("Відвідуйте небезпечні данжі, вивчайте місцевість, знаходите скрині із цінним лутом. Будьте обережні! Тут спавняться моби, а також дозволено PvP.");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    battlepass.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Батл Пасс");
        $(".funs__content_overlay_info_box p").html("Виконуйте щотижневі та щоденні квести «Системи рівнів» і просуйтеся сходами з корисними нагородами!<br><br>Сезони із квестами запускаються регулярно. Слідкуйте за спільнотою сервера!");
        $('.funs__content_overlay').fadeIn();
        $(".funs__content_overlay_info").addClass("modal-show-animation");
    }

    agreement.onclick = function() {
        $(".funs__content_overlay_info_box h2").html("Угода");
        $(".funs__content_overlay_info_box p").html("Придбання донату є виключно вашою ініціативою. Повернення витрачених коштів не надається за жодних умов. Купуючи донат ви автоматично підписуєтеся під цією угодою.<br><br>При грубому порушенні правил (чисельні образи, чіти, гриферство тощо) донатер може втратити свій привілей без можливості повернення витрачених коштів.");
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