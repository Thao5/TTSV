
$(document).ready(function(){
    $("#k1").hide()
    $("#k2").hide()
    $("#k3").hide()
    $("#k4").hide()
    $("#k5").hide()
    $("#k6").hide()
    $("#k7").hide()
    $("#text1").hide()
    $("#text2").hide()
    $(".d").hide()
    $(".f").hide()
    $(".f1").hide()
    $(".f2").hide()
    $(".play").hide()
    $("#loveyou").hide()
    $(".gotoanothersites").hide()
    $(".link").hide()

    $("#start").click(function(){
        $("#start").fadeOut(1000);
        
        setTimeout(function(){
            $("#text1").fadeIn(1000);
        }, 1000)
        setTimeout(function(){
            $("#text2").fadeIn(1000);
        },2000)
        setTimeout(function(){
            $("#k1").fadeIn(1000);
        }, 3000)
    })

    

    $("#k1").click(function(){
        $("#k3").fadeIn(1000)
    })
    
    $("#k3").click(function(){
        $("#k4").fadeIn(1000)
    })

    $("#k4").click(function(){
        $("#k5").fadeIn(1000)
    })

    $("#k5").click(function(){
        $("#k6").fadeIn(1000)
    })

    $("#k6").click(function(){
        $("#k7").fadeIn(1000)
    })

    $("#k7").click(function(){
        $(".d").fadeIn(1000)
        $(".f").fadeIn(1000)
        setTimeout(function(){
            $("#k1").fadeOut(1000)
            $("#k2").fadeOut(1000)
            $("#k3").fadeOut(1000)
            $("#k4").fadeOut(1000)
            $("#k5").fadeOut(1000)
            $("#k6").fadeOut(1000)
            $("#k7").fadeOut(1000)
            $("#text1").fadeOut(1000)
            $("#text2").fadeOut(1000)
        }, 1000)
        setTimeout(function(){
            $(".f1").fadeIn(1000)
            $(".f2").fadeIn(1000)
        }, 1500)
        setTimeout(function(){
            $("#loveyou").fadeIn(1000);
            setTimeout(function(){
                $(".play").fadeIn(1000);
            }, 1000)
        }, 2500)
        setTimeout(function(){
            $(".gotoanothersites").fadeIn("slow")
        }, 5000)
    })

    $("a").click(function(){
        $(this).addClass("change");

        $(".change .s").css({
            "background-color" : "rgb(253 167 167)",
            "border-color" : "rgb(253 167 167)"
        })

        $(".change .s1").css({
            "border-color" : "rgb(253 167 167)"
        })

        $(this).removeClass("change");
    })

    $("#play-btn").click(function(){
        setTimeout(function(){
            rr.play();
        }, 1050)
    })

    $("#forum").mouseenter(function(){
        $("#F").fadeIn(1000)
    })

    $("#forum").mouseout(function(){
        $("#F").fadeOut(1000)
    })

    $("#game").mouseenter(function(){
        $("#G").fadeIn(1000)
    })

    $("#game").mouseout(function(){
        $("#G").fadeOut(1000)
    })
})