$(document).ready(function(){
    if($(window).width() > 1108){
        $(window).scroll(function(){
            if($(this).scrollTop() >= 313){
                $(".luachon").css({
                    "position" : "fixed",
                    "top": 0,
                    "margin-top":0,
                    "padding-top": 0,
                    "left": 0,
                    "right": 0,
                    "z-index": 999,
                    "opacity": 0.7
                })
            } else{
                $(".luachon").css({
                    "position" : "relative",
                    "top": 0,
                    "margin-top":0,
                    "padding-top": 0,
                    "left": 0,
                    "right": 0,
                    "z-index": 999,
                    "opacity": 1
                })
            }
        })
    } else{
        $(window).scroll(function(){
            if($(this).scrollTop() >= 313){
                $(".luachon--mobile").css({
                    "position" : "fixed",
                    "top": 0,
                    "margin-top":0,
                    "padding-top": 0,
                    "left": 0, 
                    "right": 0,
                    "z-index": 999,
                    "opacity": 0.7
                })
            } else{
                $(".luachon--mobile").css({
                    "position" : "relative",
                    "top": 0,
                    "margin-top":0,
                    "padding-top": 0,
                    "left": 0,
                    "right": 0,
                    "z-index": 999,
                    "opacity": 1
                })
            }
        })
    }
})