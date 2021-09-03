$(document).ready(function(){
    $("#nhatro .nhatro__left__items li > div > div > p").hide()

    $("#nhatro #nhatro__left .nhatro__left__items > li").click(function(){
        event.preventDefault()
        $(this).removeClass("nhatro__left__items--item--on")
        $("#nhatro #nhatro__left .nhatro__left__items > .nhatro__left__items--item--on").toggle(650)
        $("#nhatro .nhatro__left__items li > div > div > p").toggle(650)
        $(this).addClass("nhatro__left__items--item--on")
    })
})