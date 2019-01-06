/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
		} else {
        x.className = "topnav";
	}
	if($("#myTopnav").hasClass("responsive")) {!$("#secondMenuVerical").removeClass('openSec')}
}
function myNewFunction() {
	
	$('#secondMenuVerical').toggleClass("openSec");
	if($("#secondMenuVerical").hasClass("openSec")) {$("#myTopnav").removeClass(' responsive');}
	
}

window.onload = function(){
	var acc = document.getElementsByClassName("accordion");
	var i;
	
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
				} else {
				panel.style.display = "block";
			}
		});
	}
	window.onscroll = function() {
		myScrollFunction()
	};
	var header = document.getElementById("myHeader");
	var sticky = header.offsetTop;
	function myScrollFunction() {
		if(window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} 
		else {
			header.classList.remove("sticky");
		}};
		
		if(window.outerWidth > 992) {
			$(document).ready(function(){
				$(".profil").mouseover(function(){
					$("#profil").css("display", "block");
					$(".profil .kkk").css("display", "block");
				});
				$(".profil").mouseout(function(){
					$("#profil").css("display", "none");
					$(".profil .kkk").css("display", "none");
				});
			});
			$(document).ready(function(){
				$(".news").mouseover(function(){
					$("#news").css("display", "block");
					$(".news .kkk").css("display", "block");
				});
				$(".news").mouseout(function(){
					$("#news").css("display", "none");
					$(".news .kkk").css("display", "none");
				});
			});
			$(document).ready(function(){
				$(".contact").mouseover(function(){
					$("#contact").css("display", "block");
					$(".contact .kkk").css("display", "block");
				});
				$(".contact").mouseout(function(){
					$("#contact").css("display", "none");
					$(".contact .kkk").css("display", "none");
				});
			});
			$(document).ready(function(){
				$(".seting").mouseover(function(){
					$("#seting").css("display", "block");
					$(".seting .kkk").css("display", "block");
				});
				$(".seting").mouseout(function(){
					$("#seting").css("display", "none");
					$(".seting .kkk").css("display", "none");
				});
			});
			$(document).ready(function(){
				$(".help").mouseover(function(){
					$("#help").css("display", "block");
					$(".help .kkk").css("display", "block");
				});
				$(".help").mouseout(function(){
					$("#help").css("display", "none");
					$(".help .kkk").css("display", "none");
				})
			});
			$("#tableCours .allView").click(function(){$("#tableCours thead tr:nth-child(n+4)").toggle()});
			$("#contInfo").click(function(){$(".first1").toggle();$(".first2").toggle()});
			$("#secondMenu").click(function() { $('body').toggleClass('bodyt') });
			if($(".accordion ").hasClass('glyphicon-menu-down')){$(".accordion ").click(function (e) {
				$(this).toggleClass("glyphicon-menu-up");
			})} ;
			if(!$(".glyphicon.glyphicon-th").hasClass('withe')){$(".glyphicon.glyphicon-th").click(function(){$(this).addClass("withe");$(".glyphicon.glyphicon-th-list.withe").removeClass("withe"); $(".reid").addClass("gridOff")})};
			if ($(".glyphicon.glyphicon-th-list").hasClass('withe')) {$(".glyphicon.glyphicon-th-list").click(function(){$(".glyphicon.glyphicon-th-list").addClass("withe");console.log("yes");$(".glyphicon.glyphicon-th.withe").removeClass("withe"); $(".reid").removeClass("gridOff")})};
			$(".glyphicon.glyphicon-calendar").click(function(){ $("#calendara").load( "calendar/calendar.html #calcF" ).toggleClass("grett")});
			if(window.innerWidth <= 800) { $("#secondMenu").click(function(){$("body").removeClass("bodyt")})};
			
			
		}};
				