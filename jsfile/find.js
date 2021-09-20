$(document).ready(function(){
    $("#search-btn").click(function(){
        var text = $("#kw").val()
        var text = text.toUpperCase();
        $(".nhatro__left__items--item--on").fadeOut(650)
        if(text != 'null'){
            $(`.nhatro__left__items--item--on div a p:contains(${text})`).parent().parent().parent().fadeIn(650)
        } else{
            $(".nhatro__left__items--item--on").fadeIn(650)
        }
    })  
})