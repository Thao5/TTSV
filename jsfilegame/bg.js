$(document).ready(function(){
    const colors = [
        '#2196f3',
        '#e91e63',
        '#ffeb3b',
        '#74ff1d',
    ]
    function background(){
        const circle = $("<span><span>");
        var size = Math.random() * 70;
        const bg = colors [Math.floor(Math.random()* colors.length)];
        $(circle).css({
            "width" :  size +"px",
            "height" :  size + "px",
            "top" : Math.random() * innerHeight + "px",
            "left": Math.random() * innerWidth + "px",
            "background" : bg,
        })
        $("section").append(circle);
        setTimeout(() => {
            circle.remove()
        }, 5000)
    }
    setInterval(background, 150);
})