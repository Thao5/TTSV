$(document).ready(function(){
    //$(".nhatro__left__items").hide()
    $("#arrow-top").hide()
    $(window).scroll(function(){
        if($(this).scrollTop() >= 619){
            $("#nhatro__right").css({
                "position" : "fixed",
                "right" : 0,
                "top" : "21%"
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

    $("#arrow-top").click(function(){
        $("#nhatro__right").toggle(650)
    })
    
    $("#nhatro__right ul > li").click(function(){
        $(".nhatro__left__items--item--on").fadeOut(650)
        var a=$(this).attr("title")
        if(a === "tatca"){
            $(".nhatro__left__items--item--on").fadeIn(650)
        } else{          
            var b=`.nhatro__left__items--item--${a}`
            $(b).fadeIn(650)
        }
    })
})