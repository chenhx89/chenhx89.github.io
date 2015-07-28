        jQuery(function() {
          function showPop(index) {

            jQuery('.pop_body_dialog').css({
              'background': "url(/inc/img/pop" + index + ".png)"
            });

            jQuery('.pop_body_dialog #span').html(jQuery('#pop_text' + index).html());

            var y = (jQuery(window).height() - 419) / 2;

            jQuery('.pop_body').css({
              'top': y + 'px'
            });
            jQuery('.pop_bg,.pop_body').stop().fadeIn();

          }

          jQuery('.box3_m a').click(function() {
            for (var i = 1; i < 7; i++) {
              if (jQuery(this).hasClass('btn' + i)) {
                showPop(i);
                return;
              }
            }
          });
          jQuery(".pop_body_dialog .btn").click(function() {
            jQuery('.pop_bg,.pop_body').stop().fadeOut();
          });

          xbtn(".box3_m .btn1,.box3_m .btn2,.box3_m .btn3,.box3_m .btn4,.box3_m .btn5,.box3_m .btn6", '-94px');
          xbtn(".recommend_read_more", '-41px');
          xbtn("#label3", '-49px');
		  xbtn("#label4", '-49px');
		  xbtn("#label5", '-49px');
          xbtn(".pop_body_dialog .btn", '-14px');

          var banner_index = 1;
          function banner_timer() {

            changeBanner(banner_index);
            banner_index++;
            if (banner_index == 6) {
              banner_index = 1;
            }
            setTimeout(banner_timer, 5000);
          };
          banner_timer();

          function changeBanner(_i) {
            var w = jQuery('.shows:first').width();
            for (var i = 1; i < 10; i++) {
              if (i == _i) {
                jQuery('.banner .button a.btn' + i).addClass('btn' + i + '_fire');
              } else {
                jQuery('.banner .button a.btn' + i).removeClass('btn' + i + '_fire');
              }
              jQuery('#shows' + i).stop().animate({
                'left': ((i - _i) * w) + 'px'
              },
              500,
              function() {
                jQuery(this).show();
              });
            }

          }
          jQuery('.banner .button a').click(function() {
            for (var i = 1; i < 6; i++) {
              if (jQuery(this).hasClass('btn' + i)) {
                banner_index = i;
                changeBanner(i);
                return;
              }

            }
          });

          jQuery('.show').css({
            'width': (jQuery(document).width() * 9) + 'px'
          });

          jQuery(".case li").hover(function() {
            jQuery('.case_w', this).stop().animate({
              "bottom": "30px"
            },
            400);
            jQuery(".x", this).stop().css({
              'left': '50px'
            }).animate({
              'left': "80px"
            },
            400).show();
            jQuery(".y", this).stop().css({
              'right': '50px'
            }).animate({
              'right': "80px"
            },
            400).show();
            jQuery('.fire', this).show();
          },
          function() {
            jQuery('.case_w', this).stop().animate({
              "bottom": "14px"
            },
            400);
            jQuery('.fire, .x, .y', this).hide();
          });

        });