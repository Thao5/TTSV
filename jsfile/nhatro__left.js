$(document).ready(function(){
    $("#nhatro .nhatro__left__items li > div > div > p").hide()
    $("#back-tro").hide()
    $("#nhatro #nhatro__left .nhatro__left__items > li > div > a").click(function(){
        event.preventDefault()
        var linktro = $(this).attr("href")
        $("#nhatro #nhatro__left .nhatro__left__items > li").hide()
        $(this).parent().parent().fadeIn(650)
        $(linktro).show(650)
        $("#back-tro").fadeIn(650)
        $("#nhatro #nhatro__left .nhatro__left__items").css({
            "margin-left" : "-100px",
        })
    })

    $(".nhatro__left__items li").addClass("on")

    $("#back-tro").click(function(){
        $("#nhatro #nhatro__left .nhatro__left__items > li").fadeOut(650)
        $(".on").fadeIn(650)
        $("#nhatro .nhatro__left__items li > div > div > p").hide(650)
        $("#back-tro").hide()
        $("#nhatro #nhatro__left .nhatro__left__items").css({
            "margin-left" : 0,
        })
    })

    $("#nhatro__right div > ul").click(function(){
        $("#nhatro .nhatro__left__items li > div > div > p").hide(650)
    })

    $("#search-btn").click(function(){
        $("#nhatro .nhatro__left__items li > div > div > p").hide(650)
    })
})