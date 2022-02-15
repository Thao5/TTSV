$(document).ready(function(){
    $("#modal-box").hide()
    $("#modal-box-wrong").hide()
    $(".modal-background").hide()
    $("#content2").hide()
    $(".select").click(function(){
        $(".select").removeClass("on")
        var address = $(this).attr("href");
        var pos = $(this).position();
        $("#test").animate({
            top: pos.top + "px",
        }, 650)
        setTimeout(function(){
            $(this).addClass("on")
        }, 650)
        $("#content1").fadeOut(650)
        $("#content2").fadeOut(650)
        $(address).fadeIn(650)
    })

    $("#submit").click(function(){
        var tmp = $("input").val();
        if(tmp >= 150000 && tmp <= 300000){
            $("#modal-box").show()
            $(".modal-background").show()
            $("#correct").click(function(){
                alert(`Đã đóng thành công ${tmp} VND`)
                $("#modal-box").fadeOut(650)
                $(".modal-background").fadeOut(650)
            })
            $("#thoat").click(function(){
                $("#modal-box").fadeOut(650)
                $(".modal-background").fadeOut(650)
            })
        }else{
            $("#modal-box-wrong").show()
            $(".modal-background").show()
            $("#wrong").click(function(){
                $("#modal-box-wrong").fadeOut(650)
                $(".modal-background").fadeOut(650)
            })
        }
        $(".modal-background").click(function(){
            $("#modal-box").fadeOut(650)
            $(".modal-background").fadeOut(650)
            $("#modal-box-wrong").fadeOut(650)
        })
    })
})