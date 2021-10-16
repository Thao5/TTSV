$(document).ready(function(){
    //$(".nhatro__left__items").hide()
    if($(window).width() <= 1108){
        $("#arrow-top").css({
            "position" : "absolute",
            "top" : 0,
            "right" : 0
        })
        $("#nhatro__right").css({
            "position" : "absolute",
            "right" : 0,
            "top" : "40px"
        })
        $("#nhatro__right").hide(650)
        $(window).scroll(function(){
            if($(this).scrollTop() >= 619){
                $("#nhatro__right").css({
                    "position" : "fixed",
                    "right" : 0,
                    "top" : "25%"
                })
                $("#nhatro__right").hide(650)
                $("#arrow-top").css({
                    "position" : "fixed",
                    "top": "20%",
                    "right" : 0
                })
            } else{
                $("#arrow-top").show(650)
                $("#arrow-top").show(650)
                $("#arrow-top").css({
                    "position" : "absolute",
                    "top" : 0,
                    "right" : 0
                })
                $("#nhatro__right").css({
                    "position" : "absolute",
                    "right" : 0,
                    "top" : "40px"
                })
            }
        })
    } else{
        $("#arrow-top").hide()
        $(window).scroll(function(){
            if($(this).scrollTop() >= 619){
                    $("#nhatro__right").css({
                        "position" : "fixed",
                        "right" : 0,
                        "top" : "25%"
                    })
                    $("#arrow-top").show(650)
                    $("#nhatro__right").hide(650)
            } else{
                    $("#nhatro__right").css({
                        "position" : "static"
                    })
                    $("#arrow-top").hide(650)
                    $("#nhatro__right").show(650)
            }
        })
    }

    $("#arrow-top").click(function(){
        $("#nhatro__right").toggle(650)
    })
    
    $("#nhatro__right ul > li").click(function(){
        $(".nhatro__left__items > li").fadeOut(650)
        $("#nhatro #nhatro__left .nhatro__left__items").css({
            "margin-left" : 0,
        })
        var a=$(this).attr("title")
        if(a === "tatca"){
            $(".nhatro__left__items > li").removeClass("on")
            $(".nhatro__left__items > li").addClass("on")
            $(".nhatro__left__items > li").fadeIn(650)
        } else{          
            var b=`li.nhatro__left__items--item--${a}`
            $(".nhatro__left__items > li").removeClass("on")
            $(b).addClass("on")
            $(b).fadeIn(650)
        }
        $("#back-tro").hide()
    })

    
})