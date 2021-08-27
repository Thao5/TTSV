$(document).ready(function(){
    if($(window).width() > 1180){
        $(".danhsach").hide()

        $(".luachon--item--danhsach > a").click(function(){
            event.preventDefault()
            var tab = $(this).attr("href")
            $(".luachon--item--danhsach .danhsach").fadeOut(650)
            $(tab).fadeIn(650)
        })

        $(".luachon--item--danhsach").mouseleave(function(){
            $(".luachon--item--danhsach .danhsach").fadeOut(650)
        })
    } else{
        $(".luachon").hide()

        $(".mucluc").click(function(){
            $(".luachon").fadeIn(650)

            $(".luachon").mouseleave(function(){
                $(".luachon").fadeOut(650)
            })
        })
        
        $(".danhsach").hide()

        $(".luachon--item--danhsach > a").click(function(){
            event.preventDefault()
            var tab = $(this).attr("href")
            $(".luachon--item--danhsach .danhsach").fadeOut(650)
            $(tab).fadeIn(650)
        })

        $(".luachon--item--danhsach").mouseleave(function(){
            $(".luachon--item--danhsach .danhsach").fadeOut(650)
        })
    }
})