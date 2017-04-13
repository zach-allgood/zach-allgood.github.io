$(document).ready(function(){
    var cat = $("#birthday_cat");
    var horizontalV = 4;
    var verticalV = 4;
    setInterval(function(){
        if(cat.offset().top + cat.height() >= document.body.clientHeight || cat.offset().top <= 0){
            verticalV *= -1;
            cat.offset({top: cat.offset().top + verticalV, left: cat.offset().left + horizontalV });
        } else if (cat.offset().left + cat.width() >= document.body.clientWidth || cat.offset().left <= 0){
            horizontalV *= -1;
            cat.offset({top: cat.offset().top + verticalV, left: cat.offset().left + horizontalV });
        }
        else{
            cat.offset({top: cat.offset().top + verticalV, left: cat.offset().left + horizontalV });
        }

    }, 15);

});