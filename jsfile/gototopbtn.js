$(document).ready(function(){
    $("#gototopbtn").hide()

    $(window).scroll(function(){
        if($(this).scrollTop() >= 100)
            $("#gototopbtn").show("slow")
        else
            $("#gototopbtn").hide("slow")
    })

    $("#gototopbtn").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },1000)
    })
})