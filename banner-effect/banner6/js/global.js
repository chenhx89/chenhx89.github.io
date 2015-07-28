

//Tab菜单
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var tab=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  tab.className=i==cursel?"cur":"";
  con.style.display=i==cursel?"block":"none";
 }
}


$(document).ready(function(){
	//nav
	$(".navBar ul li").mouseover(function(){
		$(this).addClass("hover");
	})
	$(".navBar ul li").mouseout(function(){
		$(this).removeClass("hover");
	})
	//返回顶部
	$(".GoTop").click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	});
	
	//弹出框
	$(".pop_btn").click(function(){
		var $pop_btnID = $(this).attr("id");
		var $pop_divID = "#pop_" + $pop_btnID;
		$(".popbg").height($(document).height());
		$(".popbg").width($(document).width());
		var $w = ($(window).width() - $($pop_divID).width()) / 2;
		var $h = ($(window).height() - $($pop_divID).height()) / 2;
		$($pop_divID).css({"left":$w,"top":$h});
		$(".popbg").css({"left": -$w,"top":-$h})
		$($pop_divID).show();
	});
	$(".close_btn").click(function(){
		var $pop_name = $(this).attr("boxname")
		var $pop_divID = "#pop_" + $pop_name;
		$($pop_divID).hide();
	});
});
