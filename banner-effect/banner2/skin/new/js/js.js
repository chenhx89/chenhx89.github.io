// JavaScript Document
$(function () {
    $(".top_bb").click(function () {
        var aaa_lin = $(".xj_nav a").length;
        var aaa_widd = aaa_lin * 78;
        if ($(this).hasClass("a_cz")) {
            $(this).removeClass("a_cz")
            $(".top_ba").stop(true, false).show(function () { $(this).animate({ "width": 97 }, 200) })
            $(".xj_nav").stop(true, false).animate({ width: 0 }, 200);
            $(".aaa_cz").stop(true, false).animate({ width: 0 }, 200);

        } else {
            $(this).addClass("a_cz")
            $(".top_ba").stop(true, false).animate({ width: 0 }, 200, function () { $(this).hide() });
            $(".xj_nav").stop(true, false).animate({ width: aaa_widd }, 200);
            $(".aaa_cz").stop(true, false).animate({ width: aaa_widd }, 200);
        }
    })
    $(".qqkefu .top").click(function () {
        $("html,body").animate({ "scrollTop": 0 }, 300);
    })
    $(window).scroll(function () {
        var scrollTop = document.body.scrollTop;
        var y = $('.top').offset().top;
        if (scrollTop > 78 || y>78) {
            $(".top").css({ "opacity": "0.9", "filter": "alpha(opacity=90)" })
        } else {
            $(".top").css({ "opacity": "1", "filter": "alpha(opacity=100)" })
        }
    })
    $(".qq_cza").hover(function () {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            $(this).stop(true, false).animate({ "width": "110px", "left": "-65px" }, 300);
        } else {
            $(this).stop(true, false).animate({ "width": "110px" }, 300);
        }
    }, function () {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            $(this).stop(true, false).animate({ "width": "45px", "left": "0" }, 300);
        } else {
            $(this).stop(true, false).animate({ "width": "45px" }, 300);
        }
    })
    $(".qq_czb").hover(function () {
        $(".erweima").show(50)
    }, function () {
        $(".erweima").hide(50)
    })
    $(".coll_al").toggle(function () {
        $(".coll_al img").stop(true, false).animate({ "left": -56 }, 300);
        $(".coll_a_bottom").show(300)
    }, function () {
        $(".coll_al img").stop(true, false).animate({ "left": 0 }, 300);
        $(".coll_a_bottom").hide(300)
    })

    var a = 0;
    var alen = $(".coll_ba li").length;
    var awid = $(".coll_ba li").width();
    var awida = (awid) * alen;
    $(".coll_ba ul").width(awida);
    $(".coll_ba_fir").click(function () {

        if (a > 0) {
            a -= 1;
            aaa(a);
        }
    });
    $(".coll_ba_be").click(function () {
        if (a < alen - 1) {
            a += 1;
            aaa(a);
        }
    });
    function aaa(a) {
        var aawig = (awid) * a;
        $(".coll_ba ul").stop(true, false).animate({ "left": -aawig }, 500);
    }
    $(".coll_ba").hover(function () {
        $(".coll_ba_fir").stop(true, false).animate({ "left": 0 }, 300);
        $(".coll_ba_be").stop(true, false).animate({ "right": 0 }, 300);
    }, function () {
        $(".coll_ba_fir").stop(true, false).animate({ "left": -24 }, 300);
        $(".coll_ba_be").stop(true, false).animate({ "right": -24 }, 300);
    })
    //each遍历文本框
    $(".coll_ar input,input,#remark").each(function () {
        //保存当前文本框的值
        var vdefault = this.value;
        $(this).focus(function () {
            //获得焦点时，如果值为默认值，则设置为空
            if (this.value == vdefault) {
                this.value = "";
            }
        });
        $(this).blur(function () {
            //失去焦点时，如果值为空，则设置为默认值
            if (this.value == "") {
                this.value = vdefault;
            }
        });
    });
    $(".top_bb").click(function () {
        $(".index_nav").slideDown(500)
    })
    $(".index_nav_b").click(function () {
        $(".index_nav").slideUp(500)
    })

    /*$(".banner_bottoma a").hover(function(){
    $(this).data('ori-text', $(this).text());
    $(this).text($(this).attr('title'));
		
    },function(){
    $(this).text($(this).data('ori-text'));
			
    })
    var index = 0;
    var picTimer; 
    var aWidth=$(".banner_cont li").width();
    var cz_len=$(".banner_cont li").length;
    $(".banner_next").click(function() {
    clearInterval(picTimer);
    index=index+1;
    if(index == cz_len) {index = 0;}
    showPics(index);
    });
    $(".banner_bottoma a").hover(function(){
    index=$(".banner_bottoma a").index(this);
    showPics(index);
    });
    $(".banner").hover(function(){
    clearInterval(picTimer);
    },function(){
    picTimer = setInterval(function() {
    showPics(index);
    index++;
    if(index == cz_len) {index = 0;}
    },2000)
		
    }).trigger("mouseleave");	
    function showPics(index){
    $(".banner_cont").find("li").eq(index).slideDown(300).siblings().slideUp(300);
    $(".banner_bottoma").find("a").eq(index).addClass("cz_current").parent().siblings().find("a").removeClass("cz_current");
    }
    */
    $(".main_b_c li").hover(function () {
        $(this).find(".cc").stop().animate({ "bottom": "0px" }, 200)
    }, function () {
        $(this).find(".cc").stop().animate({
            "bottom": "-166px"
        }, 200)
    })
    $(".case_a_cont a").hover(function () {
        $(this).find("p,b").stop().animate({ "bottom": "0px" }, 200)
    }, function () {
        $(this).find("p,b").stop().animate({
            "bottom": "-65px"
        }, 200)
    })


    var cz_li = $(".about_nava").find("a");
    var czcur = $(".about_nava").find(".cur").length ? $(".about_nava").find(".cur").index() : 0;
    $(".about_navb").css("left", czcur * 90);
    $(".about_nava a").hover(function () {
        var cz_index = $(this).index();
        var cz_ww = (cz_index) * 90;
        $(".about_navb").stop(true, false).animate({ "left": cz_ww }, 200)
    }, function () {
        $(".about_navb").stop(true, false).animate({ "left": czcur * 90 }, 200)
    })


})