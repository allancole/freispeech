jQuery(document).ready(function($){function e(e,t,n){if(n)t.addClass("project-is-open"),e.addClass("is-full-width").siblings("li").removeClass("is-loaded");else{var c=window.getComputedStyle(document.querySelector(".projects-container"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,""),i="mobile"==c?100:0;t.removeClass("project-is-open"),e.animate({opacity:0},800,function(){e.removeClass("is-loaded"),$(".projects-container").find(".cd-scroll").attr("style",""),setTimeout(function(){e.attr("style","").removeClass("is-full-width").find(".cd-title").attr("style","")},i),setTimeout(function(){o($(".projects-container li").eq(0))},300)})}}function t(){var e=1-$(".projects-container").scrollTop()/300;$(".projects-container .cd-scroll").css("opacity",e),$(".is-full-width .cd-title").css("opacity",e),$(".site-branding").css("opacity",e),$(".is-full-width").hide().show(0)}function o(e){e.length>0&&setTimeout(function(){e.addClass("is-loaded"),o(e.next())},150)}$(".cd-single-project").bgLoaded({afterLoaded:function(){o($(".projects-container li").eq(0))}}),$(".cd-single-project").on("click",function(){var t=$(this),o=!t.hasClass("is-full-width");o&&e($(this),$(".projects-container"),o)}),$(".projects-container .cd-close").on("click",function(){e($(".is-full-width"),$(".projects-container"),!1)}),$(".projects-container .cd-scroll").on("click",function(){$(".projects-container").animate({scrollTop:$(window).height()},500)}),$(".projects-container").on("scroll",function(){window.requestAnimationFrame(t)})}),function($){$.fn.bgLoaded=function(e){var t=this,o={afterLoaded:function(){this.addClass("bg-loaded")}},n=$.extend({},o,e);t.each(function(){var e=$(this),t=window.getComputedStyle(e.get(0),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"").split(", ");e.data("loaded-count",0),$.each(t,function(o,c){var i=c.replace(/^url\(["']?/,"").replace(/["']?\)$/,"");$("<img/>").attr("src",i).load(function(){$(this).remove(),e.data("loaded-count",e.data("loaded-count")+1),e.data("loaded-count")>=t.length&&n.afterLoaded.call(e)})})})}}(jQuery);