$(document).ready(function(){
    //$(".nhatro__left__items").hide()
    $("#nhatro__right ul > li").click(function(){
        $(".nhatro__left__items--item--on").fadeOut(650)
        var a=$(this).attr("title")
        if(a === "tatca"){
            $(".nhatro__left__items--item--on").slideDown(650)
        } else{          
            var b=`.nhatro__left__items--item--${a}`
            $(b).fadeIn(650)
        }
    })
})