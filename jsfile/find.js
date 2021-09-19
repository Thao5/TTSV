$(document).ready(function(){
    $("#search-btn").click(function(){
        var text = $("#kw").val()
        var text = text.toUpperCase();
        $(".nhatro__left__items--item--on").hide(650)
        if(text != 'null'){
            $(`.nhatro__left__items--item--on div a p:contains(${text})`).parent().parent().parent().show(650)
        } else{
            $(".nhatro__left__items--item--on").show(650)
        }
    })  
})