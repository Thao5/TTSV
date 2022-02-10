$(document).ready(function(){
    $("#T2").hide();
    $("#T3").hide();
    $("#T4").hide();
    $("#s1").hide();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#v1").hide();
    $("#v2").hide();
    var t2 = function(){
        $("#T2").fadeIn();
    }

    setTimeout(t2, 500);
    setTimeout(function(){
        $("#T3").fadeIn();
    }, 1000)
    setTimeout(function(){
        $("#T4").fadeIn();
    }, 1500)
    setTimeout(function(){
        $("#s1").fadeIn();
    }, 2000)
    setTimeout(function(){
        $("#s2").fadeIn();
    }, 2500)
    setTimeout(function(){
        $("#s3").fadeIn();
    }, 3000)
    setTimeout(function(){
        $("#s4").fadeIn();
    }, 3500)
    setTimeout(function(){
        $("#s5").fadeIn();
    }, 4000)
    setTimeout(function(){
        $("#v1").fadeIn();
    }, 4500)
    setTimeout(function(){
        $("#v2").fadeIn();
    }, 5000)
})