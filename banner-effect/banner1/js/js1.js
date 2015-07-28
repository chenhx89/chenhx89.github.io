   function xbtn(obj, back_y) {

                   jQuery(obj).each(function() {
                        var this_event = null;
                        jQuery(this).addClass("xbtn").html(jQuery(this).html() + "<span class='xbtn_span'></span>");
                        var xy;
                        if (jQuery(this).css('background-position') == undefined) {
                            xy = [jQuery(this).css('background-position-x'), jQuery(this).css('background-position-y')];
                        } else {
                            xy = jQuery(this).css('background-position').split(' ');
                        }

                        jQuery('.xbtn_span', this).css({
                            'background-image': jQuery(this).css('background-image'),
                            'background-position': xy[0] + ' ' + back_y
                        }).hover(function() {
                            var obj = this;
                            function go() {

                                var v = jQuery(obj).css('opacity') - 0 + 0.1;

                                if (v <= 1 && this_event == 'in') {
                                    if (v > 0.9) {
                                        v = 1;
                                    }
                                    jQuery(obj).css({
                                        'opacity': v,
                                        'filter': 'alpha(opacity=' + (v * 100) + ')'
                                    });
                                    setTimeout(go, 50);
                                }
                            }
                            this_event = 'in';
                            go();

                        },
                        function() {

                            var obj = this;
                            function go() {
                                var v = jQuery(obj).css('opacity') - 0.1;
                                if (v < 0.1) {
                                    v = 0;
                                }
                                if (v >= 0 && this_event == 'out') {
                                    jQuery(obj).css({
                                        'opacity': v,
                                        'filter': 'alpha(opacity=' + (v * 100) + ')'
                                    });

                                    setTimeout(go, 50);

                                }
                            }
                            this_event = 'out';
                            go();
                        });

                    });

                }
                jQuery(function() {

                    xbtn(".header .btn1,.header .btn2,.header .btn3,.header .btn4,.header .btn5", '-41px');
                    xbtn(".out .btn1,.out .btn2,.out .btn3,.out .btn4,.out .btn5", '-93px');
                    xbtn(".logo", '-38px');

                    jQuery(document).mousemove(function(e) {
                        var offset = jQuery(document).width() / 2 - e.clientX;
                        jQuery(".banner").css({
                            "background-position": ((jQuery(document).width() - 1400) / 2 + offset / 6 -100) + "px 0px"
                        });

                    });

                    function foot_scroll() {
                        if (jQuery(document).scrollTop() < (jQuery(document).height() - jQuery(window).height()) * 0.7) {
                            jQuery('.footer').animate({
                                'bottom': '-278px'
                            },
                            800,
                            function() {
                                setTimeout(foot_scroll, 500);
                            });
                        } else {
                            jQuery('.footer').animate({
                                'bottom': '0px'
                            },
                            800,
                            function() {
                                setTimeout(foot_scroll, 500);
                            });
                        }
                    }
                    foot_scroll();

                });